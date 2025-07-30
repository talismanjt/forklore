import { Alert, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};
const todos: Todo[] = [
  { id: 1, title: "Buy milk", done: false },
  { id: 2, title: "Walk the dog", done: false },
  { id: 3, title: "Learn React Native", done: true },
  { id: 4, title: "Write an app", done: false },
  { id: 5, title: "Eat dinner", done: false },
];

const Dashboard = () => {
  const router = useRouter();

  return (
    <SafeAreaView className={"flex-1 justify-center items-center bg-white"}>
      <Ionicons
        className={"flex-1 justify-center items-center"}
        name={"menu"}
        size={24}
        color={"#000"}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.done.toString()}</Text>
          </View>
        )}
      />
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
