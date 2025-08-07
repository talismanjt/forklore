import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  disabled,
  title,
  onPress,
  bgVariant = "primary",
  textVariant = "secondary",
  textStyle = "text-md",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`flex-row justify-center items-center ${className}`}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`font-semibold ${textStyle} ${textVariant === "primary" ? "text-primary" : "text-secondary-400"}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
