import { useFonts } from 'expo-font';
import {Stack} from "expo-router";
import '../global.css'



export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
      <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          <Stack.Screen name="(auth)" options={{headerShown: false}} />
      </Stack>
  );
}
