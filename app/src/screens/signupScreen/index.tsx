


import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";


import HeaderCard from "../../components/HeaderCard";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");


  const handleSignUp = () => {
    // Basic validations
    if (!phone || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number");
      return;
    }

    // ✅ All validations passed, navigate
    navigation.navigate("Congratulations");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Header */}

   <HeaderCard
      title="Sign up"
      subtitle="Please fill in this form to create an account."
      onBackPress={() => navigation.goBack()}
    />

        {/* Form */}
        <View style={styles.formCard}>
          <Input
            label="phone number"
           
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"  
            maxLength={10}
          />
         <Input
 label=" company name"
  
  value={companyName}
  onChangeText={setCompanyName}
  keyboardType="default"
  autoCapitalize="words"
/>


          <Input
            
            label="Email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address" 
            autoCapitalize="none"
          />

          <Input
           
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            keyboardType="default"
          />

          <Button title="Sign Up" type="solid" onPress={handleSignUp} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;



