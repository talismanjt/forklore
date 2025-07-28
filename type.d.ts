declare interface ButtonProps extends TouchableOpacityProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface CustomHandleProps {
  onClose: () => void;
}

declare interface CustomInputProps {
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  inputStyle?: string;
  Icon?: React.ComponentType<any>;
  iconStyle?: string;
  containerStyle?: string;
  labelStyle?: string;
  label?: string;
  keyboardType?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  textContentType?: string;
  onSubmitEditing?: () => void;
  ref?: RefObject<TextInput>;
}
