import { useNavigation } from "@react-navigation/native";
import { Alert, Dimensions, Image, Text, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import aumentar from '../assets/aumentar.png'
import diminuir from '../assets/diminuir.png'

const BlocoCarrinho = ({ foto, nomeProduto, valorProduto, quantidadeProduto, onIncrease, onDecrease }) => {
    return (
        <View style={estilo.blocoMaior}>
            <View style={estilo.bloco}>
                <Image source={foto} />
                <View style={estilo.informacoes}>
                    <Text style={estilo.nomeProduto}>{nomeProduto}</Text>
                    <Text style={estilo.valor}>R$ {valorProduto}</Text>
                    <Text style={estilo.qtdAtual}>
                        Quantidade atual: <Text style={estilo.textColorido}>{quantidadeProduto}</Text>
                    </Text>
                </View>
                <View style={estilo.fundoBotao}>
                    <TouchableHighlight onPress={onIncrease}>
                        <Image source={aumentar} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={onDecrease}>
                        <Image source={diminuir} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};


const estilo = StyleSheet.create({
    blocoMaior: {
        width: '93%',
        height: 133,
    },
    bloco: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    informacoes: {
        width: '49%',
        marginHorizontal: 10,
    },
    nomeProduto: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    descricao: {
        color: "#000",
        fontSize: 15,
    },
    valor: {
        color: "#000",
        fontSize: 15,
    },
    qtdAtual: {
        fontSize: 18,
    },
    textColorido: {
        color: '#FFA521',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    fundoBotao: {
        height: 100,
        justifyContent: 'space-around'
    },
})
export default BlocoCarrinho;