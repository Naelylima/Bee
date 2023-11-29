import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'
import Create from "./pages/create";
import Maps from "./pages/maps"
import Login from "./pages/login"
import Home from "./pages/home"
import Endereco from "./pages/endereco";
import Perfil from "./pages/perfil";
import LojasEntregar from "./pages/lojasEntregar";
import PedidoEntregar from "./pages/pedidoEntregar";
import Produtos from "./pages/Produtos/Index";
import Carrinho from "./pages/Carrinho/Index";
import HistoricoPedidos from "./pages/HistoricoPedidos/Index";
import App1 from "./pages/Carrinho/carrinho";


const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar() {
    return (

        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#FFDB6F',
                tabBarInactiveTintColor: 'black',
            }}
        >
            
            <Nav.Screen name="Produtos" component={Produtos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />
            
            {/* <Nav.Screen name="Carrinho" component={App1}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            /> */}
            <Nav.Screen name="Carrinho2" component={Carrinho}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="LojaEntregar" component={LojasEntregar}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="Maps" component={Maps}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="PedidoEntregar" component={PedidoEntregar}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="Perfil" component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="Endereco" component={Endereco}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />

            {/* <Nav.Screen name="Login" component={Login}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="Create" component={Create}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            /> */}



        </Nav.Navigator>
    )
}

export default function Routers({ navigation }) {
    return (

        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="home" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="Maps"
                    component={Maps}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="home" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="home" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="home" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="home" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="HistoricoPedidos"
                    component={HistoricoPedidos}
                    options={{
                        headerShown: false,
                        // title: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="historico" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="Carrinho"
                    component={App1}
                    options={{
                        headerShown: false,
                        // title: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="carrinho" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="Produtos"
                    component={Produtos}
                    options={{ title: false, headerShown: false }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}
