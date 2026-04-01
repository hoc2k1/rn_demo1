import { StyleSheet } from 'react-native';
import { COLORS, ROUNDED } from '../constants/theme';

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: ROUNDED.lg,
    borderTopRightRadius: ROUNDED.lg,
    height: 60,
    paddingVertical: 10,
    backgroundColor: COLORS.tabBackground,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  tabBarItem: {
    padding: 8, 
    borderRadius: ROUNDED.lg, 
    marginTop: 10
  }
})

export default styles;