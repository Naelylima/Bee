import { View } from "react-native";
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais";
import { Text } from "react-native";
import CampoTexto from "../../componentes/CampoTexto";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Botao from "../../componentes/Botao";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Endereco({ navigation }) {
    const [cep, setCep] = useState()
    const [rua, setRua] = useState()
    const [bairro, setBairro] = useState()
    const [numero, setNumero] = useState()
    const [cidade, setCidade] = useState()


        // Função para registrar o endereço
        const registerAddress = async () => {
          const auth = getAuth();
          const user = auth.currentUser;
      
          if (user) {
            // Obtenha os detalhes do endereço da pessoa (substitua com os dados reais)
            const endereco = {
              rua: '123 Rua Principal',
              cidade: 'Cidade',
              // Outros detalhes do endereço
            };
      
            // Crie uma referência para o Firestore
            const db = getFirestore();
      
            // Adicione o documento de endereço ao Firestore
            try {
              const docRef = await addDoc(collection(db, 'addresses'), {
                userId: user.uid, // Vincule o endereço ao usuário
                endereco: endereco,
              });
              console.log('Endereço registrado com ID: ', docRef.id);
            } catch (error) {
              console.error('Erro ao registrar endereço: ', error);
            }
          }
        };

    return (
        <View style={{
            alignItems: 'center',
        }}>
            <View style={{ marginTop: 50 }}>
                <TopoTelasIniciais />
            </View>
            <View style={{ marginLeft: 25, width: '100%' }}>
                <Text style={{ color: '#F8B655', fontSize: 35 }}>Seu endereço:</Text>
                <View style={{ height: 4, backgroundColor: '#F8B655', borderRadius: 10, width: '45%', marginTop: 6 }}></View>
            </View>
            <View style={{ height: '60%', justifyContent: 'space-evenly', marginTop:20 }}>
                <CampoTexto texto='CEP' booleano={false} onChangeText={(e) => setCep(e)} value={cep} />
                <CampoTexto texto='Rua' booleano={false} onChangeText={(e) => setRua(e)} value={rua} />
                <CampoTexto texto='Bairro' booleano={false} onChangeText={(e) => setBairro(e)} value={bairro} />
                <CampoTexto texto='Número' booleano={false} onChangeText={(e) => setNumero(e)} value={numero} />
                <CampoTexto texto='Cidade' booleano={false} onChangeText={(e) => setCidade(e)} value={cidade} />
            </View>
                    <Botao texto={'Fechar pedido'} onPress={registerAddress()}/>
        </View>
    );
}
