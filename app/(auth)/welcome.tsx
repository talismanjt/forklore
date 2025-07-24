import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { useMemo, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Login from "@/app/(auth)/login";
import CustomHandle from "@/components/CustomHandle";

const Welcome = () => {
  const navigation = useNavigation();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["90%"], []);
  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView
        className={"flex h-full justify-center bg-primary items-center"}
      >
        <BottomSheetModalProvider>
          <View
            className={"flex w-full justify-center items-center p-10 gap-4"}
          >
            <Image
              source={require("../../assets/images/taskowl-logo.png")}
              style={{ width: 180, height: 100 }}
              contentFit={"contain"}
            />
            <Image
              source={require("../../assets/images/welcome.png")}
              style={{ width: "100%", height: 300 }}
              contentFit={"contain"}
            />
            <Text
              className={
                "w-full text-2xl font-bold text-secondary-400 text-center"
              }
            >
              Welcome to TaskOwl
            </Text>
            <Text
              className={"w-full text-md text-secondary-400 text-center mb-5"}
            >
              Have plenty to do? Boost your productivity with our evolving task
              management tools.
            </Text>
            <View className={"w-full gap-5"}>
              <CustomButton
                className={"w-full bg-secondary-300"}
                textVariant={"primary"}
                title={"Get Started"}
                onPress={() => {
                  navigation.navigate("signup");
                }}
              />
              <CustomButton
                className={"w-full bg-secondary-100 text-secondary-400"}
                textVariant={"secondary"}
                title={"I Already have an account"}
                onPress={handlePresentModal}
              />
            </View>
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            handleComponent={() => (
              <CustomHandle
                onClose={() => bottomSheetModalRef.current?.close()}
              />
            )}
            snapPoints={snapPoints}
            enableDismissOnClose
            enablePanDownToClose
            backgroundStyle={{
              backgroundColor: "#1B263B",
            }}
          >
            <BottomSheetView>
              <View className={"flex w-full justify-center items-center"}>
                <Login />
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Welcome;
