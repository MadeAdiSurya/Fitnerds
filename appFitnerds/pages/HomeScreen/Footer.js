import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Footer = ({ currentPage }) => {
  const [menuSelection, setMenuSelection] = useState(currentPage);
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
        }}
      >
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => {
            setMenuSelection("Training");
            navigation.replace("Home");
          }}
        >
          <FontAwesome5
            name="stopwatch"
            size={24}
            style={{
              color:
                menuSelection === "Training"
                  ? "#121212"
                  : " rgba(18,18,18,0.2)",
            }}
          />
          <Text
            style={[
              styles.footerText,
              {
                color:
                  menuSelection === "Training"
                    ? "#121212"
                    : " rgba(18,18,18,0.2)",
              },
            ]}
          >
            Training
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => {
            setMenuSelection("Report");
            navigation.replace("Report");
          }}
        >
          <Feather
            name="bar-chart"
            size={24}
            style={{
              color:
                menuSelection === "Report" ? "#121212" : " rgba(18,18,18,0.2)",
            }}
          />
          <Text
            style={[
              styles.footerText,
              {
                color:
                  menuSelection === "Report"
                    ? "#121212"
                    : " rgba(18,18,18,0.2)",
              },
            ]}
          >
            Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => {
            setMenuSelection("Settings");
            navigation.replace("Profile");
          }}
        >
          <MaterialIcons
            name="person"
            size={24}
            style={{
              color:
                menuSelection === "Settings"
                  ? "#121212"
                  : " rgba(18,18,18,0.2)",
            }}
          />
          <Text
            style={[
              styles.footerText,
              {
                color:
                  menuSelection === "Settings"
                    ? "#121212"
                    : " rgba(18,18,18,0.2)",
              },
            ]}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontFamily: "bebas-neue-bold",
    fontSize: 16,
    marginTop: 5,
  },

  footerIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
});

export default Footer;
