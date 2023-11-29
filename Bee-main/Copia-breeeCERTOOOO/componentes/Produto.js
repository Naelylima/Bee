import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Image, Text, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const dimensions = Dimensions.get('window');

export default function Produto({ foto, products, addToCart, navegarPara }) {
    const navigation = useNavigation()
    const [productCart, setProductCart] = useState()

    return (
        <View style={estilo.blocoMaior}>
            <View style={estilo.bloco}>
                <Image source={foto} />
                <View style={estilo.informacoes}>
                    {products.map((product) => (
                        <View key={product.id}>
                            <Text>{product.name}</Text>
                            <Text>{product.descricao}</Text>
                            <Text>${product.price.toFixed(2)}</Text>
                            <TouchableHighlight style={estilo.botao} onPress={() => addToCart(product)} >
                                <Text style={estilo.textoBotao}>Adicionar</Text>
                            </TouchableHighlight>
                        </View>
                    ))}
                </View>
            </View>
            <View style={estilo.barra} />
        </View>
    )
}

const estilo = StyleSheet.create({
    blocoMaior: {
        width: '93%',
        height: 133,
        marginTop: 30,
    },
    bloco: {
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    informacoes: {
        width: '50%',
        marginHorizontal: 10,
    },
    nomeRestaurante: {
        color: "#F8B655",
        fontSize: 25,
    },
    descricao: {
        color: "#000",
        fontSize: 15,
    },
    valor: {
        color: "#000",
        fontSize: 15,
    },
    botao: {
        marginTop: 20,
        backgroundColor: "#F8B655",
        width: 80,
        height: 30,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:30,
        shadowColor: "#F8B655",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 10,

    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    barra: {
        width: '100%',
        height: 4,
        borderColor: "#F8B655",
        borderWidth: 2,
        borderRadius: 50,
    },
})
