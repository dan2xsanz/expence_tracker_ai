import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TextInputField from "../text-input/text-input";
import React, { useState } from "react";

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [openClock, setOpenClock] = useState(false);

  const onChange = (event: any, selectedTime?: Date) => {
    if (selectedTime) {
      setSelectedTime(selectedTime);
    }
    setOpenClock(false); // Hide the picker after selection
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
        placeHolder={selectedTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      />
      <TouchableOpacity onPress={() => setOpenClock(true)}>
        <FontAwesome size={35} name="clock-o" color={"#216363"} />
      </TouchableOpacity>
      {openClock && (
        <DateTimePicker
          mode="time"
          onChange={onChange}
          value={selectedTime}
          display={Platform.OS === "ios" ? "spinner" : "default"}
        />
      )}
    </View>
  );
};

export default TimePicker;
