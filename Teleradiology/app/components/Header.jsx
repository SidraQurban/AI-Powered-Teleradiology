import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
      <View style={{ margin: responsiveHeight(1) }}>
        <TouchableOpacity
          style={{
            height: responsiveHeight(5),
            width: responsiveHeight(5),
            borderRadius: responsiveHeight(3),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            marginLeft: responsiveWidth(85),
            marginTop: responsiveHeight(-2),
          }}
        >
          <FontAwesome6 name="user" size={25} color="#adb5bd" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
