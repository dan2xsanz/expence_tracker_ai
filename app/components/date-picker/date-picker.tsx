import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Platform,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TextInputField from "../text-input/text-input";
import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";

interface DatePickerInterface {
  dateValue: Moment;
  setDateValue: (data: Moment) => void;
  isFocused?: boolean;
  label?: string;
}

const DatePicker = ({
  label,
  isFocused,
  dateValue,
  setDateValue,
}: DatePickerInterface) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDateValue(moment(selectedDate)); // Convert Date to Moment
    }
    setOpenCalendar(false); // Hide the picker after selection
  };

  const placeHolderDisplay = () => {
    let placeHolder = "Date";
    placeHolder = dateValue ? dateValue.format("YYYY-MM-DD") : "";
    return `${label ? label : "Date: "}${placeHolder}`;
  };

  let isFocusedStyle: StyleProp<TextStyle> = {
    borderStyle: "solid",
    borderBottomWidth: 3.5,
    borderColor: "#338f79ff",
    borderBottomColor: "#338f79ff",
  };

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => setOpenCalendar(true)}
        style={{ width: "90%" }}
      >
        <TextInputField
          readOnly
          style={{
            marginTop: 2,
            fontSize: 18,
            color: "#333",
            ...(isFocused && isFocusedStyle),
          }}
          placeHolder={placeHolderDisplay()}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOpenCalendar(true)}>
        <FontAwesome size={32} name="calendar" color={"#216363"} />
      </TouchableOpacity>
      {openCalendar && (
        <DateTimePicker
          mode="date"
          onChange={onChange}
          value={dateValue.toDate()} // Convert Moment to Date for picker
          display={Platform.OS === "ios" ? "spinner" : "default"}
        />
      )}
    </View>
  );
};

export default DatePicker;
