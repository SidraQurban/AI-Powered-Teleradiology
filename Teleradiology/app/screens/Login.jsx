import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

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
          <View
            style={{ marginTop: responsiveHeight(3), alignItems: "center" }}
          >
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
          <View>
            <View style={{ marginTop: responsiveHeight(4) }}>
              <Text style={{ fontSize: responsiveFontSize(2) }}>Email</Text>
              <TextInput
                placeholder="abc@gmail.com"
                style={{
                  borderWidth: 1,
                  borderColor: "#ced4da",
                  borderRadius: responsiveHeight(1),
                  marginHorizontal: responsiveHeight(2),
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
