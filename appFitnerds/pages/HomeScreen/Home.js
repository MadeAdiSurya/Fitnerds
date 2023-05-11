import { useState } from "react";
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

const HEADER_MAX_HEIGHT = 70;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Home = () => {
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

  const [data, setData] = useState([
    { number: 0, deskripsi: "workout" },
    { number: 0, deskripsi: "KCAL" },
    { number: 0, deskripsi: "minute" },
  ]);

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

  getAllDay(getLastDay(todaysYear, todaysMonth));

  return (
    <View style={{ flex: 1 }}>
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
            height: 340,
            backgroundColor: "#141414",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ backgroundColor: "red" }}
              renderItem={({ item }) => (
                <View
                  style={{
                    display: "flex",
                    paddingTop: 50,
                    paddingHorizontal: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "blue",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 700,
                      color: "#f4f4f4",
                      fontFamily: "bebas-neue",
                    }}
                  >
                    {item.number}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#f4f4f4",
                      fontFamily: "bebas-neue",
                    }}
                  >
                    {item.deskripsi}
                  </Text>
                </View>
              )}
            />
          </View>

          <View
            style={{
              marginHorizontal: 30,
              marginVertical: 20,
              height: 120,
              backgroundColor: "#f4f4f4f4",
              borderRadius: 15,
              elevation: 3,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginLeft: 20,
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text style={{ fontStyle: "italic" }}>Daily Goal</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="create-outline" size={20} color="black" />
              </View>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <FlatList
                data={tempArray}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      paddingVertical: 10,
                      marginRight: 5,
                      marginLeft: 20,
                      paddingHorizontal: 5,
                      backgroundColor: "#ffffff",
                      borderRadius: 25,
                      elevation: 3,
                      marginVertical: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      height: 35,
                      width: 35,
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 70,
            }}
          >
            <Image
              source={require("../../src/beginner.jpg")}
              style={{
                height: 200,
                width: "80%",
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                position: "absolute",
                left: 50,
                top: 20,
                color: "white",
                fontSize: 18,
              }}
            >
              BEGINNER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Image
              source={require("../../src/intermediate.jpg")}
              style={{
                height: 200,
                width: "80%",
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                position: "absolute",
                left: 50,
                top: 20,
                color: "white",
                fontSize: 18,
              }}
            >
              INTERMEDIATE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
              marginBottom: 30,
            }}
          >
            <Image
              source={require("../../src/expert.jpg")}
              style={{
                height: 200,
                width: "80%",
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                position: "absolute",
                left: 50,
                top: 20,
                color: "white",
                fontSize: 18,
              }}
            >
              EXPERT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Home;
