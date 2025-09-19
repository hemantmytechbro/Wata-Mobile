


import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Button from "../../components/Button";
import styles from "./style";
import { Cross,Back2 } from "../../../assets/icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import HeaderCard from "../../components/HeaderCard";


type Props = NativeStackScreenProps<RootStackParamList, "Otp">;

const OtpScreen: React.FC<Props> = ({ navigation }) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const inputs = useRef<Array<TextInput | null>>([]);

  // countdown timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    console.log("Entered OTP:", code);
    navigation.navigate("Verification");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        
         <HeaderCard
      title="Enter OTP"
      subtitle=" We’ve just sent a 6-digit OTP to +91 7000704547."
    
      showBack={false}
      isClose={true}
      onBackPress={() => navigation.goBack()}
      
    />


        {/* White form card */}
        <View style={styles.formCard}>
          {/* OTP input boxes */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputs.current[index] = ref;
                }}
                style={styles.otpBox}
                value={digit}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  nativeEvent.key === "Backspace" &&
                  handleBackspace(digit, index)
                }
              />
            ))}
          </View>

          {/* Verify button */}
          <Button title="Verify" onPress={handleVerify} type="solid" />

          {/* Resend OTP */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendTitle}>Didn’t get OTP?</Text>

            {timer > 0 ? (
              <Text style={styles.resendText}>Resend OTP in 00:{timer}</Text>
            ) : (
              <TouchableOpacity onPress={() => setTimer(59)}>
                <Text style={styles.resendText}>Resend OTP</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;
