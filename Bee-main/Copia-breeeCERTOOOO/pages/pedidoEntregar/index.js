import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import bee from '../../assets/bee.png'
import { Text } from "react-native";
import NavBar2 from "../../componentes/NavBar2";
import Menu from "../../componentes/Menu";
import BlocoLoja from "../../componentes/BlocoLoja";
import BlocoLojaPequeno from "../../componentes/BlocoLojaPequeno";
import Endereco from "../../componentes/Enderecos";
import firestore, { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

export default function Mapa({ navigation }) {

    const firestore = getFirestore();

    // Função para buscar dados de uma coleção
    async function fetchUserData() {
        const querySnapshot = await getDocs(collection(firestore, 'lojas')); // Substitua 'usuarios' pelo nome da sua coleção

        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
        });
    }

    // Chame a função para buscar os dados
    fetchUserData();
    return (
        <ScrollView>

            <View style={{
                alignItems: 'center',
            }}>
                <NavBar2 texto={'Seus pedidos hoje!'} />
                {/* LOJA */}
                <View style={{ padding: 10 }}>
                    <BlocoLojaPequeno nomeDoRestaurante={'Vanessa Bloome'} foto={bee} height={65} />
                </View>
                {/* BLOCO DE MAPA */}
                <View style={{ backgroundColor: '#fff', height: 800, width: '90%', padding: 10, borderRadius: 15, justifyContent: 'space-between' }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Endereco />
                        <Endereco />
                        <Endereco />
                    </View>
                    <View style={{ height: 400, width: '100%', alignItems: 'center', padding: 10 }}>
                    </View>
                </View>
            </View>
        </ScrollView>

    );
}
