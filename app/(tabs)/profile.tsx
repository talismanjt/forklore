import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          console.log(error);
        } else {
          setUser(data.user);
          setLoading(false);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };
    void getUser();
  }, []);

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
            await supabase.auth.signOut();
            router.push("/(auth)/welcome");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
