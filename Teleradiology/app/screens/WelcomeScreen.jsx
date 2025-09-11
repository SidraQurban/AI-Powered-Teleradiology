import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: responsiveHeight(100),
          backgroundColor: "#f8f9fa",
        }}
      >
        <View
          style={{
            marginTop: responsiveHeight(70),
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>
            AI That Cares for Your Health💙🩺
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
