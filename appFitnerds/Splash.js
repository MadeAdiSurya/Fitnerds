import React, { useState, useEffect, Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Splash() {
  return (
    <ImageBackground
      source={require("./src/background-dark.png")}
      style={styles.backgroundDark}
    >
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image source={require("./src/splash-logo.png")}></Image>
      </View>

      <View style={{ display: "flex", alignItems: "center", marginBottom: 34 }}>
        <Text
          style={{
            fontFamily: "bebas-neue",
            fontSize: 48,
            fontWeight: 700,
            color: "rgba(206, 228,82, 0.25)",
          }}
        >
          FitFit Group
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundDark: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    resizeMode: "cover",
  },

  viewSplash: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
});
