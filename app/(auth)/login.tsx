import { Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetView } from "@gorhom/bottom-sheet";

const Login = ({ onClose }: { onClose?: () => void }) => {
  return (
    <BottomSheetView
      style={{
        flex: 1,
        padding: 24,
        justifyContent: "center",
      }}
    >
      <Text className="text-2xl font-semibold text-secondary-400 mb-8 text-center">
        Create an account
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#778DA9"
        className="w-full bg-secondary-350 px-5 py-4 rounded-md mb-4"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#778DA9"
        className="w-full bg-secondary-400 px-5 py-4 rounded-md mb-6"
      />

      <CustomButton
        title="Log In"
        className="w-full bg-secondary-300 mb-6"
        textVariant="primary"
        onPress={onClose}
      />

      <TouchableOpacity onPress={onClose}>
        <Text className="text-md text-secondary-400 mb-14 text-center">
          Forgot your Password?
        </Text>
      </TouchableOpacity>

      <View className="h-px bg-secondary-400 opacity-40 w-full mb-14" />

      <CustomButton
        title="Continue with Google"
        className="w-full bg-secondary-300 mb-4"
        IconLeft={() => <Ionicons name="logo-google" size={24} color="#000" />}
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
    </BottomSheetView>
  );
};

export default Login;
