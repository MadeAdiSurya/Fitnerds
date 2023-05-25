import React, { useState, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import dataIntermediate from "../../components/dataIntermediate";
import { Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WorkoutCardsInter = () => {
  const workoutData = dataIntermediate;
  const navigation = useNavigation();

  return (
    <View>
      {workoutData.map((item, key) => (
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 5,
            borderRadius: 5,
          }}
          key={key}
          onPress={() =>
            navigation.navigate("WorkOut", {
              image: item.image,
              exercises: item.exercises,
              id: item.id,
              name: item.name,
            })
          }
        >
          <Image
            style={{
              width: "90%",
              height: 130,
              resizeMode: "cover",
              borderRadius: 7,
            }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "#ffffff",
              fontFamily: "bebas-neue-bold",
              fontSize: 18,
              left: 30,
              top: 10,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WorkoutCardsInter;
