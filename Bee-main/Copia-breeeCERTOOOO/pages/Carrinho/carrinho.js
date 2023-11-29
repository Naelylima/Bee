// src/App.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import ProductList from '../../componentes/ProductList';
import Cart from '../../componentes/Cart';
// import { collection, getDocs, getFirestore, query, writeBatch } from 'firebase/firestore';
import { doc, collection, writeBatch, getDoc, getFirestore, query, getDocs } from 'firebase/firestore';
import { useNavigation, useRoute } from "@react-navigation/native";
const App1 = () => {
    const [cartItems, setCartItems] = useState([]);
    const firestore = getFirestore();
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        // Recuperar os itens do carrinho da rota
        const { params } = route;
        if (params && params.cartItems) {
            setCartItems(params.cartItems);
        }
    }, [route.params]);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCart);
    };

    const finishPurchase = async () => {
        try {
            // Lógica para finalizar a compra...

            // Atualizar o estoque no Firestore para cada item no carrinho
            const batch = writeBatch(firestore);

            for (const item of cartItems) {
                const produtoRef = doc(collection(firestore, 'produtos'), item.id);
                const produtoDoc = await getDoc(produtoRef);

                if (!produtoDoc.exists()) {
                    // Verificar se o documento existe antes de continuar
                    Alert.alert('Erro', `Produto ${item.name} não encontrado.`);
                    return;
                }

                const estoqueAtual = produtoDoc.data().quantidade || 0;

                if (item.quantidade > estoqueAtual) {
                    // Verificar se a quantidade em estoque é suficiente
                    Alert.alert('Erro', `Estoque insuficiente para ${item.name}.`);
                    return;
                }

                batch.update(produtoRef, { estoque: estoqueAtual - item.quantity });
            }

            await batch.commit();

            // Limpar o carrinho após a compra
            setCartItems([]);
            Alert.alert('Compra Finalizada', 'Obrigado por comprar!');
        } catch (error) {
            console.error('Erro ao finalizar a compra:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao finalizar a compra. Tente novamente mais tarde.');
        }
    };




    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                {/* <ProductList products={restaurantes} addToCart={addToCart} /> */}
                <Cart
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    finishPurchase={finishPurchase}
                />
            </View>
        </ScrollView>
    );
};

export default App1;
