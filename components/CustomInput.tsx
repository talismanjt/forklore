import { Text, TextInput, View } from "react-native";

const CustomInput = ({
  ref,
  placeholder,
  returnKeyType,
  placeholderTextColor,
  Icon,
  iconStyle,
  containerStyle,
  labelStyle,
  label,
  inputStyle,
  secureTextEntry,
  onSubmitEditing,

  ...props
}: CustomInputProps) => {
  return (
    <View className={"flex w-full"}>
      <Text className={`${labelStyle} text-secondary-300 text-left`}>
        {label}
      </Text>
      <View
        className={`flex-row items-center bg-secondary-400 rounded-md p-3 gap-2 focus:bg-secondary-300 ${containerStyle} my-2 mb-5`}
      >
        {Icon && <Icon />}
        <TextInput
          ref={ref}
          placeholder={placeholder}
          className={`w-full  ${inputStyle}`}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  );
};

export default CustomInput;
