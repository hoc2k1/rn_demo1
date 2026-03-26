import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';

/**
 * Đây là bản Customize của HomeHeader.
 * Nó sẽ ghi đè bản Default trong HomeScreen.
 */
const CustomHomeHeader: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.title}>🚀 Custom Shop UI</Text>
    <Text style={styles.subtitle}>Giao diện này đã được ghi đè từ folder customize!</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: SIZES.padding,
    backgroundColor: COLORS.primary, // Thay đổi màu nền sang màu chính
    borderBottomLeftRadius: SIZES.radius * 3,
    borderBottomRightRadius: SIZES.radius * 3,
    marginBottom: SIZES.md,
    elevation: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.white, // Chữ trắng cho nổi bật
  } as const,
  subtitle: {
    ...FONTS.body,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
    fontStyle: 'italic',
  } as const,
});

export default CustomHomeHeader;
