import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import RecipeCard from "@/components/RecipeCard";
import { useAuth } from "@/contexts/AuthContext";

const testData = [
  {
    id: 1,
    name: "Pasta Bolognese",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ingredients: ["Pasta", "Beef", "Tomatoes", "Onion", "Garlic"],
    instructions: [
      "Bring a pot of water to a boil and cook the pasta",
      "Brown the beef in a pan and add the onion and garlic",
      "Add the tomatoes to the pan and cook for 10 minutes",
      "Combine the pasta and the sauce in the pan and cook for an additional 2 minutes",
    ],
  },
  {
    id: 2,
    name: "Grilled Cheese Sandwich",
    image:
      "https://plus.unsplash.com/premium_photo-1739906794633-71adada97314?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Bread", "Cheese", "Butter"],
    instructions: [
      "Butter the bread on both sides",
      "Place the cheese in between the bread",
      "Grill the sandwich until the cheese is melted and the bread is toasted",
    ],
  },
];

const Dashboard = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <SafeAreaView className={"flex-1 bg-white justify-center items-center"}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className={"flex-1 bg-white mx-5"}>
      <View className={"gap-3"}>
        <Text className={"text-sm text-secondary-300"}>
          Hello,
          <Text className={"font-semibold "}>
            {" "}
            {user?.email?.split("@")[0]}
          </Text>
        </Text>
        <Text className={"font-bold text-2xl"}>
          What would you like to cook today?
        </Text>
      </View>
      <View className={"flex flex-row justify-between items-center gap-1"}>
        <CustomInput
          containerStyle={"bg-secondary-390 rounded-full"}
          inputStyle={"bg-secondary-390 text-md"}
          Icon={() => <Ionicons name="search" size={24} color="#BCA88D" />}
          placeholder={"Search for a recipe"}
          placeholderTextColor={"#BCA88D"}
        />
        <CustomButton
          title={""}
          IconRight={() => <Ionicons name="filter" size={24} color="#2E2F23" />}
        />
      </View>
      <FlatList
        data={testData}
        renderItem={({ item }) => <RecipeCard {...item} onPress={() => {}} />}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
