import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Product } from '../types';
import { COLORS, SIZES, FONTS } from '../constants/theme';

import { uiRegistry } from '../utils/uiRegistry';
import { UI_COMPONENTS } from '../constants/uiComponents';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(product)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: product.thumbnail }} style={styles.image as any} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name} numberOfLines={1}>{product.title}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ {product.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

uiRegistry.register(UI_COMPONENTS.ProductCard, ProductCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.md,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  details: {
    padding: SIZES.sm,
  },
  category: {
    ...FONTS.caption,
    textTransform: 'uppercase',
  } as const,
  name: {
    ...FONTS.h3,
    marginTop: 2,
    color: COLORS.black,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.sm,
  },
  price: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...FONTS.caption,
    color: COLORS.warning,
    fontWeight: 'bold',
  } as const,
});

export default ProductCard;
