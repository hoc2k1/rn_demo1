import React from 'react';
import { Text, View, FlatList, SafeAreaView, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import { COLORS } from '../../constants/theme';
import { UI_COMPONENTS } from '../../constants/uiComponents';
import { Product } from '../../types';
import { useProducts } from '../../hooks/useProducts';
import { uiRegistry } from '../../utils/uiRegistry';
import styles from './styles';

/**
 * Default Components cho HomeScreen
 * Những component này có thể được ghi đè từ folder `customize`
 */
const DefaultHomeHeader: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.title}>E-Shop Demo</Text>
    <Text style={styles.subtitle}>Real-time data from DummyJSON</Text>
  </View>
);

// Đăng ký component mặc định
uiRegistry.register(UI_COMPONENTS.HomeHeader, DefaultHomeHeader);

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { products, loading, error, refresh } = useProducts();

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { productId: product.id });
  };

  // Lấy Header và ProductCard từ Registry để hỗ trợ Customize
  const HomeHeader = uiRegistry.get<any>(UI_COMPONENTS.HomeHeader);
  // Fallback về ProductCard mặc định nếu Registry không có (để tránh lỗi unused import khiến registration không chạy)
  const ProductCardComponent = uiRegistry.get<any>(UI_COMPONENTS.ProductCard) || ProductCard;

  if (error && products.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <HomeHeader />
        <View style={styles.center}>
          <Text style={styles.errorText}>Oops! Something went wrong.</Text>
          <Text style={styles.subtitle}>{error.message}</Text>
          <TouchableOpacity style={styles.button} onPress={refresh}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeHeader />
      
      {loading && products.length === 0 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCardComponent product={item} onPress={handleProductPress} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          onRefresh={refresh}
          refreshing={loading}
          ListEmptyComponent={
            !loading ? (
              <View style={styles.center}>
                <Text style={styles.subtitle}>No products found.</Text>
              </View>
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
