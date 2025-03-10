import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TextInputField from "../text-input/text-input";
import React, { useState } from "react";
import moment, { Moment } from "moment";

interface DatePickerInterface {
  dateValue: Moment;
  setDateValue: (data: Moment) => void;
}

const DatePicker = ({ dateValue, setDateValue }: DatePickerInterface) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDateValue(moment(selectedDate)); // Convert Date to Moment
    }
    setOpenCalendar(false); // Hide the picker after selection
  };

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextInputField
        readOnly
        style={{ marginTop: 2, width: "90%", fontSize: 18, color: "#333" }}
        placeHolder={dateValue.format("YYYY-MM-DD")} // Format Moment.js value
      />
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
