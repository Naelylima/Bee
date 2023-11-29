import { Dimensions, StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    centralizandoConteudo: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 36,
        textAlign: "left",
        width: '100%',
        paddingLeft: 10,
        marginBottom: 10,
        color: '#F8B655',
        fontWeight: "bold",
    },
    boxTexto: {
        display: "flex",
        justifyContent: "space-between",
        height: '42%',
    },
    tituloGlossario: {
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
    },
    textColorido: {
        color: '#FFA521', 
        fontSize: 15
    },
    textNormal: {
        color: '#000', 
        fontSize: 15
    },
    barra: {
        width: '93%',
        height: 4,
        borderColor: "#F8B655",
        borderWidth: 2,
        borderRadius: 50,
    },
    textoTotal: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "right",
        width: '93%',
        marginTop: 10,
    },
    valorTotal: {
        fontWeight: "normal"
    },
})

export default estilo;
