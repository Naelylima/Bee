import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, SafeAreaView, ImageBackground, ScrollView } from 'react-native'
import styles from './styles'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage, db } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import imagem from '../../assets/fundo.png'
import CampoTexto from "../../componentes/CampoTexto"
import estilo from "./CadastroStyle";
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais"
import DropDownPicker from 'react-native-dropdown-picker';
import Botao from "../../componentes/Botao"
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { ToastAndroid } from 'react-native'


export default function Create({ navigation }) {
  const [texto, setTexto] = useState()
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [progressPercent, setProgressoPercent] = useState(0)
  const [imgUrl, setImgUrl] = useState()
  const [image, setImage] = useState()
  const [preview, setPreView] = useState()
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Cliente', value: 'cliente' },
    { label: 'Motorista', value: 'motorista' }
  ]);


  //######################## Imagem ############################
  useEffect(() => {
    if (!image) {
      setPreView(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreView(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [image])

  //######################## Fim Imagem ########################

  const upload = e => {
    // e.preventDefault()

    // const file = image

    // if (!file) {
    //   console.log('Faltou imagem!')
    //   return
    // }

    if (!nome) {
      console.log('Faltou nome!')
      return
    }

    if (!email) {
      console.log('Faltou e-mail!')
      return
    }

    // if (image == null) return

    // const storageRef = ref(
    //   storage,
    //   `images/${nome.replace(/ +/g, '') + '_' + image.name}`
    // )
    // const uploadTask = uploadBytesResumable(storageRef, file)

    // uploadTask.on('state_changed', snapshot => {
    //   const progress = Math.round(
    //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //   )
    //   setTimeout(() => {
    //     setProgressoPercent(progress), 1000
    //   })
    // })
    create()
    adicionar()

  }

  async function adicionar() {
    await addDoc(collection(db, 'clientes'), {
      nome: nome,
      email: email,
      senha: senha
    })

    setEmail('')
    setNome('')
    setSenha('')
    setTexto('Cadastrado com Sucesso!')
    // setPreView(undefined)
  }
  const create = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('foi');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('não foi', errorCode);
        console.log('não foi', errorMessage);
        // ..
      });
  }

  return (
    <ScrollView>
      <ImageBackground source={imagem} style={estilo.imagemFundo}>
        <SafeAreaView style={estilo.centralizandoConteudo}>
          <View style={{ marginTop: 50 }}>
            <TopoTelasIniciais />
          </View>
          <Text style={estilo.titulo}>Faça seu cadastro</Text>
          <View style={estilo.boxTexto}>
            <CampoTexto texto='Nome' booleano={false} value={nome} onChangeText={e => setNome(e)} />
            <CampoTexto texto='E-mail' booleano={false} value={email} onChangeText={e => setEmail(e)} />
            <CampoTexto texto='Senha' booleano={true} value={senha} onChangeText={e => setSenha(e)} />
            <CampoTexto texto='Confirmar senha' booleano={true} />
            <View>
              <Text>
                texto: {texto}

              </Text>
            </View>
            {/* <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={estilo.container}
              dropDownContainerStyle={estilo.lista}
              placeholder="Selecione uma opção"
            /> */}
          </View>
          <Botao texto='Cadastrar' navegarPara='Lojas' onPress={() => upload()} />
          <Text style={{ marginTop: 5 }}>Já tem conta? <Text style={{ color: '#FFA521' }} onPress={() => navigation.navigate('Login')}>Faça login.</Text></Text>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  )
}
// value={email}
//             onChangeText={e => {
//               setEmail(e)
//             }}