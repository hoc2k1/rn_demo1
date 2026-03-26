import { Product } from '../types';
import { API_ENDPOINTS } from '../constants/api';
import { apiClient } from '../utils/apiClient';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const data = await apiClient.get<{ products: Product[] }>(API_ENDPOINTS.PRODUCTS.LIST, { cache: true });
    return data.products;
  } catch (error) {
    return [];
  }
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  try {
    const data = await apiClient.get<Product>(API_ENDPOINTS.PRODUCTS.DETAIL(id), { cache: true });
    return data;
  } catch (error) {
    return null;
  }
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const data = await apiClient.get<{ products: Product[] }>(API_ENDPOINTS.PRODUCTS.BY_CATEGORY(category), { cache: true });
    return data.products;
  } catch (error) {
    return [];
  }
};

