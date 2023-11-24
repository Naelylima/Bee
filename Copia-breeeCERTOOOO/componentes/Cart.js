// src/componentes/Cart.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity, finishPurchase }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View>
      <Text style={styles.cartTitle}>Carrinho de Compras</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text>{item.name}</Text>
          <Text>Quantidade: {item.quantity}</Text>
          <Text>Preço: ${item.price.toFixed(2)}</Text>
          <Button title="Remover do Carrinho" onPress={() => removeFromCart(item.id)} />
          <View style={styles.quantityButtons}>
            <Button title="+" onPress={() => increaseQuantity(item.id)} />
            <Button title="-" onPress={() => decreaseQuantity(item.id)} />
          </View>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text>Total: ${calculateTotal()}</Text>
      </View>
      <Button title="Finalizar Compra" onPress={finishPurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  totalContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  quantityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Cart;
