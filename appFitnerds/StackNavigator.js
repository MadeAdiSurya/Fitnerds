import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
  Profile,
  ItemContext,
  DataContext,
  Report,
} from "./pages";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  //   const [fontsLoaded] = useFonts({
  //     "bebas-neue": require("./assets/fonts/bebas-neue.ttf"),
  //     "bebas-neue-bold": require("./assets/fonts/bebas-neue-bold.ttf"),
  //   });

  //   // You can show a loading indicator or any other content while the fonts are loading

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Started"
          component={Started}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkOut"
          component={WorkOut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Training"
          component={Training}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RestScreen"
          component={RestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
