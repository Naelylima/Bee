import { useNavigation } from "@react-navigation/native";
import { Alert, Dimensions, Image, Text, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const dimensions = Dimensions.get('window');

export default function BlocoLojaPequeno({ height,foto, nomeDoRestaurante, descricaoRestaurante, vendemosRestaurante, navegarPara }) {
    const navigation = useNavigation()

    return (
        <View style={estilo.bloco} onStartShouldSetResponder={() => navigation.navigate(navegarPara)} >
            <Image source={foto} style={{height:height, resizeMode:'contain'}}/>
            <View>
                <Text style={estilo.nomeRestaurante}>{nomeDoRestaurante}</Text>
                
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco: {
        width: '100%',
        height: 80,

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
        fontSize: 15,
    },
    vendemos: {
        color: "#000",
        fontSize: 15,
        fontWeight: 'bold',
    }
})
