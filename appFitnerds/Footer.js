import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Footer = () => {
  const [menuSelection, setMenuSelection] = useState("");
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f4f4f4",
          elevation: 3,
          padding: 10,
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 15,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            setMenuSelection("Training");
          }}
        >
          <Ionicons
            name="barbell-outline"
            size={30}
            color={menuSelection == "Training" ? "#788048" : "black"}
          />
          <Text>Training</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => setMenuSelection("Report")}
        >
          <Ionicons
            name="bar-chart-outline"
            size={30}
            color={menuSelection == "Report" ? "#788048" : "black"}
          />
          <Text>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => setMenuSelection("Setting")}
        >
          <Ionicons
            name="person-outline"
            size={30}
            color={menuSelection == "Setting" ? "#788048" : "black"}
          />
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
