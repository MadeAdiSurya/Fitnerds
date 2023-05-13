import React from "react";
import { View, Text } from "react-native";

const MonthCalendar = ({ year, month }) => {
  const weeksInMonth = getWeeksInMonth(year, month);

  return (
    <View style={{ flex: 1 }}>
      {weeksInMonth.map((week, index) => (
        <View key={index}>
          {week.map((day, index) => (
            <Text key={index}>
              {day.getDate()} style ={{ color: "black", fontSize: 20 }}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const getWeeksInMonth = (year, month) => {
  const weeks = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let currentDate = new Date(firstDay);
  let week = [];

  while (currentDate <= lastDay) {
    if (currentDate.getDay() === 0 && week.length > 0) {
      weeks.push(week);
      week = [];
    }
    week.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (week.length > 0) {
    weeks.push(week);
  }

  return weeks;
};

export default MonthCalendar;
