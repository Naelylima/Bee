import React, { useEffect, useState } from "react";
import { View, Image, Text, Alert } from "react-native";
import NavBar2 from "../../componentes/NavBar2";
import Menu from '../../componentes/Menu'
import BlocoLoja from "../../componentes/BlocoLoja";
import bee from '../../assets/bee.png';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
 
 
export default function LojasEntregar() {
    const [cep, setCep] = useState()
    const [restaurantes, setRestaurantes] = useState([]);
    const firestore = getFirestore();
    const [imageUrl, setImageUrl] = useState([]);
 
    // Função para buscar dados de uma coleção
    async function fetchUserData() {
        const querySnapshot = await getDocs(collection(firestore, 'lojas')); // Substitua 'usuarios' pelo nome da sua coleção
 
        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            console.log(doc.data()['nomeRestaurante'])
        });
    }
 
    useEffect(() => {
        async function fetchUserData1() {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'lojas'));
                const restaurantesData = [];
 
                querySnapshot.forEach(async (doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    const restaurante = doc.data();
                    restaurantesData.push({
                        id: doc.id,
                        nomeRestaurante: restaurante.nomeRestaurante,
                        descricao: restaurante.descricao,
                        tipoProduto: restaurante.tipoProduto,
                    });
 
                    const getDownloadUrl = async () => {
                        try {
                            const storageRef = ref(storage, 'imagens/' + restaurante.nomeRestaurante + '.png'); // Substitua pelo caminho da sua imagem
                            const url = await getDownloadURL(storageRef);
                            setImageUrl(url);
                            console.log(url, 'url');
                        } catch (error) {
                            console.error('Erro ao obter URL de download:', error);
                        }
                    };
                    getDownloadUrl()
 
                    // const promises = Object.keys(restaurante).map(async function (chave) {
                    //     if (restaurante[chave] == restaurante.nomeRestaurante) {
                    //         const url = await getDownloadUrl(restaurante[chave]);
                    //         console.log('URL da Foto:', url);
                    //         // Faça o que precisar com a URL, por exemplo, adicionar à sua interface
                    //     }
                    // });
 
                    // await Promise.all(promises);
 
                    // O código aqui será executado depois que todas as fotos forem processadas
                    // Pode ser usado para qualquer lógica adicional que você precisa realizar depois de obter todas as URLs.
                });
 
                setRestaurantes(restaurantesData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }
 
        //beedelivery-bf5d7.appspot.com/imagens/Adam Flayman.png
 
        fetchUserData1();
 
 
    }, []);
    const storage = getStorage();
    const [imageBee, setimageBee] = useState()
 
 
    return (
        <View style={{
            alignItems: 'center',
        }}>
            <NavBar2 texto={'Seus pedidos hoje!'} />
            <Menu texto1={'Para entregar'} texto2={'Entregues'} />
            <View>
                <Text style={{ color: '#F8B655', fontSize: 25, marginBottom: 10 }}>Lojas</Text>
                {/* <BlocoLoja nomeDoRestaurante={'Adam Flayman'} descricaoRestaurante={'1 Janette'} foto={bee} /> */}
                {restaurantes.map((restaurante) => (

                    <BlocoLoja
                        key={restaurante.id}
                        foto={{ uri:  imageBee}}
                        nomeDoRestaurante={restaurante.nomeRestaurante}
                        descricaoRestaurante={restaurante.descricao}
                        vendemosRestaurante={restaurante.tipoProduto}
                    // navegarPara={'produtos'}
                    />
                ))}
            </View>
            {/* <View>
                {imageUrl ? (
                    <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
                ) : (
                    <Text>Carregando imagem...</Text>
                )}
            </View> */}
        </View>
    );
}
 