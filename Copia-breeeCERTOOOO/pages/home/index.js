import { View } from "react-native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "react-native";
import { Image } from "react-native";
import NavBar2 from "../../componentes/NavBar2";
import Menu from "../../componentes/Menu";



export default function Home({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth();


  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
    }}>
      {/* NAV BAR */}
      <NavBar2 texto={'Seja bem-vindo(a)!'} />
      {/* MENU */}
      <Menu texto1={'Lojas'} texto2={'Sobre nós'}/>
      {/* TEXTO */}
      <View style={{ height: 220, display: 'flex', justifyContent: 'space-evenly', marginTop: 0 }}>
        <Text style={{ fontSize: 18 }}>Nosso aplicativo foi inspirado no filme Bee Movie!
        </Text>
        <Text style={{ fontSize: 18 }}>Inclusive, os nomes dos pães de mel são inspirados em personagens do filme.</Text>
        <Text style={{ fontSize: 18 }}>Esperamos que goste!</Text>
      </View>
      {/* IMAGEM */}
      <View>
        <Image source={require('../../assets/naely_emilly.png')}
          style={{ width: 360, height: 280 }} />
      </View>
    </View>
  );
}

