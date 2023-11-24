import { Dimensions, StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    centralizandoConteudo: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 36,
        textAlign: "left",
        marginVertical: 20,
        width: '100%',
        paddingLeft: 10,
        color: '#F8B655',
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
    containerGlossario: {
        padding: 9,
        width: '93%',
        height: 110,
        marginTop: 20,
        backgroundColor: '#F2F2F2',

        borderTopColor: "#F8B655",
        borderTopWidth: 4,
        borderRadius: 6,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 5.32,

        elevation: 16,
    },
    textColorido: {
        color: '#FFA521', 
        fontSize: 15
    },
    textNormal: {
        color: '#000', 
        fontSize: 15
    },
})

export default estilo;
