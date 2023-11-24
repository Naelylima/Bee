
import { StyleSheet, TextInput } from "react-native";

export default function CampoTexto({texto, booleano, value, onChangeText}) {
    return (
        <TextInput
            placeholder= {texto}
            style={estilo.campotexto}
            secureTextEntry={booleano}
            value={value}
            onChangeText={onChangeText}
            
        />
    )
}

const estilo = StyleSheet.create({
    campotexto:{
        width: 350,
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 18,
        paddingLeft: 20,

        shadowColor: "#F8B655",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    textos:{
        fontSize: 20
    }
})

