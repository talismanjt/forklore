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
  IconTop,
  vertical = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`${
        vertical ? "flex-col" : "flex-row"
      } justify-center items-center ${className}`}
    >
      {IconTop && <IconTop />}
      {IconLeft && <IconLeft />}

      {title && (
        <Text
          className={`${textStyle}  ${
            textVariant === "primary" ? "text-primary" : "text-secondary-400"
          }`}
        >
          {title}
        </Text>
      )}

      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
