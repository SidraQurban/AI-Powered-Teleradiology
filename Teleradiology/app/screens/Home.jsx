import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Carousal from "../components/Carousal";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <Carousal />

      {/* Recent history */}

      {/* footer */}
    </SafeAreaView>
  );
};

export default Home;
