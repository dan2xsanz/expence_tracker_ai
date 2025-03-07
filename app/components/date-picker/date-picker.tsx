import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TextInputField from "../text-input/text-input";
import React, { useState } from "react";

interface DatePickerInterface {
  dateValue: Date;
  setDateValue: (data: Date) => void;
}

const DatePicker = ({ dateValue, setDateValue }: DatePickerInterface) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDateValue(selectedDate);
    }
    setOpenCalendar(false); // Hide the picker after selection
  };

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <TextInputField
        readOnly
        style={{ marginTop: 2, width: "90%", fontSize: 18, color: "#333" }}
        placeHolder={dateValue.toDateString()}
      />
      <TouchableOpacity onPress={() => setOpenCalendar(true)}>
        <FontAwesome size={32} name="calendar" color={"#216363"} />
      </TouchableOpacity>
      {openCalendar && (
        <DateTimePicker
          mode="date"
          onChange={onChange}
          value={dateValue}
          display={Platform.OS === "ios" ? "spinner" : "default"}
        />
      )}
    </View>
  );
};

export default DatePicker;
