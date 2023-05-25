import React, { useState, useContext, createContext, useEffect } from "react";
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
import { db } from "../../firebase";
import { getDoc, getDocs, doc, onSnapshot, setDoc } from "firebase/firestore";
import { FitnessContex, FitnessItems } from "../../Context";
import { authentication } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Report = () => {
  const [importMinutes, setImportMinutes] = useState(0);
  const [importWorkout, setImportWorkout] = useState(0);
  const [importCalories, setImportCalories] = useState(0);
  const [email, setEmail] = useState([]);

  useEffect(() => {
    // Retrieve the current user
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in
        const email = user.email;
        setEmail(email);
      } else {
        // User is signed out
        setEmail(null);
      }
    });
  }, []);

  const {
    workout,
    calories,
    minutes,
    setExportWorkout,
    setExportMinutes,
    setExportCalories,
    userEmail,
  } = useContext(FitnessItems);
  const docRef = doc(db, "users", userEmail);

  onSnapshot(docRef, (doc) => {
    setImportWorkout(doc.data().workout + workout);
    setImportMinutes(doc.data().calories + minutes);
    setImportCalories(doc.data().minutes + calories);
    setExportWorkout(doc.data().workout + workout);
    setExportMinutes(doc.data().calories + minutes);
    setExportCalories(doc.data().minutes + calories);
  });

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
              <Text style={styles.homeTopText}>{importWorkout}</Text>
              <Text style={styles.homeTopContent}>WORKOUTS</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                paddingHorizontal: 50,
              }}
            >
              <Text style={styles.homeTopText}>{importCalories}</Text>
              <Text style={styles.homeTopContent}>KCAL</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                paddingHorizontal: 50,
              }}
            >
              <Text style={styles.homeTopText}>{importMinutes}</Text>
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
              <Text
                style={{
                  // fontFamily: "bebas-neue-bold",
                  fontSize: 22,
                }}
              >
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
    // fontFamily: "bebas-neue-bold",
    color: "#121212",
    fontSize: 28,
  },

  homeTopContent: {
    // fontFamily: "bebas-neue",
    color: "#121212",
    fontSize: 18,
    paddingVertical: 8,
  },
});

export default Report;
