import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex: 0.2,
        width: '100%',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        padding: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto1: {
        fontSize: 50,
        color: '#2E8B57',
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 30,
    },
    top: {
        flexDirection: 'column',
        backgroundColor: '#f00',
    },
    campo: {
        width: '70%',
        paddingBottom: 10,
        paddingTop: 10,
    },
    caixa1: {
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '100%',
        padding: 10,
    },
    foto0: {
        padding: 10,
        alignItems: 'center',
    },
    foto1: {
        width: 150,
        height: 150,
        backgroundColor: '#EEE9E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    entrada: {
        paddingBottom: 10,
        paddingTop: 2,
        alignItems: 'center',
    },
    botao: {
        width: '30%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: '30%',
        height: 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32a852',
        borderRadius: 5,
        shadowOffset: { height: 4, width: 4 },
        shadowColor: '#b1f2c3',
    },
    btnContainer: {
        pading: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
    },
    sucesso: {
        fontSize: 10,
        color: '#0f0',
    },
    txtButton: {
        fontSize: 15,
        color: '#333',
    },
})

export default styles