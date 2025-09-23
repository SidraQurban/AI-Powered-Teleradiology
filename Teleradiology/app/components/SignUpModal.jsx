import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpModal = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // API call
  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all fields");

      return;
    }

    if (!check) {
      Alert.alert("Error", "You must agree to the Terms of Service");
      return;
    }

    try {
      const response = await fetch(
        "https://fyp.publicvm.com/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
            first_name: name,
            phone_number: "0000000000",
            is_active: true,
            is_superuser: false,
            is_verified: false,
            registration_type: "email",
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        // ✅ request verify token immediately
        try {
          const verifyResponse = await fetch(
            "https://fyp.publicvm.com/api/v1/auth/request-verify-token",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: email }),
            }
          );

          const verifyData = await verifyResponse.json();
          console.log("Verify Response:", verifyData);

          if (verifyResponse.ok) {
            Alert.alert(
              "Verification",
    
         
            
          
  
        
        
        
         
  

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
              value={name}
              onChangeText={setName}
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
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
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
              value={password}
              onChangeText={setPassword}
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
              <MaterialCommunityIcons
                name={check ? "checkbox-marked" : "checkbox-blank-outline"}
                size={22}
                color="#adb5bd"
                onPress={() => setCheck(!check)}
              />
              <Text
                style={{
                  fontSize: responsiveFontSize(1.6),
                  color: "#adb5bd",
                  marginLeft: responsiveWidth(1),
                }}
              >
                I agree to the
              </Text>
              <Text
                style={{ fontSize: responsiveFontSize(1.6), color: "#468faf" }}
              >
                Terms of Service
              </Text>
            </View>
            {/* signup btn */}
            <View
              style={{ alignItems: "center", marginTop: responsiveHeight(4) }}
            >
              <TouchableOpacity
                onPress={handleSignUp}
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
                  Sign Up
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

export default SignUpModal;
