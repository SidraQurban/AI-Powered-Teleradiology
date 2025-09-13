import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const 
  const navigation = useNavigation();
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
            marginTop: responsiveHeight(70),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: "bold",
            }}
          >
            AI That Cares for Your Health💙🩺
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: responsiveHeight(5) }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              padding: responsiveHeight(1.5),
              paddingHorizontal: responsiveWidth(25),
              backgroundColor: "#00b4d8",
              borderRadius: responsiveWidth(2.5),
            }}
          >
            <Text
              style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
