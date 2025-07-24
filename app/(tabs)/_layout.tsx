import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="dashboard" options={{
                title: 'Dashboard',
                tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                headerShown: false }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
                headerShown: false }} />

        </Tabs>
    )
}

export default TabLayout;