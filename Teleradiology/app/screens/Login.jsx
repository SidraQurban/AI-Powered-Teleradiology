import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import LoginModal from "../components/LoginModal";

const Login = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: responsiveHeight(100),
          backgroundColor: "#e9ecef",
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
        <LoginModal />
      </View>
    </SafeAreaView>
  );
};

export default Login;
