


import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { styles } from "./style";

import {
  Home,
  Post_ico,
  New_ico,
  Search_ico,
  Cross,
  Repost,
  Notif,
  Logo,
  Alert
} from "../../../assets/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "Notification">;

const notificationsData = [
  {
    id: "1",
    icon: <Logo width={28} height={28}  />,
    bgColor: "#005D3B",
    message:
      "There was a login to your account @Rey129 from a new device on 30 Aug 2025. Review it now.",
  },
  {
    id: "2",
    icon: <Alert width={28} height={28} />,
    bgColor: "#B2BEC3",
    message:
      "There was an attempt to log in to your account @Rey129 on 25 Aug 2025 that seems suspicious. Review it now.",
  },
];

const Notification : React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<"all" | "mentions">("all");

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        
        <View style={[styles.specialCircle, { backgroundColor: item.bgColor }]}>
  {item.icon}
     </View>
        <Text style={styles.description}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Green Header */}
      <View style={styles.topHeader}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop",
          }}
          style={styles.headerAvatar}
        />
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
          <Cross width={22} height={18} style={{ marginLeft: 12 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabWrapper,
            activeTab === "all" && styles.activeTabWrapper,
          ]}
          onPress={() => setActiveTab("all")}
        >
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabWrapper,
            activeTab === "mentions" && styles.activeTabWrapper,
          ]}
          onPress={() => setActiveTab("mentions")}
        >
          <Text style={styles.tabText}>Mentions</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList Notifications */}
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Navigator */}
      <View style={styles.bottomNav}>
        <Home width={28} height={28} />
        <Search_ico width={28} height={28} />
        <Post_ico width={28} height={28} />
        <New_ico width={28} height={28} />
      </View>
    </SafeAreaView>
  );
};

export default Notification;
