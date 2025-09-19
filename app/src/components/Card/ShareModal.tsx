 import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Modal from "react-native-modal";

interface ShareModalProps {
  isVisible: boolean;
  onClose: () => void;
  data: { id: string; name: string; icon: any; special?: boolean }[];
}

const ShareModal: React.FC<ShareModalProps> = ({ isVisible, onClose, data }) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      style={{ justifyContent: "flex-end", margin: 0 }}
      propagateSwipe={true}
    >
      <View style={styles.modalContainerShare}>
        <View style={styles.underlineShare} />
        <Text style={styles.modalTitleShare}>Share</Text>
        <View style={styles.dividerShare} />

        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.shareOption}>
              {item.special ? (
                <View style={styles.specialCircle}>
                  <item.icon width={28} height={28} />
                </View>
              ) : (
                <item.icon width={50} height={50} />
              )}
              <Text style={styles.shareLabel}>{item.name}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4 }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainerShare: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: "50%",
  },
  underlineShare: {
    height: 6,
    width: "30%",
    backgroundColor: "#ccc",
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 12,
  },
  modalTitleShare: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  dividerShare: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },
  shareOption: {
    width: 80,
    alignItems: "center",
    marginRight: 16,
    paddingVertical: 12,
  },
  shareLabel: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    marginTop: 6,
    width: 70,
  },
  specialCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ShareModal;
