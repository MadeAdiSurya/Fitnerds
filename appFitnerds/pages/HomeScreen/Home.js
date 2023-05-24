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
import Footer from "./Footer";
import { DateSlider } from "./DateSlider";
import WorkoutCards from "./WorkoutCards";
import { FitnessContex, FitnessItems } from "../../Context";

const HEADER_MAX_HEIGHT = 70;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Home = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);

  // Create Collapse Header
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: ["#141414", "#7FBD3E"],
    extrapolate: "clamp",
  });

  const headerFontColor = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: ["#FFFFFF", "#000000"],
    extrapolate: "clamp",
  });

  // End of Collapse Header

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
  // let firstDayArray = []
  // firstDay.push(firstDay)

  getAllDay(getLastDay(todaysYear, todaysMonth));

  return (
    <View style={{ flex: 1, backgroundColor: "#7FBD3E" }}>
      <StatusBar barStyle="light-content" backgroundColor="#141414" />
      <Animated.View
        style={{
          height: headerHeight,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: headerBackgroundColor,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Animated.Text
          style={{
            fontFamily: "bebas-neue-bold",
            color: "#FFFFFF",
            fontSize: 24,
            padding: 15,
          }}
        >
          FIT
          <Animated.Text style={{ color: headerFontColor }}>
            NERDS
          </Animated.Text>
        </Animated.Text>
      </Animated.View>
      <ScrollView
        id="scrollview"
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        <View
          style={{
            height: 200,
            backgroundColor: "#141414",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 34,
              marginBottom: 25,
              marginTop: 36,
            }}
          >
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text style={styles.homeTopText}>{workout}</Text>
              <Text style={styles.homeTopContent}>WORKOUTS</Text>
            </View>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text style={styles.homeTopText}>{calories}</Text>
              <Text style={styles.homeTopContent}>KCAL</Text>
            </View>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text style={styles.homeTopText}>{minutes}</Text>
              <Text style={styles.homeTopContent}>MINS</Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 30,
              marginVertical: 20,
              height: 120,
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
                WEEK GOAL
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <DateSlider />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 110 }}>
          <Text
            style={{
              fontFamily: "bebas-neue-bold",
              color: "#141414",
              fontSize: 18,
              marginLeft: 25,
              marginBottom: 5,
            }}
          >
            BEGINNER
          </Text>
          <WorkoutCards />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  homeTopText: {
    fontFamily: "bebas-neue-bold",
    color: "#FFFFFF",
    fontSize: 28,
  },

  homeTopContent: {
    fontFamily: "bebas-neue",
    color: "#f9f9f9f9",
    fontSize: 18,
    paddingVertical: 8,
  },
});

export default Home;
