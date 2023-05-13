import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  add,
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  subDays,
  format,
} from "date-fns";
import PagerView from "react-native-pager-view";

const dates = eachWeekOfInterval(
  {
    //view day in interval date (start, end)
    start: subDays(new Date(), 0), //to view 0 days before current date
    end: addDays(new Date(), 0), // to view 0 days after current date
  },
  { weekStartsOn: 1 }
).reduce((acc: Date[][], cur) => {
  //generates all day inside the week interval
  const allDays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6),
  });

  acc.push(allDays);
  return acc;
}, []); // week start on Monday since we set weekStartsOn : 1

const currentDate = new Date().getDate();
const currentMonthNumber = new Date().getMonth();
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Month = Months[currentMonthNumber];

console.log(Month);

export const DateSlider: React.FC = () => {
  return (
    <PagerView style={styles.container}>
      {dates.map((week, i) => {
        return (
          <View key={i}>
            <View style={styles.row}>
              {week.map((day, index) => {
                const txt = format(day, "EEEEE");
                return (
                  <View style={styles.day} key={index}>
                    <Text>{txt}</Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          color:
                            day.getDate() === currentDate ? "green" : "black",
                        }}
                      >
                        {day.getDate()}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: {
    alignItems: "center",
  },
});
