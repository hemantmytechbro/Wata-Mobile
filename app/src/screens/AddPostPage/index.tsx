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
  Home,
  Post_ico,
  New_ico2,
  Search_ico,
  Funnel,
  Notif,
  Gallery_icon,
  Edit_ico,
  Home2,
  RectangleIcon,
  Plus1
} from "../../../assets/icons";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { launchImageLibrary } from "react-native-image-picker";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "AddPost">;

const AddPost: React.FC<Props> = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou");
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
      mediaType: "mixed", 
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
       
         <View style={{ alignItems: "center" }}>
    <Text style={styles.headerTitle}>What do you</Text>
    <Text style={styles.headerTitle2}>Want to create?</Text>
  </View>
      </View>

      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabWrapper,
            activeTab === "foryou" && styles.activeTabWrapper,
          ]}
          onPress={() => setActiveTab("foryou")}
        >
          <Text style={styles.tabText}>Project</Text>
         
        </TouchableOpacity>
      
        <TouchableOpacity
          style={[
            styles.tabWrapper,
            activeTab === "following" && styles.activeTabWrapper,
          ]}
          onPress={() => setActiveTab("following")}
        >
          <Text style={styles.tabText}>Petition</Text>
          
        </TouchableOpacity>
      </View>
      

      {/* Form Scroll */}
      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        {activeTab==="foryou"  ?(
            <>
            
             <Input label="Sector" value={sector} onChangeText={setSector}  rightElement2={<RectangleIcon width={20} height={20} />}/>
        <Input label="Project name" value={project} onChangeText={setProject} />
        <Input label="Location" value={location} onChangeText={setLocation} />
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
  label={
    <Text>
      Financial Support <Text style={{ color: "#C30A00" }}>(optional)</Text>
    </Text>
  }
  value={delivery}
  onChangeText={setDelivery}
/>
        <Input
          label="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        
        /> 
            </>
        ):(
<>
    <Input label="Sector" value={sector} onChangeText={setSector}  rightElement2={<RectangleIcon width={20} height={20} />}/>
        <Input label="Petition name" value={project} onChangeText={setProject} />
        
        <Input
          label="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        
        /> 
          <Input
  label={
    <Text>
      Crowd Funding <Text style={{ color: "#C30A00" }}>(optional)</Text>
    </Text>
  }
  value={delivery}
  onChangeText={setDelivery}
/>

</>

        )

        }
       

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


        <Button title="Post now" onPress={()=>navigation.navigate("Payment")} />
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
                <Post_ico width={28} height={28} />
                </TouchableOpacity>
        



        
        <New_ico2 width={28} height={28} />
      </View>
    </SafeAreaView>
  );
};

export default AddPost
