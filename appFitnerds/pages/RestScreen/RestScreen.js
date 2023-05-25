import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(10);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    //clean up
    return () => clearTimeout(timer);
  });

  return (
    <View
      style={{
        backgroundColor: "#121212",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={require("../../src/splash-logo.png")} />
      <View
        style={{
          backgroundColor: "#121212",
          width: 200,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "#121212",
            fontFamily: "bebas-neue-bold",
            fontSize: 36,
            color: "#ffffff",
          }}
        >
          BREAK TIME
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#121212",
          width: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontFamily: "bebas-neue-bold",
            fontSize: 90,
          }}
        >
          {timeLeft}
        </Text>
      </View>
    </View>
  );
};

export default RestScreen;
