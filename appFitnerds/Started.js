import React, { useState, useEffect, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Started() {
  return (
    <ImageBackground
      source={require("./src/background-dark.png")}
      style={styles.backgroundDark}
    >
      <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
        <Image source={require("./src/login-logo.png")}></Image>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginHorizontal: 34,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontFamily: "bebas-neue-bold",
            fontSize: 40,
            lineHeight: 40,
          }}
        >
          To get started, first enter your phone, email, or @username
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Phone, email, or username"
          style={{
            width: 322,
            height: 45,
            fontFamily: "",
            borderWidth: 1,
            borderColor: "#7C7C7C",
            marginTop: 20,
            borderRadius: 7,
            padding: 12,
            fontSize: 16,
            backgroundColor: "white",
            fontFamily: "bebas-neue",
          }}
        />
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flex: 1,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderTopColor: "#7c7c7c",
            paddingTop: 15,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#D9D9D9",
              borderRadius: 10,
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "bebas-neue",
                color: "#D9D9D9",
                paddingTop: 4,
                paddingHorizontal: 6,
              }}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#7C7C7C",
              fontSize: 16,
              borderRadius: 10,
              marginRight: 15,
            }}
          >
            <Text
              style={{
                paddingHorizontal: 13,
                paddingVertical: 4,
                color: "#444343",
                fontFamily: "bebas-neue",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
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
});
