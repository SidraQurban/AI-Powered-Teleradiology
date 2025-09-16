import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SignUpModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <View>
      <View
        style={{
          marginTop: responsiveHeight(10),
          backgroundColor: "white",
          height: responsiveHeight(80),
          borderRadius: responsiveHeight(5),
          marginHorizontal: responsiveHeight(2),
        }}
      >
        <View style={{ marginHorizontal: responsiveHeight(2) }}>
          <View
            style={{ marginTop: responsiveHeight(3), alignItems: "center" }}
          >
            <Text
              style={{ fontSize: responsiveFontSize(2.3), fontWeight: "bold" }}
            >
              Create an Account?
            </Text>
          </View>
          {/* Email */}
          <View style={{ marginTop: responsiveHeight(4) }}>
            <Text
              style={{ fontSize: responsiveFontSize(1.7), fontWeight: "bold" }}
            >
              Name
            </Text>
            <TextInput
              placeholder="John Doe"
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
          {/* Email */}
          <View style={{ marginTop: responsiveHeight(2.5) }}>
            <Text
              style={{ fontSize: responsiveFontSize(1.7), fontWeight: "bold" }}
            >
              Email
            </Text>
            <TextInput
              placeholder="JohnDoe@gmail.com"
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
              placeholder="....."
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
          {/* Sign Up */}
          <View>
            <View
              style={{ flexDirection: "row", marginTop: responsiveHeight(1) }}
            >
              <Text style={{ fontSize: responsiveFontSize(1.6) }}>
                I agree to the
              </Text>
              <Text
                style={{ fontSize: responsiveFontSize(1.6), color: "#468faf" }}
              >
                Terms of Service
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpModal;
