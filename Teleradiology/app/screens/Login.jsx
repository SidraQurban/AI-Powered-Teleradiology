import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Login = () => {
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
            marginTop: responsiveHeight(2),
            alignItems: "center",
          }}
        >
          <Text>LOGO</Text>
        </View>
        <View
          style={{
            marginTop: responsiveHeight(13),
            backgroundColor: "white",
            height: responsiveHeight(75),
            borderRadius: responsiveHeight(5),
            marginHorizontal: responsiveHeight(2),
          }}
        >
          <Text>me</Text>
          <Text>O</Text>
          <Text>O</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
