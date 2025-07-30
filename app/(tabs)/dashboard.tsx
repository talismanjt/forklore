import { Alert, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

const Dashboard = () => {
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
    <SafeAreaView className={"flex-1 justify-center items-center bg-white"}>
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
    </SafeAreaView>
  );
};

export default Dashboard;
