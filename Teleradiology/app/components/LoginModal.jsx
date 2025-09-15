import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const LoginModal = () => {
  return (
    <View>
      <View
        style={{
          marginTop: responsiveHeight(15.6),
          backgroundColor: "white",
          height: responsiveHeight(75),
          borderRadius: responsiveHeight(5),
          marginHorizontal: responsiveHeight(2),
        }}
      >
        <View style={{ marginTop: responsiveHeight(3), alignItems: "center" }}>
          <Text
            style={{ fontSize: responsiveFontSize(2.3), fontWeight: "bold" }}
          >
            Welcome to
          </Text>
          <Text
            style={{ fontSize: responsiveFontSize(2.3), fontWeight: "bold" }}
          >
            TeleRadiology login now!
          </Text>
        </View>
        <View>
          <View style={{ marginTop: responsiveHeight(4) }}>
            <Text style={{ fontSize: responsiveFontSize(2) }}>Email</Text>
            <TextInput
              placeholder="abc@gmail.com"
              style={{
                borderWidth: 1,
                borderColor: "#ced4da",
                borderRadius: responsiveHeight(1),
                marginHorizontal: responsiveHeight(2),
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
