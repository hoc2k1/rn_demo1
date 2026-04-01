import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUNDED } from '../constants/theme';
import HomeScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/Profile';
import HomeLogo from "../../assets/icons/navigation/home.svg";
import MenuLogo from "../../assets/icons/navigation/menu.svg";
import CartLogo from "../../assets/icons/navigation/cart.svg";
import ProfileLogo from "../../assets/icons/navigation/profile.svg";
import { TabItemsProps } from '../types';
import { View } from 'react-native';
import styles from './styles';

const Tab = createBottomTabNavigator();

const TabItems: React.FC<TabItemsProps> = ({ color, size, routeName, focused }) => {
  let icon = null;

  switch (routeName) {
    case 'Home':
      icon = <HomeLogo width={size} height={size} color={color} />;
      break;
    case 'Menu':
      icon = <MenuLogo width={size} height={size} color={color} />;
      break;
    case 'Cart':
      icon = <CartLogo width={size} height={size} color={color} />;
      break;
    case 'Profile':
      icon = <ProfileLogo width={size} height={size} color={color} />;
      break;
    default:
      icon = null;
  }

  return (
    <View style={[styles.tabBarItem, {backgroundColor: focused ? COLORS.tabIcon : 'transparent'}]}>
      {icon}
    </View>
  )
}
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          return <TabItems color={color} size={size} routeName={route.name} focused={focused} />
        },
        tabBarActiveTintColor: COLORS.tabIconActive,
        tabBarInactiveTintColor: COLORS.tabIcon,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Menu" component={MenuStack} /> */}
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
