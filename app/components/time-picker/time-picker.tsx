import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TextInputField from "../text-input/text-input";
import React, { useState } from "react";
import moment, { Moment } from "moment";

interface TimePickerInterface {
  timeValue: Moment;
  setTimeValue: (data: Moment) => void;
}

const TimePicker = ({ timeValue, setTimeValue }: TimePickerInterface) => {
  const [openClock, setOpenClock] = useState(false);

  const onChange = (event: any, selectedTime?: Date) => {
    if (selectedTime) {
      setTimeValue(moment(selectedTime)); // Convert Date to Moment
    }
    setOpenClock(false); // Hide the picker after selection
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
        placeHolder={timeValue.format("hh:mm A")} // Format time in AM/PM format
      />
      <TouchableOpacity onPress={() => setOpenClock(true)}>
        <FontAwesome size={35} name="clock-o" color={"#216363"} />
      </TouchableOpacity>
      {openClock && (
        <DateTimePicker
          mode="time"
          onChange={onChange}
          value={timeValue.toDate()} // Convert Moment to Date for picker
          display={Platform.OS === "ios" ? "spinner" : "default"}
        />
      )}
    </View>
  );
};

export default TimePicker;
