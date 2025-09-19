 import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

import { Repost,Pen} from "../../../assets/icons";

interface RepostModalProps {
  isVisible: boolean;
  onClose: () => void;
  onRepostWithThoughts?: () => void;
  onRepost?: () => void;
}

const RepostModal: React.FC<RepostModalProps> = ({
  isVisible,
  onClose,
  onRepostWithThoughts,
  onRepost,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={{ justifyContent: "flex-end", margin: 0 }}
      propagateSwipe
      onBackdropPress={onClose}
    >
      <View style={styles.modalContainerRepost}>
        {/* Drag handle */}
        <View style={styles.underlineRepost} />

        {/* Option 1 */}
        <TouchableOpacity
          style={styles.optionItemRepost}
          onPress={onRepostWithThoughts}
        >
          <View style={styles.specialCircle}>
            <Pen width={28} height={28} />
          </View>
          <View style={styles.optionTextWrapperRepost}>
            <Text style={styles.optionTitleRepost}>Repost with your thoughts</Text>
            <Text style={styles.optionSubtitleRepost}>
              Create a new post with the original attached
            </Text>
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRepost} />

        {/* Option 2 */}
        <TouchableOpacity style={styles.optionItemRepost} onPress={onRepost}>
          <View style={styles.specialCircle}>
            <Repost width={28} height={28} />
          </View>
          <View style={styles.optionTextWrapperRepost}>
            <Text style={styles.optionTitleRepost}>Repost</Text>
            <Text style={styles.optionSubtitleRepost}>
              Instantly bring this post to others’ feeds
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default RepostModal;

const styles = StyleSheet.create({
  modalContainerRepost: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  underlineRepost: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 16,
  },
  optionItemRepost: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  optionTextWrapperRepost: {
    marginLeft: 12,
    flex: 1,
  },
  optionTitleRepost: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  optionSubtitleRepost: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  dividerRepost: {
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
