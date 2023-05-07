import React, { useState, useEffect } from "react";
import Splash from "./Splash";
import Home from "./Home";
import Started from "./Started";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "bebas-neue": require("./assets/fonts/bebas-neue.ttf"),
    "bebas-neue-bold": require("./assets/fonts/bebas-neue-bold.ttf"),
    // "Bebas-Neue-Italic": require("./assets/fonts/Bebas-Neue-Italic.ttf"),
    // "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf"),
    // "Oswald-ExtraLight": require("./assets/fonts/Oswald-ExtraLight.ttf"),
    // "Oswald-Light": require("./assets/fonts/Oswald-Light.ttf"),
    "oswald-medium": require("./assets/fonts/oswald-medium.ttf"),
    "oswald-regular": require("./assets/fonts/oswald-regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Started"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="Started" component={Started} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
