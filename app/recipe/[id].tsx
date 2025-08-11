import { ScrollView, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { getRecipeById } from "@/data/mockRecipes";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import IngredientCard from "@/components/cards/IngredientCard";
import InstructionsCard from "@/components/cards/InstructionsCard";

const RecipeDetails = () => {
  const { id } = useLocalSearchParams();
  const recipe = getRecipeById(Number(id));
  return (
    <SafeAreaView>
      <View className={"flex justify-center items-start my-2"}>
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
      </View>
      <ScrollView className={"flex w-full h-full"}>
        <View>
          {recipe?.image ? (
            <Image
              source={{ uri: recipe.image }}
              contentFit={"cover"}
              className={"w-full h-42"}
              style={{ width: "100%", height: 128 }}
            />
          ) : (
            <View
              className={"w-full h-32 bg-gray-200 justify-center items-center"}
            >
              <Text className={"text-secondary-100"}>No Image</Text>
            </View>
          )}
        </View>
        <View className={"p-3 rounded-lg bg-white"}>
          <View className={"flex-row mb-4 gap-2 justify-between items-center"}>
            <CustomButton
              title={"Recipes"}
              vertical={true}
              className={"gap-1"}
              textStyle={"text-xs font-medium"}
              textVariant={"primary"}
              IconTop={() => (
                <Ionicons name="bookmark-outline" size={28} color="#2E2F23" />
              )}
            />
            <CustomButton
              title={"Planner"}
              vertical={true}
              className={"gap-1"}
              textStyle={"text-xs font-medium"}
              textVariant={"primary"}
              IconTop={() => (
                <Ionicons name="calendar-outline" size={28} color="#2E2F23" />
              )}
            />
            <CustomButton
              title={"Groceries"}
              vertical={true}
              className={"gap-1"}
              textStyle={"text-xs font-medium"}
              textVariant={"primary"}
              IconTop={() => (
                <Ionicons name="cart-outline" size={28} color="#2E2F23" />
              )}
            />
            <CustomButton
              title={"Share"}
              vertical={true}
              className={"gap-1"}
              textStyle={"text-xs font-medium"}
              textVariant={"primary"}
              IconTop={() => (
                <Ionicons
                  name="share-social-outline"
                  size={28}
                  color="#2E2F23"
                />
              )}
            />
          </View>
          <View className={"flex-row justify-between items-center mb-4"}>
            <View className={"flex"}>
              <Text className={"font-semibold text-xl"}>{recipe?.name}</Text>
              <Text className={"text-secondary-200"}>by {recipe?.author}</Text>
            </View>
            <CustomButton
              title={String(recipe?.rating)}
              className={"gap-1"}
              textVariant={"primary"}
              IconLeft={() => (
                <Ionicons name={"star"} size={24} color={"#F2C464"} />
              )}
            />
          </View>
          <View className={"flex-row gap-2 justify-start mb-3"}>
            <View className={"flex-row gap-1 items-center "}>
              <Ionicons name={"time-outline"} size={20} color={"#7D8D86"} />
              <Text className={"text-xs font-medium text-secondary-200"}>
                {String(recipe?.duration)} mins
              </Text>
            </View>
            <View className={"flex-row gap-1 items-center"}>
              <Ionicons
                name={"speedometer-outline"}
                size={20}
                color={"#7D8D86"}
              />
              <Text className={"text-xs font-medium text-secondary-200"}>
                {recipe?.difficulty}
              </Text>
            </View>
            <View className={"flex-row gap-1 items-center"}>
              <Ionicons name={"flame-outline"} size={20} color={"#7D8D86"} />
              <Text className={"text-xs font-medium text-secondary-200"}>
                {recipe?.calories} kal
              </Text>
            </View>
          </View>
          <View className={"flex mb-4"}>
            <Text className={"text-lg font-semibold"}>Description</Text>
            <Text className={"text-sm text-secondary-200"}>
              {recipe?.description}
            </Text>
          </View>
          <View className={"flex mb-4"}>
            <Text className={"text-lg font-semibold"}>Ingredients</Text>
            <View>
              {recipe?.ingredients?.map((ingredient, index) => (
                <IngredientCard
                  key={index}
                  id={index}
                  ingredientName={ingredient.name}
                  unit={ingredient.unit}
                  quantity={ingredient.quantity}
                />
              )) || <Text>No ingredients</Text>}
            </View>
          </View>
          <View className={"flex"}>
            <Text className={"text-lg font-semibold"}>Instructions</Text>
            {recipe?.instructions?.map((instruction, index) => (
              <InstructionsCard
                key={index}
                step={instruction.step}
                instruction={instruction.instruction}
              />
            )) || <Text>No instructions</Text>}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetails;
