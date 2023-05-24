import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  Home,
  Login,
  Started,
  Splash,
  MonthCalendar,
  WorkOut,
  Training,
  RestScreen,
  ItemContext,
  DataContext,
} from "./pages";
import { FitnessContext } from "./Context";

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
      <FitnessContext>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Started" component={Started} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MonthCalendar" component={MonthCalendar} />
          <Stack.Screen name="WorkOut" component={WorkOut} />
          <Stack.Screen name="Training" component={Training} />
          <Stack.Screen name="RestScreen" component={RestScreen} />
        </Stack.Navigator>
      </FitnessContext>
    </NavigationContainer>
  );
}
