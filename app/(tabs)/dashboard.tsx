import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import RecipeCard from "@/components/RecipeCard";
import { useAuth } from "@/contexts/AuthContext";
import { Image } from "expo-image";
import { useState } from "react";
import { router } from "expo-router";
import { mockRecipes } from "@/data/mockRecipes";

/**
 * The dashboard screen displays a list of all the recipes.
 * It also displays a search bar and a button to add a new recipe.
 * The user can select a category to filter the recipes.
 * The user can also tap on a recipe to view its details.
 */
//
const Dashboard = () => {
  const { user, loading } = useAuth();
  const handleRecipePress = (id: number) => {
    router.push(`/recipe/${id}`);
  };
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "All Recipes",
  );
  if (loading) {
    return (
      <SafeAreaView className={"flex-1 bg-white justify-center items-center"}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className={"flex-1 bg-white mx-5"}>
      <View className={"flex-row justify-between items-center"}>
        <View className={"flex-1 gap-3"}>
          <Text className={"text-sm text-secondary-300"}>
            Hey,
            <Text className={"font-semibold "}>
              {" "}
              {user?.email?.split("@")[0]}
            </Text>
          </Text>
          <Text className={"font-bold text-2xl"}>
            What would you like to cook today?
          </Text>
        </View>
        <TouchableOpacity
          className={"overflow-hidden w-11 h-11 rounded-full bg-secondary-100"}
        >
          <Image
            source={require("../../assets/images/react-logo.png")}
            style={{ width: "100%", height: "100%" }}
            contentFit={"cover"}
          />
        </TouchableOpacity>
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
      <Text>All recipes</Text>

      <FlatList
        data={mockRecipes}
        renderItem={({ item }) => (
          <RecipeCard
            {...item}
            onPress={() => {
              handleRecipePress(item.id);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
