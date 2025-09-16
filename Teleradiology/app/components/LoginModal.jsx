import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
// import { Ionicons } from "react-native-vector-icons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
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
        <View style={{ marginHorizontal: responsiveHeight(2) }}>
          {/* Email */}
          <View style={{ marginTop: responsiveHeight(4) }}>
            <Text
              style={{ fontSize: responsiveFontSize(1.8), fontWeight: "bold" }}
            >
              Email
            </Text>
            <TextInput
              placeholder="abc@gmail.com"
              style={{
                marginTop: responsiveHeight(1),
                borderWidth: 1,
                borderColor: "#ced4da",
                borderRadius: responsiveHeight(2),
                paddingLeft: responsiveHeight(2),
                backgroundColor: "#e9ecef",
                height: responsiveHeight(5),
              }}
            />
          </View>
          {/* Password */}
          <View style={{ marginTop: responsiveHeight(2.5) }}>
            <Text
              style={{ fontSize: responsiveFontSize(1.8), fontWeight: "bold" }}
            >
              Password
            </Text>
            <TextInput
              secureTextEntry={!showPassword}
              placeholder="Enter your password"
              style={{
                marginTop: responsiveHeight(1),
                borderWidth: 1,
                borderColor: "#ced4da",
                borderRadius: responsiveHeight(2),
                paddingLeft: responsiveHeight(2),
                backgroundColor: "#e9ecef",
                height: responsiveHeight(5),
              }}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{
                position: "relative",
                marginLeft: responsiveWidth(73),
                marginTop: responsiveHeight(-3.8),
              }}
            >
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {/* remember me */}
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: responsiveHeight(2.2),
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => setCheck(!check)}>
                <MaterialCommunityIcons
                  name={check ? "checkbox-marked" : "checkbox-blank-outline"}
                  size={20}
                  color="#e9ecef"
                />
              </TouchableOpacity>
              <Text
                style={{ color: "#adb5bd", marginRight: responsiveWidth(25) }}
              >
                Remember me
              </Text>
              <TouchableOpacity>
                <Text style={{ color: "#468faf" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            {/* login btn */}
            <View
              style={{ alignItems: "center", marginTop: responsiveHeight(4) }}
            >
              <TouchableOpacity>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
