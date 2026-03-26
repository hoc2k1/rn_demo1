export const UI_COMPONENTS = {
  ProductCard: 'ProductCard',
  HomeHeader: 'HomeHeader',
  ProductDetailFooter: 'ProductDetailFooter',
} as const;

export type UIComponentName = keyof typeof UI_COMPONENTS;
