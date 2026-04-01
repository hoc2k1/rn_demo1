import { TextStyle } from 'react-native';

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  danger: '#FF3B30',
  warning: '#FF9500',
  background: '#F2F2F7',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  lightGray: '#D1D1D6',
  darkGray: '#3A3A3C',
  tabBackground: '#E95322',
  tabIcon: '#FFFFFF',
  tabIconActive: '#E95322',
};

export const SIZES = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  radius: 12,
  padding: 20,
};

export const ROUNDED = {
  full: 9999,
  none: 0,
  lg: 16,
  md: 10,
  sm: 6,
}

export const FONTS: { [key: string]: TextStyle } = {
  h1: { fontSize: 32, fontWeight: 'bold' },
  h2: { fontSize: 24, fontWeight: 'bold' },
  h3: { fontSize: 18, fontWeight: '600' },
  body: { fontSize: 16, fontWeight: 'normal' },
  caption: { fontSize: 12, fontWeight: 'normal', color: COLORS.gray },
};

export default { COLORS, SIZES, FONTS };
