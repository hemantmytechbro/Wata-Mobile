


import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { commentsData, votesData } from "../../data/posts";
import { Facebook, Eclipse, Sharee, Link } from "../../../assets/icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import { useNavigation } from "@react-navigation/native";
import { colors,fonts } from "../../theme";

// icons
import { Comments, Vieww, Repost, Votee, Share, Whatsapp } from "../../../assets/icons";

// modals
import CommentsModal from "./CommentsModel";
import ShareModal from "./ShareModal";
import VoteeModal from "./VoteeModal";
import ViewsModal from "./ViewsModal";
import RepostModal from "./RepostModal";

const { width, height } = Dimensions.get("window");

type DemandPageNav = NativeStackNavigationProp<RootStackParamList, "DemandPage">;

interface PostCardProps {
  item: {
    id: string;
    user: string;
    avatar: string;
    title: string;
    description: string;
    image: string;
    comments: number;
    views: number;
    votes: number;
    shares: number;
    repost?: number; 
  };
  showHeader?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  showImage?: boolean;
  showActions?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  item,
  showHeader = true,
  showTitle = true,
  showDescription = true,
  showImage = true,
  showActions = true,
}) => {
  const navigation = useNavigation<DemandPageNav>();
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <View style={styles.card}>
      {/* Header */}
      {showHeader && (
        <View style={styles.cardHeader}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.username}>{item.user}</Text>
              {showTitle && <Text style={styles.title}>{item.title}</Text>}

          </View>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 28,marginBottom:6 }}>⋮</Text>
          </TouchableOpacity>
        </View>
      )}

    
      {/* Description */}
      {showDescription && item?.description ? (
        <Text style={styles.description}>{item.description}</Text>
      ) : null}

      {/* Image */}
      {showImage && item?.image ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("DemandPage", { item })}
        >
          <Image source={{ uri: item.image }} style={styles.postImage} />
        </TouchableOpacity>
      ) : null}

      {/* Actions */}
      {showActions && (
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalType("comments")}
          >
            <Comments width={20} height={22} />
          
            <Text style={styles.actionText}>{item?.comments ?? 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalType("views")}
          >
            <Vieww width={20} height={20} />
           
            <Text style={styles.actionText}>{item?.views ?? 0}</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalType("repost")}
          >
            <Repost width={22} height={22} />
            <Text style={styles.actionText}>{item?.repost ?? 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalType("votes")}
          >
            <Votee width={20} height={20} />
            <Text style={styles.actionText}>{item?.votes ?? 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalType("share")}
          >
            <Share width={20} height={20} />
            <Text style={styles.actionText}>{item?.shares ?? 0}</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modals */}
      <CommentsModal
        isVisible={modalType === "comments"}
        onClose={() => setModalType(null)}
        initialComments={commentsData}
      />

      <VoteeModal
        isVisible={modalType === "votes"}
        onClose={() => setModalType(null)}
        votesData={votesData}
      />

      <ShareModal
        isVisible={modalType === "share"}
        onClose={() => setModalType(null)}
        data={[
          { id: "1", name: "Copy Link", icon: Share, special: true },
          { id: "2", name: "WhatsApp", icon: Whatsapp },
          { id: "15", name: "Copy Link", icon: Link, special: true },
          { id: "3", name: "WhatsApp", icon: Whatsapp },
          { id: "4", name: "Instagram", icon: Facebook },
          { id: "5", name: "Twitter", icon: Eclipse },
          { id: "6", name: "Facebook", icon: Facebook },
          { id: "7", name: "Telegram", icon: Eclipse },
          { id: "8", name: "Messages", icon: Whatsapp },
          { id: "9", name: "Copy Link", icon: Whatsapp },
          { id: "10", name: "Share via", icon: Sharee, special: true },
          { id: "11", name: "Copy Link", icon: Link, special: true },
          { id: "12", name: "WhatsApp", icon: Whatsapp },
          { id: "13", name: "Instagram", icon: Facebook },
          { id: "14", name: "Twitter", icon: Eclipse },
        ]}
      />

      <ViewsModal
        isVisible={modalType === "views"}
        onClose={() => setModalType(null)}
      />

      <RepostModal
        isVisible={modalType === "repost"}
        onClose={() => setModalType(null)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: "4%",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2%",
    gap: 10,
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
  },
  username: {
    fontFamily:fonts.otsemiBold,
    fontWeight: "bold",
    fontSize: width * 0.04,
    color:colors.primary,
  },
  title: {
    fontFamily:fonts.otmedium,
    fontSize: width * 0.033,
    marginBottom: 4,
    fontWeight: "100",
    color:colors.titleb,
  },
  description: {
    fontFamily:fonts.otregular,
    fontSize: width * 0.035,
    marginBottom: "2%",
   color:colors.titleb,
  },
  postImage: {
    width: "100%",
    height: height * 0.25,
    borderRadius: 10,
    marginVertical: "2%",
  },
  followBtn: {
    paddingHorizontal: "3%",
    paddingVertical: "2%",
    backgroundColor: "#b7d5c8ff",
    borderRadius: 12,
  },
  followText: {
    color: colors.primary,
    fontSize: width * 0.035,
    fontFamily:fonts.otsemiBold,
    fontWeight:"bold",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  actionText: {
    fontSize: width * 0.035,
    marginLeft: 4,
  },
});

export default PostCard;
