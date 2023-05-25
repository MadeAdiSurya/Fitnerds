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
  Profile,
  ItemContext,
  DataContext,
  Report,
} from "./pages";
import { FitnessContext } from "./Context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "bebas-neue": require("./assets/fonts/bebas-neue.ttf"),
    "bebas-neue-bold": require("./assets/fonts/bebas-neue-bold.ttf"),
  });

  // You can show a loading indicator or any other content while the fonts are loading

  // useEffect(() => {
  //   fontsLoaded;
  //   const hideSplashScreen = async () => {
  //     await SplashScreen.preventAutoHideAsync();
  //   };

  //   hideSplashScreen();

  //   // Perform any necessary asynchronous tasks (e.g., data fetching, initialization)
  //   // Once your app has finished loading, call SplashScreen.hideAsync() to hide the splash screen.
  //   // For example, you can simulate a delay of 3 seconds before hiding the splash screen:
  //   setTimeout(async () => {
  //     await SplashScreen.hideAsync();
  //   }, 3000);
  // }, []);
  if (fontsLoaded) {
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
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Report" component={Report} />
          </Stack.Navigator>
        </FitnessContext>
      </NavigationContainer>
    );
  }
}
