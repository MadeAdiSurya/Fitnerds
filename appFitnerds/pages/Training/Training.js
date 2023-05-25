import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useReducer, useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FitnessContex, FitnessItems } from "../../Context";

const Training = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const exercises = route.params.exercises;
  const current = exercises[index];

  const navigation = useNavigation();
  const { minutes, setMinutes, calories, setCalories, setWorkout, workout } =
    useContext(FitnessItems);

  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const handleRest = () => {
    navigation.navigate("RestScreen");
    setWorkout(workout + 1);
    setMinutes(minutes + 1);
    setCalories(calories + 3.8);
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  };

  return (
    <View style={{ backgroundColor: "#7FBD3E", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#121212",
          alignItems: "center",
          height: 420,
        }}
      >
        <Image
          style={{ width: "70%", height: 300, marginTop: 40, borderRadius: 10 }}
          source={{ uri: current.image }}
        />
        <View
          style={{
            backgroundColor: "#8CCA4B",
            width: 250,
            height: 70,
            marginTop: 40,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "bebas-neue-bold",
              fontSize: 26,
              color: "#ffffff",
            }}
          >
            {current.name}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: 75,
            height: 40,
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontFamily: "bebas-neue-bold", fontSize: 20 }}>
            x{current.sets}
          </Text>
        </View>
        {index + 1 >= exercises.length ? (
          <View
            style={{
              height: 300,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#619F20",
                width: 130,
                height: 50,
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                elevation: 3,
              }}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 26,
                  letterSpacing: 2,
                  fontFamily: "bebas-neue-bold",
                }}
              >
                DONE
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              height: 300,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#619F20",
                width: 130,
                height: 50,
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                elevation: 3,
              }}
              onPress={handleRest}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 26,
                  letterSpacing: 2,
                  fontFamily: "bebas-neue-bold",
                }}
              >
                DONE
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Training;
