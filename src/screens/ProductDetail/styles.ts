import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: COLORS.background,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  detailsContainer: {
    padding: SIZES.padding,
  },
  category: {
    ...FONTS.caption,
    textTransform: 'uppercase',
    color: COLORS.primary,
    fontWeight: 'bold',
  } as const,
  title: {
    ...FONTS.h1,
    color: COLORS.black,
    marginTop: 8,
  } as const,
  brand: {
    ...FONTS.body,
    color: COLORS.gray,
    marginTop: 4,
  } as const,
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.md,
  },
  price: {
    ...FONTS.h2,
    color: COLORS.danger,
  } as const,
  ratingContainer: {
    backgroundColor: COLORS.warning + '20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  rating: {
    ...FONTS.caption,
    color: COLORS.warning,
    fontWeight: 'bold',
  } as const,
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: SIZES.lg,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.black,
    marginBottom: 8,
  } as const,
  description: {
    ...FONTS.body,
    color: COLORS.darkGray,
    lineHeight: 24,
  } as const,
  stockContainer: {
    marginTop: SIZES.lg,
    padding: SIZES.md,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.radius,
  },
  stockText: {
    ...FONTS.caption,
    color: COLORS.black,
  } as const,
  footer: {
    padding: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  addToCartButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  addToCartText: {
    ...FONTS.h3,
    color: COLORS.white,
  } as const,
});

export default styles;
