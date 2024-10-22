import { Path as NativePath, Rect as NativeRect, Circle as NativeCircle } from "react-native-svg";
import { Animated, TouchableOpacity as NativeTouchable, TextInput } from "react-native";
import { ScrollView as NativeScroll } from "react-native-gesture-handler";

export const View = Animated.View;
export const NativeText = Animated.Text;
export const ScrollView = Animated.createAnimatedComponent(NativeScroll);
export const TouchableOpacity = Animated.createAnimatedComponent(NativeTouchable);
export const NativeInput = Animated.createAnimatedComponent(TextInput);
export const Path = Animated.createAnimatedComponent(NativePath);
export const Rect = Animated.createAnimatedComponent(NativeRect);
export const Circle = Animated.createAnimatedComponent(NativeCircle);