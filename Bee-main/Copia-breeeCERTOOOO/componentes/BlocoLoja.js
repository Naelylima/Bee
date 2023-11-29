import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { storage } from "../pages/firebaseConfig"; // Importe a instância de storage do seu arquivo
import { getDownloadURL, ref } from 'firebase/storage';
import { firebase } from "@react-native-firebase/auth";

const BlocoLoja = ({ nomeDoRestaurante, descricaoRestaurante, vendemosRestaurante, navegarPara }) => {
  const navigation = useNavigation();
  const [fotoUrl, setFotoUrl] = useState(null);

  // Função para buscar o URL da imagem no Firebase Storage
  const fetchImage = async () => {
    try {
    //   const storageRef = storage(); // Obtenha uma referência ao serviço de armazenamento
       const storageRef = ref(storage, `imagens/${nomeDoRestaurante}.png`);
      const url = await getDownloadURL(storageRef);
      setFotoUrl(url);
    //   console.log("URL da imagem:", url);
    } catch (error) {
      console.error("Erro ao buscar a imagem:", error.message);
    }
    // console.log("Foto URL:", storage().ref().child('imagens/Adam Flayman.png'));
  };
  fetchImage()

  useEffect(() => {
    fetchImage();
  }, [nomeDoRestaurante]);
  
  useEffect(() => {
    // console.log("Novo valor de fotoUrl:", fotoUrl);
  }, [fotoUrl]);
  

  return (
    <View style={estilo.bloco} >
      {fotoUrl ? (
        <Image source={{ uri: fotoUrl }} style={estilo.foto} />
      ) : (
        <View style={estilo.placeholderImage} />
      )}
      <View style={{ padding: 10 }}>
        <Text style={estilo.nomeRestaurante}>{nomeDoRestaurante}</Text>
        <Text style={estilo.descricao}>{descricaoRestaurante}</Text>
        <Text style={estilo.vendemos}>{vendemosRestaurante}</Text>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  bloco: {
    width: 370,
    height: 133,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: "#F8B655",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  nomeRestaurante: {
    color: "#F8B655",
    fontSize: 25,
  },
  descricao: {
    color: "#000",
    fontSize: 14,
  },
  vendemos: {
    color: "#000",
    fontSize: 13,
    fontWeight: "bold",
  },
  foto: {
    width: 100,
    height: 95,
  },
  placeholderImage: {
    width: 100,
    height: 95,
    backgroundColor: "#ccc", // Cor de espaço reservado enquanto a imagem está carregando
  },
});

export default BlocoLoja;
