import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 844 / 428)
const imageWidth = dimensions.width;

const estilo = StyleSheet.create({
    centralizandoConteudo: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 10
    },
    titulo: {
        fontSize: 36,
        textAlign: "left",
        marginVertical: 20,
        // alignItems: "flex-start",
        width: '100%',
        paddingLeft: 10,
        color: '#F8B655',
        // fontWeight: 800,
    },
    boxTexto: {
        display: "flex",
        justifyContent: "space-between",
        height: '42%',
    },
})

export default estilo;
