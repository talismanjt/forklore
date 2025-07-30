import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  disabled,
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
      disabled={disabled}
      className={`flex-row justify-center items-center px-10 py-4 rounded-md gap-2 ${className}`}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`font-semibold ${textVariant === "primary" ? "text-primary" : "text-secondary-400"}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
