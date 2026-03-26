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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...FONTS.body,
    color: COLORS.gray,
  } as const,
  listContent: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: COLORS.background,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    ...FONTS.h3,
    color: COLORS.black,
  } as const,
  itemPrice: {
    ...FONTS.body,
    color: COLORS.primary,
    marginTop: 4,
  } as const,
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 12,
    ...FONTS.body,
    fontWeight: 'bold',
  } as const,
  removeButton: {
    padding: 8,
  },
  removeButtonText: {
    color: COLORS.danger,
    ...FONTS.caption,
  } as const,
  footer: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    ...FONTS.h2,
    color: COLORS.black,
  } as const,
  totalAmount: {
    ...FONTS.h2,
    color: COLORS.danger,
  } as const,
  checkoutButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutText: {
    ...FONTS.h3,
    color: COLORS.white,
  } as const,
  clearText: {
    color: COLORS.danger,
    ...FONTS.body,
  } as const,
});

export default styles;
