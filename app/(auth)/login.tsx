import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import CustomInput from "@/components/CustomInput";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";

const FormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = ({ onClose }: { onClose?: () => void }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      onClose?.();
      router.navigate("/(tabs)/dashboard");
    }
    setLoading(false);
  }

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

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              Icon={() => <Ionicons name="mail" size={20} color="gray" />}
              containerStyle={"rounded-lg"}
              placeholder="Enter your email"
              placeholderTextColor="#778DA9"
              label="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              Icon={() => (
                <Ionicons name="lock-closed" size={20} color="gray" />
              )}
              containerStyle={"rounded-lg"}
              placeholder="Enter your password"
              secureTextEntry={!isPasswordVisible}
              setSecureTextEntry={() =>
                setIsPasswordVisible(!isPasswordVisible)
              }
              placeholderTextColor="#778DA9"
              label="Password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.password?.message}
            />
          )}
        />

        <TouchableOpacity onPress={onClose}>
          <Text className="text-md text-secondary-400 text-left mb-10">
            Forgot your Password?
          </Text>
        </TouchableOpacity>

        <CustomButton
          title={loading ? "Logging in..." : "Log In"}
          className="w-full bg-secondary-300 px-10 py-4 gap-2"
          textVariant="primary"
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        />

        <View className="h-px bg-secondary-400 opacity-40 w-full my-8" />

        <CustomButton
          title="Continue with Google"
          className="w-full bg-secondary-300 mb-4 px-10 py-4 gap-2"
          IconLeft={() => (
            <Ionicons name="logo-google" size={24} color="#000" />
          )}
          textVariant="primary"
          onPress={() => {}}
        />
        <CustomButton
          title="Continue with Facebook"
          className="w-full bg-secondary-300 mb-4 px-10 py-4 gap-2"
          IconLeft={() => (
            <Ionicons name="logo-facebook" size={24} color="#000" />
          )}
          textVariant="primary"
          onPress={() => {}}
        />
        <CustomButton
          title="Continue with Apple"
          className="w-full bg-secondary-300 mb-20 px-10 py-4 gap-2"
          IconLeft={() => <Ionicons name="logo-apple" size={24} color="#000" />}
          textVariant="primary"
          onPress={() => {}}
        />
      </KeyboardAvoidingView>
    </BottomSheetView>
  );
};

export default Login;
