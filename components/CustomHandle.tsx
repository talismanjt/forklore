import { Text, TouchableOpacity, View } from "react-native";

const CustomHandle = ({ onClose }: CustomHandleProps) => {
  return (
    <View className="relative justify-center items-center bg-white h-12">
      <TouchableOpacity className="absolute left-4 top-3" onPress={onClose}>
        <Text className="text-secondary-300 font-semibold text-md">Close</Text>
      </TouchableOpacity>
      <View
        style={{
          width: 40,
          height: 5,
          borderRadius: 3,
          backgroundColor: "#ccc",
          marginTop: 0,
        }}
      />
    </View>
  );
};

export default CustomHandle;
