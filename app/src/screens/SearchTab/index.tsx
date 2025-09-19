 import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "./style";
import {Home,Post_ico,New_ico,Search_ico,Funnel,Notif,Share,Votee,Repost,Vieww,Comments,Whatsapp,Facebook,Eclipse,Sharee,Link,Pen,Home2,Eye,Search2
} from "../../../assets/icons";
import PostCard from "../../components/Card/PostCard";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "SearchTab">;
const tabs = ["For You", "Trending", "News", "Sports", "Business"];

const tempData = [
  {
    id: "1",
    user: "Léo Grondin",
    avatar: "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=Ye9wVmrUcg3N6-8j5HS-TJYxdtDfDUbKx5wgPFK_WnM=",
    title: "Bridge collapse puts Uganda link.",
    description:
      "Uganda, Aug 17: For the third time, a significant portion of the under-construction Uganda-North Bridge collapsed on Saturday.",
    image:
      "https://plus.unsplash.com/premium_photo-1675122317265-9cdd93e6b92d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FtcGFsYXxlbnwwfHwwfHx8MA%3D%3D",
    comments: 189,
    views: 1200,
    votes: 620,
    shares: 160000,
  },
  {
    id: "2",
    user: "Éloïse Boulanger",
    avatar: "https://media.istockphoto.com/id/2165425306/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=laIE4kJ8o55lKWDDjVwDbMjMBpDc5JhfGRBCBwzemv8=",
    title: "Patch up Kamuli road",
    description: "Repair works are in progress on Kamuli road.",
    image:
      "https://cdn.prod.website-files.com/5fa4da31b6c3a45d2cfd2d5d/6312333ce58b0d9024d156cf_stijn-kleerebezem-bsk8f6BVSHc-unsplash.jpg",
    comments: 200,
    views: 250,
    votes: 120,
    shares: 300,
  },
  {
    id: "3",
    user: "Léo Grondin",
    avatar: "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=Ye9wVmrUcg3N6-8j5HS-TJYxdtDfDUbKx5wgPFK_WnM=",
    title: "Bridge collapse puts Uganda link.",
    description:
      "Uganda, Aug 17: For the third time, a significant portion of the under-construction Uganda-North Bridge collapsed on Saturday.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJUm47hJqzDoG0FF3BgTC2b6dLqiQcv4WtQ&s",
    comments: 189,
    views: 1200,
    votes: 620,
    shares: 160000,
  },
  {
    id: "4",
    user: "Éloïse Boulanger",
    avatar: "https://media.istockphoto.com/id/2165425306/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=laIE4kJ8o55lKWDDjVwDbMjMBpDc5JhfGRBCBwzemv8=",
    title: "Patch up Kamuli road",
    description: "Repair works are in progress on Kamuli road.",
    image:
      "https://images.unsplash.com/photo-1696860682458-cc6eb37409c8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    comments: 920,
    views: 250,
    votes: 120,
    shares: 300,
  },
  {
    id: "5",
    user: "Éloïse Boulanger",
    avatar: "https://media.istockphoto.com/id/2165425306/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=laIE4kJ8o55lKWDDjVwDbMjMBpDc5JhfGRBCBwzemv8=",
    title: "Patch up Kamuli road",
    description: "Repair works are in progress on Kamuli road.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FpkOxKEVWveNOFwxwQJkh_uTZ4p7C2a5fA&s",
    comments: 320,
    views: 250,
    votes: 720,
    shares: 300,
      repost:300, 
  },
  {
    id: "6",
    user: "Léo Grondin",
    avatar: "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=Ye9wVmrUcg3N6-8j5HS-TJYxdtDfDUbKx5wgPFK_WnM=",
    title: "Bridge collapse puts Uganda link.",
    description:
      "Uganda, Aug 17: For the third time, a significant portion of the under-construction Uganda-North Bridge collapsed on Saturday.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJUm47hJqzDoG0FF3BgTC2b6dLqiQcv4WtQ&s",
    comments: 189,
    views: 1200,
    votes: 620,
    shares: 160000,
      repost:300, 
  },
  {
    id: "7",
    user: "Léo Grondin",
    avatar: "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=Ye9wVmrUcg3N6-8j5HS-TJYxdtDfDUbKx5wgPFK_WnM=",
    title: "Bridge collapse puts Uganda link.",
    description:
      "Uganda, Aug 17: For the third time, a significant portion of the under-construction Uganda-North Bridge collapsed on Saturday.",
    image:
      "https://plus.unsplash.com/premium_photo-1675122317265-9cdd93e6b92d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FtcGFsYXxlbnwwfHwwfHx8MA%3D%3D",
    comments: 189,
    views: 1200,
    votes: 620,
    shares: 160000,
      repost:300, 
  },
];

const SearchTab  : React.FC<Props> = ({ navigation }) => {
   const [activeTab, setActiveTab] = useState<string>("For You");
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
         <TextInput
          placeholder="Search..."
          placeholderTextColor="#ccc"
          style={styles.searchInput}
        />
      </View>

      {/* Tabs (For You | Following) */}
      
      <View style={styles.tabsRow}>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.tabsContainer}
  >
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        style={[
          styles.tabWrapper,
          activeTab === tab && styles.activeTabWrapper,
        ]}
        onPress={() => setActiveTab(tab)}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === tab && styles.activeTabText,
          ]}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>

      {/* Feed */}
    <FlatList
        data={tempData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigator */}
      <View style={styles.bottomNav}>

  <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
              <Home2 width={28} height={28} />
           </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("SearchTab")}>
  <Search2 width={28} height={28} />
  </TouchableOpacity>


  <TouchableOpacity onPress={() => navigation.navigate("PostPage")}>
    <Post_ico width={28} height={28} />
  </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
        <New_ico width={28} height={28} />
      </TouchableOpacity>
  
</View>

    </SafeAreaView>
  );
};

export default SearchTab;
