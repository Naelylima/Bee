import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import estilo from "./CarrinhoStyle.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais.js";
import BlocoCarrinho from "../../componentes/BlocoCarrinho.js";
import SobreNosLoja from "../../componentes/sobrenosLoja.js";
import { doc, collection, writeBatch, getDoc, getFirestore } from "firebase/firestore";
import { Button } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Botao from '../../componentes/Botao.js';

export default function Carrinho() {
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
          item.id === productId
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null  // Se a quantidade for 1, retorne null para indicar remoção
            : item
        );
      
        // Filtrar itens nulos para remover o item do carrinho
        const filteredCart = updatedCart.filter((item) => item !== null);
        
        setCartItems(filteredCart);
      };
      

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const finishPurchase = async () => {
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

            if (item.quantity > estoqueAtual) {
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
    };

    return (
        <View style={estilo.centralizandoConteudo}>
            <TopoTelasIniciais />
            <SobreNosLoja textoDois='Histórico de Pedidos' largura='65%' />
            <Text style={estilo.titulo}>Carrinho</Text>
            {cartItems.map((item) => (
                <BlocoCarrinho
                    key={item.id}
                    foto={item.foto}
                    nomeProduto={item.name}
                    valorProduto={item.price}
                    quantidadeProduto={item.quantity}
                    onIncrease={() => increaseQuantity(item.id)}
                    onDecrease={() => decreaseQuantity(item.id)}
                />
                
            )
            )}
            <View style={estilo.barra} />
            <Text style={estilo.textoTotal}>Total: <Text style={estilo.valorTotal}> R$ {calculateTotal()} </Text></Text>
                <Botao texto={'Finalizar compra'} onPress={finishPurchase}/>
        </View>

    );
}
