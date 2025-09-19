


import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import HeaderCard from "../../components/HeaderCard";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1 }}>
          <ScrollView 
            contentContainerStyle={styles.container} 
            keyboardShouldPersistTaps="handled"
          >
            {/* Full Header */}
            <HeaderCard
              title="Get started now"
              subtitle="Create an account or log in to explore about our app."
              showBack={false}
            />

            {/* Form */}
            <View style={styles.formCard}>
              <Button
                title="Login with phone number"
                type="outlined"
                onPress={() => navigation.navigate("Phone")}
              />

              {/* Divider with OR */}
              <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText1}>Or</Text>
                <View style={styles.orLine} />
              </View>

              <Input label="Enter your email"  />
              <Input label="Enter password"  secureTextEntry />

              <Button title="Login" type="solid" onPress={() => {}} />

              <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={styles.forgotText}>Forgotten password?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Footer stays fixed at bottom */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>You don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
