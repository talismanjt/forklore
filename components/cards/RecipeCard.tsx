import { Text, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "expo-image";

const RecipeCard = ({ name, image, onPress }: RecipeProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View className={"my-2 overflow-hidden rounded-2xl"}>
        <ImageBackground
          className={"w-full h-full"}
          contentFit={"cover"}
          source={{ uri: image }}
        >
          <View className={"w-full h-32 p-4"}>
            <Text className={"font-bold text-lg text-secondary-400"}>
              {name}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
