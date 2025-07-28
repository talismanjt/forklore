import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import CustomInput from "@/components/CustomInput";

const Login = ({ onClose }: { onClose?: () => void }) => {
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
        <Text className="text-2xl font-semibold text-secondary-400 mb-1 text-center">
          Log In
        </Text>
        <Text className="text-md text-secondary-400 mb-6 text-center">
          Welcome back! Please enter your details.
        </Text>

        <CustomInput
          Icon={() => <Ionicons name="mail" size={24} color="gray" />}
          placeholder="Enter your email"
          placeholderTextColor="#778DA9"
          label={"Email"}
        />
        <CustomInput
          placeholder="Enter your password"
          secureTextEntry={true}
          placeholderTextColor="#778DA9"
          label={"Password"}
        />

        <TouchableOpacity onPress={onClose}>
          <Text className="text-md text-secondary-400 text-left mb-10">
            Forgot your Password?
          </Text>
        </TouchableOpacity>

        <CustomButton
          title="Log In"
          className="w-full bg-secondary-300"
          textVariant="primary"
          onPress={onClose}
        />

        <View className="h-px bg-secondary-400 opacity-40 w-full my-8" />

        <CustomButton
          title="Continue with Google"
          className="w-full bg-secondary-300 mb-4"
          IconLeft={() => (
            <Ionicons name="logo-google" size={24} color="#000" />
          )}
          textVariant="primary"
          onPress={() => {}}
        />
        <CustomButton
          title="Continue with Facebook"
          className="w-full bg-secondary-300 mb-4"
          IconLeft={() => (
            <Ionicons name="logo-facebook" size={24} color="#000" />
          )}
          textVariant="primary"
          onPress={() => {}}
        />
        <CustomButton
          title="Continue with Apple"
          className="w-full bg-secondary-300 mb-20"
          IconLeft={() => <Ionicons name="logo-apple" size={24} color="#000" />}
          textVariant="primary"
          onPress={() => {}}
        />
      </KeyboardAvoidingView>
    </BottomSheetView>
  );
};

export default Login;
