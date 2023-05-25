import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from "../HomeScreen/Footer";
import { authentication } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  const [email, setEmail] = useState(null);
  const [word, setWord] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    // Retrieve the current user
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in
        const email = user.email;
        setEmail(email);
        setWord(email[0]);
      } else {
        // User is signed out
        setEmail(null);
      }
    });

    return () => unsubscribe(); // Unsubscribe from the auth state changes on component unmount
  }, []);

  const handleSignOut = () => {
    signOut(authentication)
      .then((user) => {
        console.log("Sign Out Success");
        navigation.replace("Started");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#7FBD3E",
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#7FBD3E",
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "bebas-neue-bold", fontSize: 60 }}>
            {word}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <MaterialIcons name="email" size={20} color="#7FBD3E" />
          <Text
            style={{
              fontFamily: "bebas-neue",
              fontSize: 20,
              marginLeft: 10,
              color: "#ffffff",
            }}
          >
            {email}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.4)",
            borderRadius: 10,
            padding: 10,
          }}
          onPress={handleSignOut}
        >
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            backgroundColor: "white",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontFamily: "bebas-neue", fontSize: 24 }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View> */}

      <Footer currentPage={"Settings"} />
    </View>
  );
};

export default Profile;