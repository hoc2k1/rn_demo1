import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.h1,
  } as const,
  content: {
    padding: 20,
  },
  text: {
    ...FONTS.body,
  } as const,
});

export default styles;
