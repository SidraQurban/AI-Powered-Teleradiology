import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import LoginModal from "../components/LoginModal";
import { Image } from "react-native";

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
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/logoapp.png")}
            style={{
              height: responsiveHeight(10),
              width: responsiveHeight(30),
              resizeMode: "cover",
            }}
          />
        </View>
        <LoginModal />
      </View>
    </SafeAreaView>
  );
};

export default Login;
