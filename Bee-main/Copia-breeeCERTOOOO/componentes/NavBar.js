import { Image, Text } from "react-native";
import { View } from "react-native";

export default function NavBar({ navigation }) {
    return (
        <View>
            {/* NAV BAR */}
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                <View>
                    <View style={{ marginTop: 50, width: '100%', marginLeft: -10 }}>
                        <Image source={require('../assets/logoBeeDelivery.png')}
                            style={{ width: 130, height: 25 }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <Text style={{ fontSize: 25 }}>Olá,</Text><Text style={{ color: '#F8B655', fontSize: 25 }}> Emilly Santos</Text>
                    </View>
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>Seja bem-vindo(a)!</Text>
                    <View style={{
                        height: 3, // Altura da linha
                        backgroundColor: '#F8B655'
                    }}></View>
                </View>
                <View>
                    <Image
                        source={require('../assets/BeeDelivery.png')}
                        style={{ width: 100, height: 80 }}
                    />
                </View>
            </View>
        </View>
    );
}

