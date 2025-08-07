import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomTabBarButton from "@/components/CustomTabBarButton";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#C8C4A6",
        tabBarInactiveTintColor: "#7D8D86",
        tabBarStyle: {
          backgroundColor: "#3E3F29",
          borderRadius: 20,
          marginHorizontal: 15,
          marginVertical: 25,
          height: 60,
          marginTop: -5,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Recipes",
          tabBarIcon: ({ color }) => (
            <Ionicons name="receipt" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="mealCalendar"
        options={{
          title: "Planner",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="addEntry"
        options={{
          tabBarLabel: () => null,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="grocery"
        options={{
          title: "Groceries",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
