import { Text, View } from "react-native";
import estilo from "./CarrinhoStyle.js";
import { useNavigation } from "@react-navigation/native";
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais.js";
import melCru from '../../assets/melCru.png'
import BlocoCarrinho from "../../componentes/BlocoCarrinho.js";
import SobreNosLoja from "../../componentes/sobrenosLoja.js";

export default function Carrinho() {
    const [cartItems, setCartItems] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);
    const firestore = getFirestore();

    useEffect(() => {
        async function fetchUserData1() {
            try {
                const produtosCollection = collection(firestore, 'produtos');
                const q = query(produtosCollection);

                const querySnapshot = await getDocs(q);
                const restaurantesData = [];

                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    const produto = doc.data();
                    restaurantesData.push({
                        id: doc.id,
                        name: produto.nome,
                        descricao: produto.descricao,
                        price: produto.valor,
                        quantidade: produto.quantidade || 1,
                    });
                });

                setRestaurantes(restaurantesData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchUserData1();
    }, []);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // Se o item já estiver no carrinho, aumente a quantidade
            const updatedCart = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCart);
        } else {
            // Se o item não estiver no carrinho, adicione-o com quantidade 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCart);
    };

    const finishPurchase = async () => {
        try {
            // Lógica para finalizar a compra...

            // Atualizar o estoque no Firestore para cada item no carrinho
            const batch = writeBatch(firestore);

            for (const item of cartItems) {
                const produtoRef = doc(collection(firestore, 'produtos'), item.id);
                const produtoDoc = await getDoc(produtoRef);

                if (!produtoDoc.exists()) {
                    // Verificar se o documento existe antes de continuar
                    Alert.alert('Erro', `Produto ${item.name} não encontrado.`);
                    return;
                }

                const estoqueAtual = produtoDoc.data().quantidade || 0;

                if (item.quantidade > estoqueAtual) {
                    // Verificar se a quantidade em estoque é suficiente
                    Alert.alert('Erro', `Estoque insuficiente para ${item.name}.`);
                    return;
                }

                batch.update(produtoRef, { estoque: estoqueAtual - item.quantity });
            }

            await batch.commit();

            // Limpar o carrinho após a compra
            setCartItems([]);
            Alert.alert('Compra Finalizada', 'Obrigado por comprar!');
        } catch (error) {
            console.error('Erro ao finalizar a compra:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao finalizar a compra. Tente novamente mais tarde.');
        }
    };


    return (
        <View style={estilo.centralizandoConteudo}>
            <TopoTelasIniciais />
            <SobreNosLoja textoUm='Carrinho' textoDois='Histórico de Pedidos' largura='65%' />
            <Text style={estilo.titulo}>Carrinho</Text>
            <BlocoCarrinho foto={melCru} nomeProduto='Mel cru' valorProduto='40,00' quantidadeProduto='2' />
            <BlocoCarrinho foto={melCru} nomeProduto='Mel cru' valorProduto='40,00' quantidadeProduto='2' />
            <BlocoCarrinho foto={melCru} nomeProduto='Mel cru' valorProduto='40,00' quantidadeProduto='2' />
            <View style={estilo.barra} />
            <Text style={estilo.textoTotal}>Total: <Text style={estilo.valorTotal}> R$ 48,00 </Text></Text>
        </View>
    )
}
