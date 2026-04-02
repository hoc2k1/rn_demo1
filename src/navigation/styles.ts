import { StyleSheet } from 'react-native';
import { COLORS, ROUNDED } from '../constants/theme';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderTopLeftRadius: ROUNDED.lg,
    borderTopRightRadius: ROUNDED.lg,
    flexShrink: 0,
    height: 60,
    backgroundColor: COLORS.tabBackground,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
    position: 'relative',
  },
  tabBarItem: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidingIndicator: {
    position: 'absolute',
    backgroundColor: COLORS.tabIcon,
    borderRadius: ROUNDED.lg,
    height: 44,
    marginTop: 6,
  },
  iconContainer: {
    borderRadius: ROUNDED.lg,
  }
})

export default styles;