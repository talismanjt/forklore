import { Text, View } from "react-native";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/contexts/AuthContext";

const Profile = () => {
  const { user, loading, signOut } = useAuth();

  const router = useRouter();
  return (
    <SafeAreaView
      className={"flex-1 justify-center items-center bg-secondary-400"}
    >
      <View>
        <Text className={"text-md text-secondary-200 text-center"}>
          Welcome{" "}
          <Text className={"font-semibold text-secondary-100"}>
            {user?.email}
          </Text>
        </Text>

        <CustomButton
          title={"Logout"}
          className={"bg-secondary-100"}
          onPress={async () => {
            await signOut();
            router.push("/(auth)/welcome");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
