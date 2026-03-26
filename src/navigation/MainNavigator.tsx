import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../constants/theme';
import HomeScreen from '../screens/Home';
import ProductDetailScreen from '../screens/ProductDetail';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/Profile';
import HomeLogo from "../../assets/icons/navigation/home.svg";
import OrderLogo from "../../assets/icons/navigation/orders.svg";
import ProfileLogo from "../../assets/icons/navigation/profile.svg";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') return <HomeLogo width={size} height={size} color={color} />;
          else if (route.name === 'Cart') return <OrderLogo width={size} height={size} color={color} />;
          else if (route.name === 'Profile') return <ProfileLogo width={size} height={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
