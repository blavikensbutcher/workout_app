import React from "react";
import { View } from "react-native";
import {
  CalendarListProps,
  Calendar as RNCalendar,
} from "react-native-calendars";
import { CalendarContextProps } from "react-native-calendars/src/expandableCalendar/Context";

export const CustomCalendar = () => {
  return (
    <RNCalendar
      markingType={"multi-dot"}
      onDayPress={(day: { dateString: string }) => alert(day.dateString)}
      style={{
        borderColor: "#e3e3e3",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "transparent",
      }}
      theme={{
        calendarBackground: "transparent",
      }}
      markedDates={{
        "2024-07-26": { selected: false, marked: true, selectedColor: "red" },
        "2024-07-27": { marked: true },
        "2024-07-28": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-07-29": { disabled: false, disableTouchEvent: false },
        "2024-07-30": { marked: true, color: "red" },
      }}
    />
  );
};
