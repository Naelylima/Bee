import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { Dimensions, Text, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 50 / 397)
const imageWidth = dimensions.width;

export default function Botao({ texto,  navegarPara, onPress}) {
    const navigation = useNavigation();

    // const navigation = useNavigation();
    console.log(navegarPara)
    const [isHovered, setIsHovered] = useState(false);

    const handlePressIn = () => {
        setIsHovered(true);
    };

    const handlePressOut = () => {
        setIsHovered(false);
    };

    const estiloBotao = [
        estilo.botao,
        isHovered,
    ];

    return (
        <TouchableHighlight
            // onPressIn={handlePressIn}
            // onPressOut={handlePressOut}
            // underlayColor="#F8B655"
            // activeOpacity={1}
            style={estiloBotao}
            onPress={onPress}
            >
            <Text style={estilo.texto}>{texto}</Text>
        </TouchableHighlight>
    )
}

const estilo = StyleSheet.create({

    botao: {
        width: 200,
        height: 55,
        marginTop: 20,
        backgroundColor: '#FFA521',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#F8B655",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})
