import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Text>WelcomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
