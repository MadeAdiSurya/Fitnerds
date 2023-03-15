import { StatusBar } from "expo-status-bar";
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
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "./Footer";

const App = () => {
  const [data, setData] = useState([
    { number: 0, deskripsi: "workout" },
    { number: 0, deskripsi: "KCAL" },
    { number: 0, deskripsi: "minute" },
  ]);

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
  let todaysDate = new Date();

  getAllDay(getLastDay(todaysYear, todaysMonth));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
      <View
        style={{
          height: 340,
          backgroundColor: "#788048",
        }}
      >
        <View>
          <Text
            style={{
              marginTop: 70,
              marginLeft: 30,
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            FIT<Text style={{ color: "#f4f4f4" }}>NERDS</Text>
          </Text>
          <Text
            style={{
              marginLeft: 30,
              fontStyle: "italic",
              fontSize: 18,
            }}
          >
            your solution for home workout activity.
          </Text>
        </View>
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
            renderItem={({ item }) => (
              <View
                style={{
                  paddingTop: 50,
                  paddingHorizontal: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: 700, color: "#f4f4f4" }}
                >
                  {item.number}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: 400 }}>
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
                    backgroundColor: "#FFFFFF",
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
            source={require("./src/beginner.jpg")}
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
            source={require("./src/intermediate.jpg")}
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
            source={require("./src/expert.jpg")}
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
      <Footer />
    </ScrollView>
  );
};

export default App;
