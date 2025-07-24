import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  onPress,
  bgVariant = "primary",
  textVariant = "secondary",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row justify-center items-center bg-secondary-400 text-primary px-10 py-4 rounded-md gap-2 ${className}`}
    >
      {IconLeft && <IconLeft />}
      <Text>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
