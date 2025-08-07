import { ScrollView, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { getRecipeById } from "@/data/mockRecipes";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

const RecipeDetails = () => {
  const { id } = useLocalSearchParams();
  const recipe = getRecipeById(Number(id));
  return (
    <SafeAreaView>
      <View
        className={
          "flex-row w-full justify-between px-1 py-2 items-center border-b border-gray-300"
        }
      >
        <CustomButton
          textVariant={"primary"}
          title={"Back"}
          IconLeft={() => (
            <Ionicons name="chevron-back" size={30} color="black" />
          )}
          onPress={() => {
            router.back();
          }}
        />
        <View className={"flex-row gap-2"}>
          <CustomButton
            title={"Edit"}
            textVariant={"primary"}
            textStyle={"text-md"}
          />
          <CustomButton
            title={""}
            IconLeft={() => (
              <Ionicons name="share-social-sharp" size={30} color="black" />
            )}
          />
        </View>
      </View>
      <ScrollView className={"flex w-full h-full"}>
        {recipe?.image ? (
          <Image
            source={{ uri: recipe.image }}
            contentFit={"cover"}
            className={"w-full h-32"}
            style={{ width: "100%", height: 128 }}
          />
        ) : (
          <View
            className={"w-full h-32 bg-gray-200 justify-center items-center"}
          >
            <Text className={"text-secondary-100"}>No Image</Text>
          </View>
        )}
        <Text>{recipe?.name}</Text>
        <Text>{recipe?.ingredients}</Text>
        <Text>{recipe?.instructions}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetails;
