import { View, Text } from "react-native";
import React from "react";

const PhoneSignup = () => {
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

export default PhoneSignup;
