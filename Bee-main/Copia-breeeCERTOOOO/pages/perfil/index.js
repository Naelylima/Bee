import { View } from "react-native";
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais";
import { Text } from "react-native";
import CampoTexto from "../../componentes/CampoTexto";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Botao from "../../componentes/Botao";
import PadraoLetra from "../../componentes/PadraoLetra";

export default function Perfil({ navigation }) {
    const [cep, setCep] = useState()

    return (
        <View style={{
            alignItems: 'center',
        }}>
            <View style={{ marginTop: 50 }}>
                <TopoTelasIniciais />
            </View>
            <View style={{ marginLeft: 25, width: '100%' }}>
                <Text style={{ color: '#F8B655', fontSize: 35 }}>Perfil</Text>
                <View style={{ height: 4, backgroundColor: '#F8B655', borderRadius: 10, width: '45%', marginTop: 6 }}></View>
            </View>
            <View style={{ height: '55%', justifyContent: 'space-evenly', marginTop: 20 }}>
                <View style={{ height: 100, display: 'flex', justifyContent: 'space-around' }}>
                    <PadraoLetra texto={'Nome'} />
                    <CampoTexto texto='Nome' booleano={false} onChangeText={(e) => setCep(e)} value={cep} />
                </View>
                <View style={{ height: 100, display: 'flex', justifyContent: 'space-around' }}>
                    <PadraoLetra texto={'Email'} />
                    <CampoTexto texto='Email' booleano={false} onChangeText={(e) => setCep(e)} value={cep} />
                </View>
                <View style={{ height: 100, display: 'flex', justifyContent: 'space-around' }}>
                    <PadraoLetra texto={'Senha'} />
                    <CampoTexto texto='Senha' booleano={false} onChangeText={(e) => setCep(e)} value={cep} />
                </View>

            </View>
            <Botao texto={'Fechar pedido'} />
        </View>
    );
}
