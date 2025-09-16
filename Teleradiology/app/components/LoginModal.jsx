import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialDesignIcons } from "react-native-vector-icons";

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
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
                marginTop: responsiveHeight(2),
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <MaterialDesignIcons
                  name="checkbox-blank-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>

              <Text>Remember me</Text>
              <Text>Forgot Password?</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
