import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomTabBarButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity
      className={"top-[-25] focus:bg-blue-700 items-center"}
      activeOpacity={1}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: "#C8C4A6",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Ionicons name={"add"} size={30} color={"#3E3F29"} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;
