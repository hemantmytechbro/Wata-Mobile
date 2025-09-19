//  import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,
// } from "react-native";
// import { styles } from "./style";
// import {
//   Home,
//   Post_ico,
//   New_ico,
//   Search_ico,
//   Funnel,
//   Notif,
// } from "../../../assets/icons";
// import { AdBanner } from "../../../utilities/AdManager";

// import PostCard from "../../components/Card/PostCard";

// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../../../navigations/baseNavigation";

// // temp data (replace with API later)
// const tempData = [
//   {
//     id: "1",
//     user: "John Doe",
//     avatar: "https://i.pravatar.cc/100?img=1",
//     title: "Healthy Living",
//     description: "Yoga and meditation for better focus.",
//     image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
//     comments: 12,
//     views: 200,
//     votes: 40,
//     shares: 5,
//   },
//   {
//     id: "2",
//     user: "Léo Grondin",
//     avatar: "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.jpg?s=2048x2048&w=is&k=20&c=Ye9wVmrUcg3N6-8j5HS-TJYxdtDfDUbKx5wgPFK_WnM=",
//     title: "Bridge collapse puts Uganda link.",
//     description:
//       "Uganda, Aug 17: For the third time, a significant portion of the under-construction Uganda-North Bridge collapsed on Saturday.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1675122317265-9cdd93e6b92d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FtcGFsYXxlbnwwfHwwfHx8MA%3D%3D",
//     comments: 189,
//     views: 1200,
//     votes: 620,
//     shares: 160000,
//   },
// ];

// type Props = NativeStackScreenProps<RootStackParamList, "Payment">;

// const Payment: React.FC<Props> = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou");

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Top Green Header */}
//       <View style={styles.topHeader}>
//         <Image
//           source={{
//             uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop",
//           }}
//           style={styles.headerAvatar}
//         />
//         <Text style={styles.headerTitle}>Home</Text>
//         <View style={styles.headerIcons}>
//           <Funnel width={22} height={18} />
//           <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
//             <Notif width={22} height={18} style={{ marginLeft: 12 }} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Tabs (For You | Following) */}
//       <View style={styles.tabsRow}>
//         <TouchableOpacity
//           style={[
//             styles.tabWrapper,
//             activeTab === "foryou" && styles.activeTabWrapper,
//           ]}
//           onPress={() => setActiveTab("foryou")}
//         >
//           <Text style={styles.tabText}>For You</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[
//             styles.tabWrapper,
//             activeTab === "following" && styles.activeTabWrapper,
//           ]}
//           onPress={() => setActiveTab("following")}
//         >
//           <Text style={styles.tabText}>Following</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Feed */}
//       <FlatList
//         data={tempData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <PostCard item={item} />}
//         contentContainerStyle={styles.listContainer}
//         showsVerticalScrollIndicator={false}
//         ListFooterComponent={<AdBanner />} 
//       />



//       <AdBanner />  {/* Banner Ad placed here */}

//       {/* Bottom Navigator */}
//       <View style={styles.bottomNav}>
//         <Home width={28} height={28} />
//         <TouchableOpacity onPress={() => navigation.navigate("SearchTab")}>
//           <Search_ico width={28} height={28} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("PostPage")}>
//           <Post_ico width={28} height={28} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
//           <New_ico width={28} height={28} />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { styles } from "./style";
import {
  Home,
  Post_ico,
  New_ico,
  Search_ico,
  Funnel,
  Notif,
} from "../../../assets/icons";

import PostCard from "../../components/Card/PostCard";
import { AdBanner, showInterstitialAd } from "../../../utilities/AdManager";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";

// temp data (replace with API later)
const tempData = [
  {
    id: "1",
    user: "John Doe",
    avatar: "https://i.pravatar.cc/100?img=1",
    title: "Healthy Living",
    description: "Yoga and meditation for better focus.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    comments: 12,
    views: 200,
    votes: 40,
    shares: 5,
  },
  {
    id: "2",
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
];

type Props = NativeStackScreenProps<RootStackParamList, "Payment">;

const Payment: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou");

  return (
   <SafeAreaView style={styles.container}>
  {/* Top Header */}
  <View style={styles.topHeader}>
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop",
      }}
      style={styles.headerAvatar}
    />
    <Text style={styles.headerTitle}>Home</Text>
    <View style={styles.headerIcons}>
      <Funnel width={22} height={18} />
      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <Notif width={22} height={18} style={{ marginLeft: 12 }} />
      </TouchableOpacity>
    </View>
  </View>

  {/* Tabs */}
  <View style={styles.tabsRow}>
    <TouchableOpacity
      style={[styles.tabWrapper, activeTab === "foryou" && styles.activeTabWrapper]}
      onPress={() => setActiveTab("foryou")}
    >
      <Text style={styles.tabText}>For You</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tabWrapper, activeTab === "following" && styles.activeTabWrapper]}
      onPress={() => setActiveTab("following")}
    >
      <Text style={styles.tabText}>Following</Text>
    </TouchableOpacity>
  </View>

  {/* Feed + Banner in flex container */}
  <View style={{ flex: 1 }}>
    <FlatList
      data={tempData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard item={item} />}
      contentContainerStyle={{ paddingBottom: 200 }} // leave space for floating ad
      showsVerticalScrollIndicator={false}
        ListFooterComponent={
    <View style={{ padding: 10 }}>
      <Button title="Show Interstitial Ad" onPress={() => showInterstitialAd()} />
    </View>
  }
    />

    {/* Floating Banner Ad */}
    <View
      style={{
        position: "absolute",
        bottom: 80, // distance from bottom nav
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 999, // ensure it's on top
      }}
    >
      <AdBanner />
    </View>

    {/* Optional: Interstitial Button */}
    <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 10 }}>
      <Button title="Show Interstitial Ad" onPress={() => showInterstitialAd()} />
    </View>
  </View>

  {/* Bottom Navigation */}
  <View style={[styles.bottomNav, { position: "absolute", bottom: 0, left: 0, right: 0 }]}>
    <Home width={28} height={28} />
    <TouchableOpacity onPress={() => navigation.navigate("SearchTab")}>
      <Search_ico width={28} height={28} />
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

export default Payment;
