import React, { useRef } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from "react-native";

type HoldButtonProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  delay?: number;
  interval?: number;
} & TouchableOpacityProps;

const SmoothCounterButton = ({
  style,
  onPress,
  disabled = false,
  delay = 300,
  interval = 35,
  ...props
}: HoldButtonProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPressingRef = useRef(false);

  const run = () => {
    if (!isPressingRef.current) return;

    onPress?.();

    timeoutRef.current = setTimeout(run, interval);
  };

  const handlePressIn = () => {
    if (disabled) return;

    isPressingRef.current = true;

    onPress?.(); // immediate
    timeoutRef.current = setTimeout(run, delay);
  };

  const handlePressOut = () => {
    isPressingRef.current = false;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={style}
      activeOpacity={disabled ? 1 : 0.7}
      {...props}
    ></TouchableOpacity>
  );
};

export default SmoothCounterButton;
