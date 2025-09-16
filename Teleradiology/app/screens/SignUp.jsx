import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "react-native-responsive-dimensions";
import SignUpModal from "../components/SignUpModal";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
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
        <SignUpModal />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
