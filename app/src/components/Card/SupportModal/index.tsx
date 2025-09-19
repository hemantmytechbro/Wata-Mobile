




import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./style";
import Button from "../../../components/Button";
import { colors } from "../../../theme";

interface SupportModalProps {
  isVisible: boolean;
  onClose: () => void;
  
}

const SupportModal: React.FC<SupportModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
  isVisible={isVisible}
  onBackdropPress={onClose}
  onBackButtonPress={() => {}}  // disable back key closing
  style={{ justifyContent: "flex-end", margin: 0 }}
  propagateSwipe={true}
>
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : undefined}
    style={{ flex: 1, justifyContent: "flex-end" }}
  >
 <View style={styles.modalOverlay}>
        <View style={styles.modalBox2}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} 
        >
          {/* drag handle */}
          <View style={styles.underline2} />

          {/* Modal Title */}
          <View style={styles.modalHeader2}>
            <Text style={styles.modalTitle2}>Support</Text>
          </View>

          <View style={styles.modalBox}>
            {/* Green Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Demand for better public transport
              </Text>
            </View>

            {/* Grey progress block */}
            <View style={styles.modalProgressBlock}>
             


              <View >
  {/* Target row */}
  <View style={styles.rowBetween}>
    <Text style={styles.modalLine}>Target Amount</Text>
    <Text style={styles.modalLine2}>$2500.00</Text>
  </View>

  {/* Divider line */}
  <View style={styles.divider} />

  {/* Raised row */}
  <View style={styles.rowBetween}>
    <Text style={styles.modalLine}>Raised so far</Text>
    <Text style={[styles.modalLine2, { color: colors.primary }]}>$1800.00</Text>
  </View>
</View>


             <View style={styles.progressWrapper}>
  {/* First line */}
  <View style={styles.rowBetween}>
    <Text style={styles.modalLine}>Progress</Text>
    <Text style={styles.modalLine}>83%</Text>
  </View>

  {/* Progress bar */}
  <View style={styles.progressBg}>
    <View style={[styles.progressFill, { width: "83%" }]} />
  </View>

  {/* Second line */}
  <View style={styles.rowBetween}>
    <Text style={styles.modalLine}>Remaining</Text>
    <Text style={styles.modalLine2}>$550.00</Text>
  </View>
</View>



              <Text style={styles.modalSubtitle}>
                Contribution amount (USD)
              </Text>
              <TextInput
              
                keyboardType="numeric"
                style={styles.input}
              />

              <View style={styles.quickBtns}>
                {["25", "50", "100"].map((val) => (
                  <TouchableOpacity key={val} style={styles.quickBtn}>
                    <Text style={styles.quickBtnText}>${val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Continue Button */}
            <Button
              title="Continue to Payment"
              type="solid"
              style={styles.paymentBtn}
              
              onPress={onClose}
            />
          </View>
          </ScrollView>
        </View>
      </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default SupportModal;




