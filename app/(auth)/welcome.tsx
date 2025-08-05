import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Image } from "expo-image";
import { useMemo, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Login from "@/app/(auth)/login";
import CustomHandle from "@/components/CustomHandle";
import Signup from "@/app/(auth)/signup";

const Welcome = () => {
  const [modalType, setModalType] = useState<"login" | "signup">("login");
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
              source={require("../../assets/images/forklore-logo.png")}
              style={{ width: 180, height: 100 }}
              contentFit={"contain"}
            />
            <Image
              source={require("../../assets/images/welcome.png")}
              style={{ width: "100%", height: 300, marginBottom: 20 }}
              contentFit={"contain"}
            />
            <Text
              className={
                "w-full text-2xl font-bold text-secondary-400 text-center"
              }
            >
              Welcome to Forklore
            </Text>
            <Text
              className={"w-full text-md text-secondary-400 text-center mb-5"}
            >
              Get cooking with ease! Discover new flavors and organize your kitchen adventures with our dynamic recipe management tool.
            </Text>
            <View className={"w-full gap-5"}>
              <CustomButton
                className={"w-full bg-secondary-300 px-10 py-4"}
                textVariant={"primary"}
                title={"Get Started"}
                onPress={() => {
                  setModalType("signup");
                  handlePresentModal();
                }}
              />
              <CustomButton
                className={"w-full bg-secondary-100 text-secondary-400 px-10 py-4"}
                textVariant={"secondary"}
                title={"I Already have an account"}
                onPress={() => {
                  setModalType("login");
                  handlePresentModal();
                }}
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
              backgroundColor: "#2E2F23",
            }}
          >
            <BottomSheetView>
              <View className={"flex w-full justify-center items-center"}>
                {modalType === "login" ? (
                  <Login onClose={() => bottomSheetModalRef.current?.close()} />
                ) : (
                  <Signup
                    onClose={() => bottomSheetModalRef.current?.close()}
                  />
                )}
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Welcome;
