import { useNavigation } from "@react-navigation/native";
import { Alert, Dimensions, Image, Text, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const dimensions = Dimensions.get('window');

export default function BlocoLoja({ foto, nomeDoRestaurante, descricaoRestaurante, vendemosRestaurante, navegarPara }) {
    const navigation = useNavigation()

    return (
        <View style={estilo.bloco} onStartShouldSetResponder={() => navigation.navigate(navegarPara)} >
            <Image source={foto} style={estilo.foto}/>
            <View style={{padding:10}}>
                <Text style={estilo.nomeRestaurante}>{nomeDoRestaurante}</Text>
                <Text style={estilo.descricao}>{descricaoRestaurante}</Text>
                <Text style={estilo.vendemos}>{vendemosRestaurante}</Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco: {
        width: 370,
        height: 133,
        backgroundColor: '#fff',
        borderRadius: 20,

        borderWidth: 0,
        shadowColor: "#F8B655",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    nomeRestaurante: {
        color: "#F8B655",
        fontSize: 25,
    },
    descricao: {
        color: "#000",
        fontSize: 14,
    },
    vendemos: {
        color: "#000",
        fontSize: 13,
        fontWeight: 'bold',
    },
    foto:{
        width:100,
        height:95
    }
})
