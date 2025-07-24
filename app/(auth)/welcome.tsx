import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Image } from "expo-image";

const Welcome = () => {
  return (
    <SafeAreaView
      className={"flex h-full justify-center bg-primary items-center"}
    >
      <View className={"flex w-full justify-center items-center p-10 gap-4"}>
        <Image
          source={require("../../assets/images/taskowl-logo.png")}
          height={100}
          width={300}
          contentFit={"contain"}
        />
        <Text
          className={"w-full text-2xl font-bold text-secondary-400 text-center"}
        >
          Hey! Welcome to TaskOwl
        </Text>
        <Text className={"w-full text-md text-secondary-400 text-center"}>
          Effortlessly organize and prioritize your tasks.
        </Text>
        <CustomButton
          className={"w-full"}
          title={"Get Started"}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
