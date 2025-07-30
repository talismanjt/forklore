import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { View, Text } from "react-native";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Show loading while checking auth state
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0D1B2A",
        }}
      >
        <Text style={{ color: "#778DA9", fontSize: 16 }}>Loading...</Text>
      </View>
    );
  }

  if (session && session.user) {
    return <Redirect href={"/(tabs)/dashboard"} />;
  }

  return <Redirect href={"/(auth)/welcome"} />;
}
