import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
// import { Ionicons } from "react-native-vector-icons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const LoginModal = () => {
  const navigation = useNavigation();
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
          {/* phone number */}
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
          {/* forgot */}
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
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
            <View>
              <View
                style={{ alignItems: "center", marginTop: responsiveHeight(5) }}
              >
                <Text>Or Sign in with</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: responsiveHeight(2),
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#e9ecef",
                    borderRadius: responsiveHeight(2),
                    padding: responsiveWidth(0.8),
                    marginHorizontal: responsiveWidth(2),
                    width: responsiveHeight(6),
                    height: responsiveHeight(6),
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 3,
                    shadowColor: "#000", //ios shadow
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                  }}
                >
                  <Image
                    source={require("../../assets/facebook.png")}
                    style={{
                      height: responsiveHeight(5.2),
                      width: responsiveHeight(5.2),
                      resizeMode: "contain",
                      marginTop: responsiveHeight(0.5),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#e9ecef",
                    borderRadius: responsiveHeight(2),
                    padding: responsiveWidth(0.8),
                    marginHorizontal: responsiveWidth(2),
                    width: responsiveHeight(6),
                    height: responsiveHeight(6),
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 3,
                    shadowColor: "#000", //ios shadow
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                  }}
                >
                  <Image
                    source={require("../../assets/google.png")}
                    style={{
                      resizeMode: "center",
                      height: responsiveHeight(6),
                      width: responsiveWidth(6),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("PhoneSignup")}
                  style={{
                    backgroundColor: "#e9ecef",
                    borderRadius: responsiveHeight(2),
                    padding: responsiveWidth(0.8),
                    marginHorizontal: responsiveWidth(2),
                    width: responsiveHeight(6),
                    height: responsiveHeight(6),
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 3,
                    shadowColor: "#000", //ios shadow
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                  }}
                >
                  <Image
                    source={require("../../assets/phone.png")}
                    style={{
                      height: responsiveHeight(4),
                      width: responsiveHeight(4),
                      resizeMode: "contain",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
