
import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Modal from "react-native-modal";


interface VoteItem {
  name: string;
  time: string;
  avatar: string;
}

interface VotesModalProps {
  isVisible: boolean;
  onClose: () => void;
  votesData: VoteItem[];
}

const VoteeModal: React.FC<VotesModalProps> = ({ isVisible, onClose, votesData }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={{ justifyContent: "flex-end", margin: 0 }}
      propagateSwipe
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.underline} />
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Votes ({votesData.length})</Text>
          </View>

          {/* List */}
          <FlatList
            data={votesData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.voteRow}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.username}>{item.name}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.status}>Voted</Text>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 40, flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: { flex: 1, justifyContent: "flex-end" },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "70%",
    paddingBottom: 10,
  },
  underline: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
  modalHeader: { alignItems: "center", paddingBottom: 10 },
  modalTitle: { fontSize: 18, fontWeight: "600" },
  voteRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  username: { fontSize: 16, fontWeight: "600", color: "#06492C" },
  time: { fontSize: 13, color: "#666" },
  status: { fontSize: 14, fontWeight: "500", color: "#0B7D3E" },
});

export default VoteeModal;
