import { StyleSheet, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  title?: string;
  onPress: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
    {title ? <Text>{title}</Text> : children}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    }
})