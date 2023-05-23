import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Home, Login, Started, Splash, MonthCalendar, WorkOut } from "./pages";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "bebas-neue": require("./assets/fonts/bebas-neue.ttf"),
    "bebas-neue-bold": require("./assets/fonts/bebas-neue-bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Started" component={Started} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MonthCalendar" component={MonthCalendar} />
        <Stack.Screen name="WorkOut" component={WorkOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
