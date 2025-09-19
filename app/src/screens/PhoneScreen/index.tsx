


import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./style";
import HeaderCard from "../../components/HeaderCard";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import { UgandaFlag } from "../../../assets/icons";

type Props = NativeStackScreenProps<RootStackParamList, "Phone">;

const PhoneScreen: React.FC<Props> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      console.log("OTP sent to:", phoneNumber);
      navigation.navigate("Otp");
    } else {
      console.log("Enter valid 10-digit number");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Green Header */}
       
        <HeaderCard
      title="Login"
      subtitle="Please provide your 10-digit phone number to continue."
      showBack={true}
      onBackPress={() => navigation.goBack()}
    />

        {/* White Card */}
        <View style={styles.formCard}>
          <Input
           
            label="Phone number"
             value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="number-pad"
            maxLength={10}
            leftElement={<UgandaFlag width={28} height={20} />}
          />

          <Button title="Send OTP" type="solid" onPress={handleSendOtp} />

          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.forgotText}>Go back to login</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneScreen;
