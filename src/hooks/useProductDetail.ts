import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProductById, clearSelectedProduct } from '../store/slices/productSlice';

export const useProductDetail = (productId: number) => {
  const dispatch = useAppDispatch();
  const { selectedProduct: product, loading, error } = useAppSelector((state) => state.product);

  const loadProduct = useCallback(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    loadProduct();
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [loadProduct, dispatch]);

  return {
    product,
    loading,
    error: error ? new Error(error) : null,
    refresh: loadProduct
  };
};
