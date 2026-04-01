import { ColorValue } from "react-native";
import { NumberProp } from "react-native-svg";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
  category: string;
  rating: number;
  brand: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface TabItemsProps {
  color: ColorValue;
  size: NumberProp;
  routeName: String;
  focused: Boolean;
}