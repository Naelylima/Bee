import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function BlocoHistoricoPedidos({ foto, nomeProduto, valorProduto, quantidadeProduto, navegarPara }) {
    const navigation = useNavigation()
    
    return (
        <View style={estilo.blocoMaior}>
            <Text style={estilo.dataPedido}>11 de agosto de 2023</Text>
            <View style={estilo.bloco}>
                <View style={estilo.blocoFoto}>
                    <Image source={foto} style={estilo.imagem} />
                    <Text style={estilo.nomeRestaurante}>Adam Flayman</Text>
                </View>
                <Text style={estilo.textoProdutos}>2 Janette</Text>
                <Text style={estilo.textoProdutos}>1 Bob Bumble</Text>
                <Text style={estilo.textoProdutos}>1 Trudy</Text>
                <Text style={estilo.textoProdutos}>1 Trudy</Text>
                <Text style={estilo.textoProdutos}>1 Trudy</Text>
                <Text style={estilo.textoTotalColorido}>Total: <Text style={estilo.valorTotal}>R$ 48,00</Text></Text>
            </View>
            <Text style={estilo.numeroPedido}>Pedido número 1</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    blocoMaior: {
        width: '93%',
        height: '30%',
        margin: 10,
        alignSelf: 'stretch'
    },
    dataPedido: {
        fontSize: 18,
    },
    bloco: {
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        padding: 15,

        shadowColor: "#FFBF00",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    blocoFoto: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    imagem: {
        width: 40,
        height: 50,
        borderRadius: 20,
        marginRight: 15,
    },
    nomeRestaurante: {
        color: '#FFBF00',
        fontSize: 25,
        fontWeight: "bold",
    },
    textoProdutos: {
        fontSize: 18,
        marginBottom: 8,
    },
    textoTotalColorido: {
        color: '#FFBF00',
        fontSize: 20,
        fontWeight: "bold",
    },
    valorTotal: {
        color: '#000',
        fontSize: 18.
    },
    numeroPedido: {
        marginTop: 11,
        fontSize: 15,
        textAlign: "right",
    },
})
