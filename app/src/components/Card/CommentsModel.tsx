
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

type Reply = {
  id: string;
  name: string;
  text: string;
  time: string;
};

type Comment = {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  time: string;
  replies: Reply[];

};

interface CommentsModalProps {
  isVisible: boolean;
  onClose: () => void;
  initialComments?: Comment[];

};
const CommentsModal: React.FC<CommentsModalProps> = ({
  isVisible,
  onClose,
  initialComments = [],
}) => {
  const [commentsData, setCommentsData] = useState<Comment[]>(initialComments);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [newComment, setNewComment] = useState("");

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
            <Text style={styles.modalTitle}>Comments</Text>
          </View>

          {/* Comments List */}
          <FlatList
            data={commentsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.commentRow}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />

                <View style={{ flex: 1 }}>
                  <Text style={styles.username}>{item.name}</Text>
                  <Text style={styles.commentText}>{item.comment}</Text>

                  {/* Replies */}
                  {item.replies?.map((rep) => (
                    <View key={rep.id} style={{ paddingLeft: 30, marginTop: 4 }}>
                      <Text style={{ fontWeight: "500" }}>{rep.name}:</Text>
                      <Text>{rep.text}</Text>
                    </View>
                  ))}

                  {/* Actions */}
                  <View style={styles.commentActions}>
                    <Text style={styles.commentTime}>{item.time}</Text>
                    <TouchableOpacity onPress={() => setReplyingTo(item.id)}>
                      <Text style={styles.replyBtn}>Reply</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Reply Input */}
                  {replyingTo === item.id && (
                    <View style={styles.replyInputRow}>
                      <TextInput
                        value={replyText}
                        onChangeText={setReplyText}
                        placeholder="Write a reply..."
                        placeholderTextColor="#888"
                        style={[styles.input, { flex: 1 }]}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          if (!replyText.trim()) return;
                          setCommentsData((prev) =>
                            prev.map((c) =>
                              c.id === item.id
                                ? {
                                    ...c,
                                    replies: [
                                      ...c.replies,
                                      {
                                        id: `${item.id}-${c.replies.length}`,
                                        name: "You",
                                        text: replyText,
                                        time: "Now",
                                      },
                                    ],
                                  }
                                : c
                            )
                          );
                          setReplyText("");
                          setReplyingTo(null);
                        }}
                      >
                        <Text style={styles.sendBtn}>Send</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 100, flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            keyboardShouldPersistTaps="handled"
          />

          {/* Main Comment Input */}
          <View style={styles.commentInputRow}>
            <Image
              source={{ uri: "https://i.pravatar.cc/100?img=5" }}
              style={styles.avatarSmall}
            />
            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor="#888"
              style={styles.input}
              value={newComment}
              onChangeText={setNewComment}
            />
            <TouchableOpacity
              onPress={() => {
                if (!newComment.trim()) return;
                setCommentsData((prev) => [
                  ...prev,
                  {
                    id: `${prev.length + 1}`,
                    name: "You",
                    avatar: "https://i.pravatar.cc/100?img=5",
                    comment: newComment,
                    time: "Now",
                    replies: [],
                  },
                ]);
                setNewComment("");
              }}
            >
              <Text style={styles.sendBtn}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: { flex: 1, justifyContent: "flex-end" },
  modalContainer: {
    maxHeight: "80%",
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  underline: {
    height: 6,
    width: "30%",
    backgroundColor: "#ccc",
    marginBottom: 16,
    borderRadius: 50,
    alignSelf: "center",
  },
  modalHeader: { justifyContent: "center", alignItems: "center", marginBottom: 10 },
  modalTitle: { fontSize: 18, fontWeight: "600" },

  commentRow: { flexDirection: "row", marginBottom: 15 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontSize: 14, fontWeight: "600", color: "#333" },
  commentText: { fontSize: 14, color: "#555", marginVertical: 2 },
  commentActions: { flexDirection: "row", alignItems: "center", gap: 15 },
  commentTime: { fontSize: 12, color: "#999" },
  replyBtn: { fontSize: 12, fontWeight: "500", color: "#0a5735" },

  replyInputRow: { flexDirection: "row", marginTop: 8, alignItems: "center" },

  commentInputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  avatarSmall: { width: 32, height: 32, borderRadius: 16, marginRight: 10 },
  input: { flex: 1, fontSize: 14, color: "#333", paddingVertical: 6 },
  sendBtn: { fontSize: 14, fontWeight: "600", color: "#0a5735" },
});

export default CommentsModal;
