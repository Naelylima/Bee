// src/components/ProductList.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductList = ({ products, addToCart }) => {
  return (
    <View>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Text>{product.name}</Text>
          <Text>{product.descricao}</Text>
          <Text>${product.price.toFixed(2)}</Text>
          <Button title="Adicionar ao Carrinho" onPress={() => addToCart(product)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ProductList;
