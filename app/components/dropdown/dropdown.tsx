import React, { useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const DropdownPicker = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={{ borderWidth: 1, borderRadius: 5, borderColor: "black" }}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        placeholder={{ label: "Payment Method", value: null }}
        style={{
          inputIOS: {
            fontSize: 25,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
          },
          inputAndroid: {
            fontSize: 25,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
          },
        }}
      />
    </View>
  );
};

export default DropdownPicker;
