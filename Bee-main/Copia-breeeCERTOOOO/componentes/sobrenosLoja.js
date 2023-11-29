import { Alert, Dimensions, Text, View } from "react-native";
import { StyleSheet } from "react-native";

// LÓGICA PARA MUDAR DE TELA E COR NA PALAVRA

const dimensions = Dimensions.get('window');
// const [clicou, setClicou] = useState(false)

export default function 
SobreNosLoja({ textoUm, textoDois, largura }) {
    return (
        <View style={[estilo.pagina, {width: largura}]}>
            <View onPress={() => Alert.alert('clicou')}>
                <Text style={estilo.texto}>{textoUm}</Text>
                <View style={estilo.sublinhadoLojas} />
            </View>
            <View>
                <Text style={estilo.texto}>{textoDois}</Text>
                <View style={estilo.sublinhadoSobreNos} />
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    pagina: {
        // width: largura,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: 'flex-end',
        height: 60,
        marginTop: 20,
    },
    texto: {
        fontSize: 18,
    },
    sublinhadoLojas: {
        backgroundColor: '#FFA521',
        height: 4,
        alignSelf: 'stretch',
        marginBottom: -30,
        borderRadius: 50,
    },
    sublinhadoSobreNos: {
        backgroundColor: '#FFA521',
        height: 4,
        alignSelf: 'stretch',
        marginBottom: -40,
        borderRadius: 50,
    },
})
