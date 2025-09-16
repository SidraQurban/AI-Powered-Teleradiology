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
              style={{ fontSize: responsiveFontSize(1.7), fontWeight: "bold" }}
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
                height: responsiveHeight(5.5),
              }}
            />
          </View>
          {/* Password */}
          <View style={{ marginTop: responsiveHeight(2.5) }}>
            <Text
              style={{ fontSize: responsiveFontSize(1.7), fontWeight: "bold" }}
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
                height: responsiveHeight(5.5),
              }}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                marginLeft: responsiveWidth(73),
                marginTop: responsiveHeight(5.8),
              }}
            >
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {/* remember me */}
          <View>
            <View
              style={{
                marginTop: responsiveHeight(2.2),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#468faf",
                    fontSize: responsiveFontSize(1.5),
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#468faf",
                    fontSize: responsiveFontSize(1.5),
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            {/* login btn */}
            <View
              style={{ alignItems: "center", marginTop: responsiveHeight(4) }}
            >
              <TouchableOpacity
                style={{
                  padding: responsiveHeight(1.5),
                  paddingHorizontal: responsiveWidth(30),
                  backgroundColor: "#00b4d8",
                  borderRadius: responsiveWidth(5.5),
                }}
              >
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            {/* sign in with */}
            <View style={{ marginTop: responsiveHeight(10) }}>
              <View style={{ alignItems: "center" }}>
                <Text>Or Sign in with</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
