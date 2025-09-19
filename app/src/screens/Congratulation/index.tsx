


import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Button from "../../components/Button";

import { styles } from "./style";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import HeaderCard from "../../components/HeaderCard";

type Props = NativeStackScreenProps<RootStackParamList, "Congratulations">;

const CongratulationsScreen: React.FC<Props> = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate("Olivia"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

             <HeaderCard
      title="Congratulations!"
      subtitle=" Your account has been created."
    
      showBack={false}
    />

      {/* Card */}
 <View style={styles.formCard}>
        <Text style={styles.cardText}>
          Please provide some general information before proceeding.
        </Text>

        <Button
          title="Get Started!"
          onPress={handleGetStarted}
        type="solid"
          style={styles.goldBtn}
          // textStyle={styles.goldBtnText}
        />
      </View>
    </SafeAreaView>
  );
};

export default CongratulationsScreen;
