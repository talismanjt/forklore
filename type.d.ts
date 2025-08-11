declare interface ButtonProps extends TouchableOpacityProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "secondary" | "danger" | "success";
  textStyle?: string;
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  IconTop?: React.ComponentType<any>;
  vertical?: boolean;
  className?: string;
  disabled?: boolean;
}

declare interface CustomHandleProps {
  onClose: () => void;
}

declare interface CustomInputProps {
  setSecureTextEntry?: React.Dispatch<React.SetStateAction<boolean>>;
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  inputStyle?: string;
  Icon?: React.ComponentType<any>;
  iconStyle?: string;
  containerStyle?: string;
  labelStyle?: string;
  label?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  ref?: RefObject<TextInput>;
  error?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  onBlur?: () => void;
}

declare interface RecipeProps {
  id: number;
  image: string;
  name: string;
  onPress: () => void;
}

declare interface InstructionProps {
  step: number;
  instruction: string;
}

declare interface IngredientProps {
  id: number;
  ingredientName: string;
  quantity: number;
  unit: string;
}

declare interface CustomDropdownProps {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  data: Data[];
}
