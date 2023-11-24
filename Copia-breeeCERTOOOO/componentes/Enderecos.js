import { Image, Text } from "react-native";
import { View } from "react-native";
import Mapa from "../pages/pedidoEntregar";

export default function Endereco({ navigation, texto1, texto2 }) {
    return (
        <View style={{ display: 'flex', width: '90%', height: 100, backgroundColor: 'white', justifyContent: 'flex-between', marginTop: 15 }}>
            <View>
                <Text>Endereço</Text>
                <Text>ss</Text>
                <Text>aaa</Text>
            </View>
            <View style={{ width: '100%', backgroundColor: 'yellow', height: 5 }}>
            </View>
        </View>
    );
}

