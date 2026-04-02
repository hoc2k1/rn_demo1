import React, { useEffect } from 'react';
import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, withSpring, withTiming, useSharedValue } from 'react-native-reanimated';
import { COLORS } from '../constants/theme';
import styles from './styles';
import HomeLogo from "../../assets/icons/navigation/home.svg";
import MenuLogo from "../../assets/icons/navigation/menu.svg";
import CartLogo from "../../assets/icons/navigation/cart.svg";
import ProfileLogo from "../../assets/icons/navigation/profile.svg";
import { TabItemProps } from '../types';

const TabItem: React.FC<TabItemProps> = ({ route, isFocused, onPress, onLongPress, options, state }) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      rotation.value = 0;
      rotation.value = withTiming(360, { duration: 600 });
    }
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  let Icon = null;
  switch (route.name) {
    case 'Home': Icon = HomeLogo; break;
    case 'Menu': Icon = MenuLogo; break;
    case 'Cart': Icon = CartLogo; break;
    case 'Profile': Icon = ProfileLogo; break;
    default: Icon = ProfileLogo; break;
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={(options as any).tabBarAccessibilityLabel}
      testID={(options as any).tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.tabBarItem, { width: `${100 / state.routes.length}%` }]}
    >
      <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
        {Icon && (
          <Icon
            width={24}
            height={24}
            color={isFocused ? COLORS.tabIconActive : COLORS.tabIcon}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { width } = useWindowDimensions();
  const TAB_WIDTH = width / state.routes.length;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(state.index * TAB_WIDTH) }],
    };
  });

  return (
    <View style={styles.tabBar}>
      <Animated.View
        style={[
          styles.slidingIndicator,
          { width: 44, marginHorizontal: (TAB_WIDTH - 44) / 2 },
          animatedStyle,
        ]}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={route.key}
            route={route}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            options={options}
            state={state}
          />
        );
      })}
    </View>
  );
};

export default CustomTabBar;
