import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateQuantity, removeFromCart, clearCart } from '../../store/slices/cartSlice';
import { COLORS } from '../../constants/theme';
import styles from './styles';

const CartScreen = () => {
  const dispatch = useAppDispatch();
  const { items: cartItems, totalAmount } = useAppSelector((state) => state.cart);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage as any} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton} 
            onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity 
            style={styles.quantityButton} 
            onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.removeButton} 
        onPress={() => dispatch(removeFromCart(item.id))}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cart</Text>
        {cartItems.length > 0 && (
          <TouchableOpacity onPress={() => dispatch(clearCart())}>
            <Text style={styles.clearText}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.content}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
          />
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;
