import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "expo-router";
import CustomInput from "@/components/CustomInput";
import { useRef, useState } from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine(
      (val) => /[a-z]/.test(val) && /[A-Z]/.test(val) && /[0-9]/.test(val),
      {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter and one number",
      },
    ),
});

const Signup = ({ onClose }: { onClose?: () => void }) => {
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
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      onClose?.();
    }
    setLoading(false);
  }

  const navigation = useNavigation();
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
              placeholder="Enter your password"
              containerStyle={"rounded-lg"}
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

        <CustomButton
          title={loading ? "Signing up..." : "Sign up"}
          className={"w-full bg-secondary-300 mt-5 px-10 py-4 gap-2"}
          textVariant={"primary"}
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        />

        <View className="h-px bg-secondary-400 opacity-40 w-full my-8" />

        <View className={"gap-4"}>
          <CustomButton
            title={"Continue with Google"}
            IconLeft={() => <Ionicons name="logo-google" size={24} />}
            className={"w-full bg-secondary-300 px-10 py-4 gap-2"}
            textVariant={"primary"}
            onPress={() => {
              navigation.goBack();
              onClose?.();
            }}
          />

          <CustomButton
            title={"Continue with Facebook"}
            IconLeft={() => <Ionicons name="logo-facebook" size={24} />}
            className={"w-full bg-secondary-300 px-10 py-4 gap-2"}
            textVariant={"primary"}
            onPress={() => {
              navigation.goBack();
              onClose?.();
            }}
          />
          <CustomButton
            title={"Continue with Apple"}
            IconLeft={() => <Ionicons name="logo-apple" size={24} />}
            className={"w-full bg-secondary-300 px-10 py-4 gap-2"}
            textVariant={"primary"}
            onPress={() => {
              navigation.goBack();
              onClose?.();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </BottomSheetView>
  );
};

export default Signup;
