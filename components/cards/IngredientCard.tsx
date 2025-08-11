import { Text, View } from "react-native";

const IngredientCard = ({
  ingredientName,
  quantity,
  unit,
}: IngredientProps) => {
  return (
    <View
      className={
        "flex-row justify-between items-center bg-secondary-400 p-5 my-2 rounded-md shadow-sm shadow-secondary-350"
      }
    >
      <Text className={"font-regular text-sm text-secondary-100"}>
        {ingredientName}
      </Text>
      <Text className={"text-secondary-100 text-sm"}>
        {quantity} {unit}
      </Text>
    </View>
  );
};

export default IngredientCard;
