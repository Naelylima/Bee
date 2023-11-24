import { Dimensions, Image, View } from "react-native";
import imagem from '../assets/topo-amarelo.png'
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 50 / 397)
const imageWidth = dimensions.width;

export default function PadraoLetra({ texto }) {
    return (
        <View>
            <Text style={{ color: '#F8B655', fontSize: 20, fontWeight: 'bold' }}>{texto}</Text>
        </View>
    )
}
