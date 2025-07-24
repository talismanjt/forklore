import { Text, TextInput, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "expo-router";

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className={"flex-1 bg-primary"}>
      <SafeAreaView className={"flex-1 justify-center items-center"}>
        <View className={"flex w-full justify-center items-center p-8 gap-4"}>
          <Text className={"text-2xl font-semibold text-secondary-400 mb-10"}>
            Create an account
          </Text>
          <TextInput
            placeholder={"Email"}
            placeholderTextColor={"#778DA9"}
            className={"w-full bg-secondary-350 px-5 py-4 rounded-md"}
          />
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"#778DA9"}
            className={"w-full bg-secondary-400 px-5 py-4 rounded-md"}
          />
          <CustomButton
            title={"Log In"}
            className={"w-full bg-secondary-300 mt-6"}
            textVariant={"primary"}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
