 import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import{ Eye} from "../../../assets/icons"; 

interface ViewsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ViewsModal: React.FC<ViewsModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={{ justifyContent: "flex-end", margin: 0 }}
      propagateSwipe
      onBackdropPress={onClose}
    >
      <View style={styles.modalContainer}>
        {/* drag handle */}
        <View style={styles.underline} />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Views option */}
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.specialCircle}>
            <Eye width={28} height={28} />
          </View>

          <View style={styles.optionTextWrapper}>
            <Text style={styles.optionTitle}>Views</Text>
            <Text style={styles.optionSubtitle}>
              Times this post was seen. To learn more, visit the Help centre.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ViewsModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  underline: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 16,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  optionTextWrapper: {
    marginLeft: 12,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  optionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  specialCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
