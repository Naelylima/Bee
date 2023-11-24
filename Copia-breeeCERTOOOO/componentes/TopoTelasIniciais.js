import { Dimensions, Image } from "react-native";
import imagem from '../assets/topo-amarelo.png'
import { StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 50 / 397)
const imageWidth = dimensions.width;

export default function TopoTelasIniciais() { return (<Image source={imagem} style={estilo.imagem} />) }

const estilo = StyleSheet.create({
    imagem: {
        width: imageWidth,
        height: imageHeight,
    }
})
