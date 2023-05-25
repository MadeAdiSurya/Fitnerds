import React, { useState, useEffect, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WorkOut = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.replace("Home");
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "#121212" }}>
        <View
          style={{
            height: 50,
            backgroundColor: "#7FBD3E",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleBack}
          >
            <Ionicons name="chevron-back-sharp" size={24} color="#ffffff" />
            <Text
              style={{
                fontFamily: "bebas-neue",
                fontSize: 24,
                color: "#ffffff",
              }}
            >
              {route.params.name}
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />

        {route.params.exercises.map((item, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 10,
            }}
          >
            <View style={{ borderRadius: 10 }}>
              <Image
                style={{
                  width: 90,
                  height: 90,
                  marginVertical: 10,
                }}
                source={{ uri: item.image }}
              />
            </View>

            <View
              style={{
                borderRadius: 10,
                backgroundColor: "#7FBD3E",
                width: "72%",
                marginLeft: 10,
                marginVertical: 10,
                height: 90,
                padding: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "bebas-neue-bold",
                  fontSize: 24,
                  color: "#121212",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: "bebas-neue",
                  fontSize: 16,
                  color: "#ffffff",
                }}
              >
                x{item.sets}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          height: 150,
          backgroundColor: "#121212",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#7FBD3E",
            padding: 10,
            marginHorizontal: "auto",
            width: 250,
            borderRadius: 10,
          }}
          onPress={() =>
            navigation.navigate("Training", {
              exercises: route.params.exercises,
            })
          }
        >
          <Text
            style={{
              textAlign: "center",
              color: "#ffffff",
              fontFamily: "bebas-neue-bold",
              fontSize: 24,
              letterSpacing: 3,
            }}
          >
            START
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WorkOut;
