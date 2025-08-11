import { Text, View } from "react-native";

const InstructionsCard = ({ step, instruction }: InstructionProps) => {
  return (
    <View
      className={
        "flex-row justify-between items-center bg-secondary-450 p-5 my-2 rounded-md shadow-sm shadow-secondary-350"
      }
    >
      <Text className={"font-regular text-md text-secondary-100 text-justify"}>
        <Text className={"font-semibold"}>Step {step}:</Text> {instruction}
      </Text>
    </View>
  );
};

export default InstructionsCard;
