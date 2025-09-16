import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PhoneSignupModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const navigation = useNavigation();
  return (
    <View>
      <Text>PhoneSignupModal</Text>
    </View>
  );
};

export default PhoneSignupModal;
