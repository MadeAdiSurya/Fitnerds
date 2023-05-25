import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { authentication } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { FitnessItems, FitnessContext } from "../../Context";

export default function Started() {
  const route = useRoute();

  const { setWorkout, setMinutes, setCalories, setUser, setUserEmail } =
    useContext(FitnessItems);

  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLogin(true);
        console.log("Sign Up with ");
        setWorkout(0);
        setMinutes(0);
        setCalories(0);
        setUserEmail(user.email);
        setDoc(doc(db, "users", user.email), {
          calories: 0,
          workout: 0,
          minutes: 0,
        });
        navigation.replace("Started");
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLogin(true);
        console.log("Login with", user.email);
        if (user) {
          navigation.navigate("Home");
          setWorkout(0);
          setMinutes(0);
          setCalories(0);
          setUserEmail(user.email);
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground
      source={require("../../src/background-dark.png")}
      style={styles.backgroundDark}
    >
      <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
        <Image source={require("../../src/login-logo.png")}></Image>
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
          To get started, first create your account
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="email"
          style={{
            width: 322,
            height: 45,
            fontFamily: "bebas-neue",
            borderWidth: 1,
            borderColor: "#7C7C7C",
            marginTop: 30,
            borderRadius: 7,
            padding: 12,
            fontSize: 16,
            fontFamily: "bebas-neue",
            backgroundColor: "rgba(18,18,18, 0.3)",
            color: "rgba(255,255,255,0.4)",
          }}
          placeholderTextColor="rgba(255,255,255,0.4)"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="password"
          style={{
            width: 322,
            height: 45,
            fontFamily: "bebas-neue",
            borderWidth: 1,
            borderColor: "#7C7C7C",
            marginTop: 10,
            borderRadius: 7,
            padding: 12,
            fontSize: 16,
            fontFamily: "bebas-neue",
            backgroundColor: "rgba(18,18,18, 0.3)",
            color: "rgba(255,255,255,0.4)",
          }}
          placeholderTextColor="rgba(255,255,255,0.4)"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
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
            onPress={handleSignUp}
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
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#7C7C7C",
              borderRadius: 10,
              marginRight: 15,
            }}
            onPress={handleLogin}
          >
            <Text
              style={{
                paddingHorizontal: 13,
                paddingVertical: 4,
                color: "#444343",
                fontFamily: "bebas-neue",
                fontSize: 16,
              }}
            >
              Login
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
