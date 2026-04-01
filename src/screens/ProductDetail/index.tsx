import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants/theme';
import { UI_COMPONENTS } from '../../constants/uiComponents';
import { useProductDetail } from '../../hooks/useProductDetail';
import { uiRegistry } from '../../utils/uiRegistry';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/slices/cartSlice';
import styles from './styles';

type RootStackParamList = {
  HomeMain: undefined;
  ProductDetail: { productId: number };
};

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

/**
 * Default Components cho ProductDetail
 */
const DefaultProductDetailFooter: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

uiRegistry.register(UI_COMPONENTS.ProductDetailFooter, DefaultProductDetailFooter);

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { productId } = route.params;
  const { product, loading } = useProductDetail(productId);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      console.log('Added to cart:', product.title);
      // Optional: Navigate to Cart or show toast
    }
  };

  const PageFooter = uiRegistry.get<any>(UI_COMPONENTS.ProductDetailFooter);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.loader}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image as any} resizeMode="contain" />
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.brand}>Brand: {product.brand}</Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★ {product.rating}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.stockContainer}>
            <Text style={styles.stockText}>Stock: {product.stock} units</Text>
          </View>
        </View>
      </ScrollView>

      <PageFooter onAddToCart={handleAddToCart} />
    </View>
  );
};

export default ProductDetailScreen;
