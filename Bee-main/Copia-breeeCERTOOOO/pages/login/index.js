import styles from './styles'
import { ImageBackground, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import TopoTelasIniciais from '../../componentes/TopoTelasIniciais';
import CampoTexto from '../../componentes/CampoTexto';
import Botao from '../../componentes/Botao';
import imagem from '../../assets/fundo.png'
import estilo from './LoginStyle';



export default function Login({ navigation }) {
    const [email, setEmail] = useState('adm@adm.com')
    const [password, setPassword] = useState('adm123')

    const auth = getAuth();

    const btLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('NavBar')
                // console.log(user);
                // navigation.navigate('Create')
                unsubscribe()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const unsubscribe = () => auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('Referência do usuário autenticado:', user);
          console.log('UID do usuário autenticado:', user.uid);
          // Você pode adicionar a lógica que desejar aqui após a autenticação bem-sucedida.
        }
      });
      

    return (
        <ImageBackground source={imagem} style={estilo.imagemFundo}>
            <View style={estilo.centralizandoConteudo}>
                <View style={{ marginTop: 50 }}>
                    <TopoTelasIniciais />
                </View>
                <Text style={estilo.titulo}>Faça seu login!</Text>
                <View style={estilo.boxTexto}>
                    <CampoTexto texto='E-mail' booleano={false} onChangeText={(e) => setEmail(e)} value={email} />
                    <CampoTexto texto='Senha' booleano={true} onChangeText={(e) => setPassword(e)} value={password} />
                </View>
                <Botao texto='Logar' onPress={() => btLogin()} />
                <Text>Não tem conta? <Text style={{ color: '#FFA521' }} onPress={() => navigation.navigate('Create')}>Faça o cadastro.</Text></Text>
            </View>
        </ImageBackground>
    );
}

