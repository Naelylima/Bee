import { Text, View } from "react-native";
import estilo from "./ProdutosStyle.js";
import { useNavigation } from "@react-navigation/native";
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais.js";
import Produto from "../../componentes/Produto.js";
import melCru from '../../assets/melCru.png'

// src/App.js
import React, { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import ProductList from '../../componentes/ProductList';
import Cart from '../../componentes/Cart';
// import { collection, getDocs, getFirestore, query, writeBatch } from 'firebase/firestore';
import { doc, collection, writeBatch, getDoc, getFirestore, query, getDocs } from 'firebase/firestore';

export default function Produtos() {
    const navigation = useNavigation()
    const [cartItems, setCartItems] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);
    const firestore = getFirestore();

    useEffect(() => {
        async function fetchUserData1() {
            try {
                const produtosCollection = collection(firestore, 'produtos');
                const q = query(produtosCollection);

                const querySnapshot = await getDocs(q);
                const restaurantesData = [];

                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    const produto = doc.data();
                    restaurantesData.push({
                        id: doc.id,
                        name: produto.nome,
                        descricao: produto.descricao,
                        price: produto.valor,
                        quantidade: produto.quantidade || 1,
                    });
                });

                setRestaurantes(restaurantesData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchUserData1();
    }, []);

// Dentro do componente Produtos
const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
        // Se o item já estiver no carrinho, aumente a quantidade
        const updatedCart = cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    } else {
        // Se o item não estiver no carrinho, adicione-o com quantidade 1
        const updatedCart = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCart);

        // Navegar para a tela de Carrinho e passar os produtos como parâmetro
        navigation.navigate('Carrinho2', { cartItems: updatedCart });
    }
};


    return (
        <View style={estilo.centralizandoConteudo}>
            <TopoTelasIniciais />
            <Text style={estilo.titulo}>Vanessa Bloome</Text>
            <Produto products={restaurantes} addToCart={addToCart} />
            {/* <View style={estilo.containerGlossario}>
                <Text style={estilo.tituloGlossario}>Mini-glossário</Text>
                <Text style={estilo.textColorido}>Abelhar <Text style={estilo.textNormal}>= combinar</Text></Text>
                <Text style={estilo.textColorido}>Abelhado <Text style={estilo.textNormal}>= combinado</Text></Text>
                <Text style={estilo.textColorido}>Abelhadíssimo <Text style={estilo.textNormal}>= puríssimo</Text></Text>
            </View> */}
        </View>
    )
}
