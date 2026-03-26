import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: SIZES.radius * 2,
    borderBottomRightRadius: SIZES.radius * 2,
    marginBottom: SIZES.md,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.black,
  } as const,
  subtitle: {
    ...FONTS.body,
    color: COLORS.gray,
    marginTop: 4,
  } as const,
  listContent: {
    padding: SIZES.padding,
    paddingTop: 0,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  errorText: {
    ...FONTS.h2,
    color: COLORS.danger,
    marginBottom: SIZES.sm,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.lg,
    paddingVertical: SIZES.md,
    borderRadius: SIZES.radius,
    marginTop: SIZES.lg,
  },
  buttonText: {
    ...FONTS.h3,
    color: COLORS.white,
  },
});

export default styles;
