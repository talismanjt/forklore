import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "expo-router";
import CustomInput from "@/components/CustomInput";
import { useRef } from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

const Signup = ({ onClose }: { onClose?: () => void }) => {
  const navigation = useNavigation();
  // References For Next returnKeyType
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  return (
    <BottomSheetView
      style={{
        flex: 1,
        padding: 24,
        justifyContent: "center",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Text
          className={"text-2xl font-bold text-secondary-400 text-center mb-1"}
        >
          Create an account
        </Text>
        <Text className={"text-secondary-400 text-center mb-6"}>
          Welcome! Please fill in your details.
        </Text>

        <View className={"gap-4"}>
          <CustomButton
            title={"Sign Up with Google"}
            IconLeft={() => <Ionicons name="logo-google" size={24} />}
            className={"w-full bg-secondary-300"}
            textVariant={"primary"}
            onPress={() => {
              navigation.goBack();
              onClose?.();
            }}
          />

          <CustomButton
            title={"Sign Up with Facebook"}
            IconLeft={() => <Ionicons name="logo-facebook" size={24} />}
            className={"w-full bg-secondary-300"}
            textVariant={"primary"}
            onPress={() => {
              navigation.goBack();
              onClose?.();
            }}
          />
          <CustomButton
            title={"Sign Up with Apple"}
            IconLeft={() => <Ionicons name="logo-apple" size={24} />}
            className={"w-full bg-secondary-300"}
            textVariant={"primary"}
            onPress={() => {
              navigation.goBack();
              onClose?.();
            }}
          />
        </View>

        <View className="h-px bg-secondary-400 opacity-40 w-full my-8" />

        <CustomInput
          placeholder={"Enter your Full name"}
          label={"Fullname"}
          placeholderTextColor={"gray"}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            emailRef.current?.focus();
          }}
        />

        <CustomInput
          ref={emailRef}
          placeholder={"Enter your Email"}
          placeholderTextColor={"gray"}
          label={"Email"}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
        />
        <CustomInput
          ref={passwordRef}
          placeholder={"Enter your password"}
          placeholderTextColor={"gray"}
          label={"Password"}
          secureTextEntry={true}
          returnKeyType={"done"}
        />

        <CustomButton
          title={"Sign Up"}
          className={"w-full bg-secondary-300"}
          textVariant={"primary"}
          onPress={() => {
            navigation.goBack();
            onClose?.();
          }}
        />
      </KeyboardAvoidingView>
    </BottomSheetView>
  );
};

export default Signup;
