import { ScrollView, Text, View } from "react-native";
import estilo from "./HistoricoPedidosStyle.js";
import { useNavigation } from "@react-navigation/native";
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais.js";
import fotoAdam from '../../assets/Adam Flayman.png'
import SobreNosLoja from "../../componentes/sobrenosLoja.js";
import BlocoHistoricoPedidos from "../../componentes/BlocoHistoricoPedidos.js";

export default function HistoricoPedidos() {
    const navigation = useNavigation()

    return (
        <View style={estilo.centralizandoConteudo}>
            <ScrollView>
                <TopoTelasIniciais />
                <SobreNosLoja textoUm='Carrinho' textoDois='Histórico de Pedidos' largura='65%' />
                <Text style={estilo.titulo}>Histórico de Pedidos</Text>
                <BlocoHistoricoPedidos foto={fotoAdam} nomeProduto='Mel cru' valorProduto='40,00' quantidadeProduto='2' />
                <BlocoHistoricoPedidos foto={fotoAdam} nomeProduto='Mel cru' valorProduto='40,00' quantidadeProduto='2' />
                <BlocoHistoricoPedidos foto={fotoAdam} nomeProduto='Mel cru' valorProduto='40,00' quantidadeProduto='2' />
                <View style={estilo.barra} />
                <Text style={estilo.textoTotal}>Total: <Text style={estilo.valorTotal}> R$ 48,00 </Text></Text>
            </ScrollView>
        </View>
    )
}
