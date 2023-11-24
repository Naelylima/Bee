import {StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    texto1:{
        fontSize: 20,
        color:'#fff'
    },
    caixa:{
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding:10, 
        fontSize: 20,
        borderColor: '#555',
    }, 
    caixa2:{
        padding: 20,
    },
    botao: {
        width: 80,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding:10, 
        backgroundColor:'#555',
        color:'#FFF',
        justifyContent: 'center',
        alignItems:'center',
    }
})

export default styles