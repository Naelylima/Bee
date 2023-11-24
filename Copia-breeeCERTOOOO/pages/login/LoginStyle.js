import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 844 / 428)
const imageWidth = dimensions.width;

const estilo = StyleSheet.create({
    imagemFundo: {
        width: imageWidth,
        height: imageHeight,
    },
    centralizandoConteudo:{
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: "space-between",
    },
    titulo:{
        marginVertical: 70,
        fontSize: 35,
    },
    boxTexto:{
        display: "flex",
        justifyContent: "space-between",
        height: '25%',
    },
})

export default estilo;
