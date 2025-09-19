

import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView, Text } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { styles } from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import { UgandaFlag, Cross } from "../../../assets/icons";
import HeaderCard from "../../components/HeaderCard";

type Props = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    if (email.includes("@")) {
      console.log("Password reset email sent to:", email);
      // 🔗 API call here
    } else {
      console.log("Please enter a valid email address");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      
      <HeaderCard
      title="Forgot password?"
      subtitle="Please enter the email address you’d like your password reset information sent to."
    
      showBack={false}
      isClose={true}
      onBackPress={() => navigation.goBack()}
      
    />

      {/* Card */}
      <View style={styles.card}>
        <Input
          label="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          leftElement={<UgandaFlag width={28} height={20} />}
        />

        <Button
          title="Reset Password"
          onPress={handleResetPassword}
          type="solid"
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;





