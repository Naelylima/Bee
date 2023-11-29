import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import estilo from "./LojasStyle";
import TopoTelasIniciais from "../../Componentes/TopoTelasIniciais";
import { useNavigation } from "@react-navigation/native";
import abelhaimagem from '../../assets/abelha.png'
import TopoHome from "../../Componentes/TopoHome";
import SobreNosLoja from "../../Componentes/sobrenosLoja";
import BlocoLoja from "../../Componentes/BlocoLoja";
import fotoBarry from '../../assets/barry.png'
import fotoVanessa from '../../assets/vanessa.png'
import fotoAdam from '../../assets/adam.png'
import { getStorage, ref, listAll } from "firebase/storage";

export default function Lojas() {
    const navigation = useNavigation()
    const storage = getStorage();
    const listRef = ref(storage, 'files/uid');
    const teste = listAll(listRef)

    return (
        <SafeAreaView style={estilo.centralizandoConteudo}>
            <TopoHome/>
            <SobreNosLoja textoUm='Lojas' textoDois='Sobre nós' largura='40%'/>
            <Text style={estilo.titulo}>Lojas</Text>
            <BlocoLoja foto={fotoBarry} nomeDoRestaurante='Barry Bee Benson' descricaoRestaurante='Uma loja apaixonada por pessoas' vendemosRestaurante='Vendemos mel!' navegarPara={'Produtos'}/>
            <BlocoLoja foto={fotoVanessa} nomeDoRestaurante='Barry Bee Benson' descricaoRestaurante='Uma loja apaixonada por pessoas' vendemosRestaurante='Vendemos mel!' navegarPara={'Produtos'}/>
            <BlocoLoja foto={fotoAdam} nomeDoRestaurante='Barry Bee Benson' descricaoRestaurante='Uma loja apaixonada por pessoas' vendemosRestaurante='Vendemos mel!' navegarPara={'Produtos'}/>
        </SafeAreaView>
    )
}
