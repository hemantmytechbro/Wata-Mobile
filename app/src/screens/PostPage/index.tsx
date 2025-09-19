




import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./style";
import {
  Home2,
  Post_ico2,
  New_ico,
  Search_ico,
  Funnel,
  Notif,
  Gallery_icon,
  Edit_ico,
  Plus1,
} from "../../../assets/icons";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { launchImageLibrary } from "react-native-image-picker";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import { RectangleIcon } from "../../../assets/icons";

type Props = NativeStackScreenProps<RootStackParamList, "PostPage">;

const PostPage: React.FC<Props> = ({ navigation }) => {
  const [sector, setSector] = useState("");
  const [project, setProject] = useState("");
  const [location, setLocation] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [delivery, setDelivery] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<string | null>(null);

  // handle file upload
  const handleUpload = async () => {
    const result = await launchImageLibrary({
      mediaType: "mixed", // photo + video
      selectionLimit: 1,
    });

    if (result.assets && result.assets.length > 0) {
      setFile(result.assets[0].uri || null);
    }
  };

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
        <Text style={styles.headerTitle}>Post</Text>
        <View style={styles.headerIcons}>
          
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <Edit_ico width={22} height={22} style={{ marginLeft: 12 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Scroll */}
      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Input label="Sector" value={sector} onChangeText={setSector}  rightElement2={<RectangleIcon width={20} height={20} />} />
        <Input label="Project name" value={project} onChangeText={setProject} />
        <Input label="Location" value={location} onChangeText={setLocation} />
        {/* <Input
          label="Desired outcomes"
          value={outcomes}
          onChangeText={setOutcomes}
           rightElement2={<Plus1 width={12} height={12} />} 
        /> */}
        <Input
 label="Desired outcomes"
          value={outcomes}
          onChangeText={setOutcomes}
  rightElement2={
    <View
      style={{
        width: 30, 
        height: 25, 
        borderRadius: 6, 
        backgroundColor: "#E5E5E5", 
        overflow: "hidden", 
        justifyContent: "center",
        alignItems: "center",
        marginRight: -7, 
        marginTop:5,
        paddingVertical:5,
      }}
    >
      <Plus1
        width={12}
        height={12}
        style={{
          marginRight: -1, 
        }}
      />
    </View>
  }
/>

        <Input
          label="Delivery time"
          value={delivery}
          onChangeText={setDelivery}
          rightElement2={<RectangleIcon width={20} height={20} />}
        />
        <Input
          label="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        
        />

        {/* Upload File */}
        
         



<View style={styles.uploadBox}>
      {file ? (
        <Image source={{ uri: file }} style={styles.uploadPreview} />
      ) : (
        <View style={styles.uploadRow}>
          {/* Left SVG Icon */}
          < Gallery_icon width={40} height={40} style={{ marginRight: 8 }} />

          {/* Text */}
         <Text style={styles.uploadText}>
  Upload file{"\n"}(Support: JPG, PNG, GIF, MOV)
</Text>

          

          {/* Right Small Button */}
          <TouchableOpacity style={styles.browseButton} onPress={handleUpload}>
            <Text style={styles.browseButtonText}>Browse</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>


        <Button title="Post now" onPress={()=>navigation.navigate("Notification")} />
      </ScrollView>

      {/* Bottom Navigator */}
      <View style={styles.bottomNav}>
         <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
            <Home2 width={28} height={28} />
         </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate("SearchTab")}>
          <Search_ico width={28} height={28} />
        </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("PostPage")}>
        <Post_ico2 width={28} height={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
          <New_ico width={28} height={28} />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default PostPage;
