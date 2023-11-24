import { Image, Text } from "react-native";
import { View } from "react-native";

export default function Menu({ navigation, texto1, texto2 }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'flex-end', marginTop: 15 }}>
            <View style={{ marginRight: 15 }}>
                <Text style={{ fontSize: 18 }}>{texto1}</Text>
                <View style={{
                    height: 3, // Altura da linha
                    backgroundColor: 'black'
                }} />
            </View>
            <View>
                <Text style={{ fontSize: 18 }}>{texto2}</Text>
                <View style={{
                    height: 3, // Altura da linha
                    backgroundColor: '#F8B655'
                }} />
            </View>
        </View>
    );
}

