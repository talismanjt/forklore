import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { forwardRef } from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomInput = forwardRef<TextInput, CustomInputProps>(
  (
    {
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
      error,
      onBlur,
      setSecureTextEntry,
      ...props
    },
    ref,
  ) => {
    return (
      <View className={"flex w-full"}>
        <Text className={`${labelStyle} text-secondary-300 text-left`}>
          {label}
        </Text>
        <View
          className={`flex-row items-center bg-secondary-400 rounded-md p-3 gap-2 focus:bg-secondary-300 ${containerStyle} my-2`}
          style={
            error
              ? { borderWidth: 1, borderColor: "#ef4444", marginBottom: 8 }
              : { marginBottom: 20 }
          }
        >
          {Icon && <Icon />}
          <TextInput
            onBlur={onBlur}
            ref={ref}
            placeholder={placeholder}
            className={`w-full  ${inputStyle}`}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={placeholderTextColor}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            {...props}
          />
          {setSecureTextEntry && (
            <TouchableOpacity
              onPress={() => setSecureTextEntry?.(!secureTextEntry)}
              className="absolute right-4"
            >
              {secureTextEntry ? (
                <Ionicons name="eye-off" size={22} color="gray" />
              ) : (
                <Ionicons name="eye" size={22} color="gray" />
              )}
            </TouchableOpacity>
          )}
        </View>
        {error && (
          <Text style={{ color: "#FC8181", fontSize: 14, marginBottom: 20 }}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
