import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "react-native-responsive-dimensions";
import SignUpModal from "../components/SignUpModal";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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
        <View>
          {/* Header */}

          <View style={{ margin: responsiveHeight(1) }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: responsiveHeight(5),
                width: responsiveHeight(5),
                borderRadius: responsiveHeight(3),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Ionicons name="chevron-back" size={22} color="#adb5bd" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: responsiveHeight(-4),
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
