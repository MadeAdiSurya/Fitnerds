import React, { useState, useContext, createContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Animated,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "../HomeScreen/Footer";
import { HistorySlider } from "../HomeScreen/HistorySlider";

import { FitnessContex, FitnessItems } from "../../Context";

const Report = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);

  const [press, setPress] = useState("");

  const [menuSelection, setMenuSelection] = useState("");

  let tempArray = [];

  let getLastDay = function (year, month) {
    return new Date(year, month, 0).getDate();
  };

  let getAllDay = function (totalDay) {
    let count = 1;
    for (let i = 1; i <= totalDay; i++) {
      count = i;
      tempArray.push(count);
    }

    return tempArray;
  };

  let todaysYear = new Date().getFullYear();
  let todaysMonth = new Date().getMonth() + 1;

  let firstDay = new Date(todaysYear, todaysMonth, 1).getDate();

  getAllDay(getLastDay(todaysYear, todaysMonth));

  return (
    <View style={{ flex: 1, backgroundColor: "#7FBD3E" }}>
      <StatusBar barStyle="light-content" backgroundColor="#141414" />

      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 500,
            backgroundColor: "#121212",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 25,
              marginTop: 36,
              backgroundColor: "#7FBD3E",
              height: 150,
              borderBottomRightRadius: 10,
              borderBottomStartRadius: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                paddingHorizontal: 50,
              }}
            >
              <Text style={styles.homeTopText}>{workout}</Text>
              <Text style={styles.homeTopContent}>WORKOUTS</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                paddingHorizontal: 50,
              }}
            >
              <Text style={styles.homeTopText}>{calories}</Text>
              <Text style={styles.homeTopContent}>KCAL</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                paddingHorizontal: 50,
              }}
            >
              <Text style={styles.homeTopText}>{minutes}</Text>
              <Text style={styles.homeTopContent}>MINS</Text>
            </View>
          </View>

          <View
            style={{
              marginVertical: 20,
              height: 140,
              backgroundColor: "#7FBD3E",
              borderRadius: 10,
              elevation: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: 15,
                marginVertical: 15,
              }}
            >
              <Text style={{ fontFamily: "bebas-neue-bold", fontSize: 22 }}>
                HISTORY
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <HistorySlider />
            </View>
          </View>
        </View>
        <View
          style={{ height: 400, flex: 1, backgroundColor: "#121212" }}
        ></View>
      </View>
      <Footer currentPage={"Report"} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeTopText: {
    fontFamily: "bebas-neue-bold",
    color: "#121212",
    fontSize: 28,
  },

  homeTopContent: {
    fontFamily: "bebas-neue",
    color: "#121212",
    fontSize: 18,
    paddingVertical: 8,
  },
});

export default Report;
