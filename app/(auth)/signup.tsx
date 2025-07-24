import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "expo-router";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className={"flex h-full justify-center items-center bg-primary"}
    >
      <View className={"flex w-full justify-center items-center p-10 gap-4"}>
        <Text className={"text-2xl font-bold text-secondary-400"}>Signup</Text>
        <CustomButton
          title={"Go Back"}
          className={"w-full bg-secondary-400"}
          textVariant={"primary"}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
