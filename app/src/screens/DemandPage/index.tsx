

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  
  TextInput,
} from "react-native";

import { styles } from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import { Union } from "../../../assets/icons";


import PostCard from "../../components/Card/PostCard";
import Button from "../../components/Button";
import { Back2,Loc3,Dollar,Loc2 } from "../../../assets/icons";
import SupportModal from "../../components/Card/SupportModal";

type Props = NativeStackScreenProps<RootStackParamList, "DemandPage">;

const DemandPage: React.FC<Props> = ({ navigation, route }) => {
  const { item } = route.params || {};
  
    const [modalType, setModalType] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.topHeader}>
       
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back2 width={24} height={24} />
        </TouchableOpacity>

       
        <Text style={styles.headerTitle} numberOfLines={2} ellipsizeMode="tail">
          {item?.title || "Demand"}
        </Text>


           <Button
            title="Support"
            type="outlined"
            style={styles.halfBtnOutlined2}
              onPress={() => setModalType("support")}
          />
        
        
      </View>

     
      <View style={styles.tabsRow}>
         
        <TouchableOpacity style={styles.tabWrapper}>
            <Loc2 width={16} height={16} style={{ marginRight: 6 }} />
          <Text style={styles.tabText}>Kampala, Uganda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabWrapper}>
          <Text style={styles.tabText1}>106 votes</Text>
        </TouchableOpacity>
      </View>


      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        
      
        <PostCard
          item={item}
          showHeader={false}
          showTitle={false}
          showDescription={true}
          showImage={true}
          showActions={true}
        />
  <View style={styles.divider} />
        
        <View style={styles.section}>
          
              
          <Text style={styles.sectionTitle}>Desired outcomes</Text>
           <View style={[styles.divider, { marginLeft: 35, width: "100%" }]} />
        
          <View style={styles.outcomeRow}>
  {/* Icon in circle */}
  <View style={[styles.outcomeIconWrapper, { backgroundColor: "#beedfbff" }]}>
    <Loc3 width={18} height={18} />
  </View>
  <Text style={styles.outcomeText}>Secure public stations</Text>
</View>
<View style={[styles.divider, { marginLeft: 35, width: "100%" }]} />
<View style={styles.outcomeRow}>
  <View style={[styles.outcomeIconWrapper, { backgroundColor: "#f9e5bfff" }]}>
    <Dollar width={18} height={18} />
  </View>
  <Text style={styles.outcomeText}>
    Raise $1800.00 for initial support
  </Text>
</View>



          
            <View style={[styles.divider, { marginLeft: 35, width: "100%" }]} />

          <View style={styles.sectionHeaderRow}>
  <Text style={styles.sectionTitle2}>Financial support</Text>
  <Text style={styles.remaining}>Remaining $550.00</Text>
</View>

        </View>
          <View style={styles.financialSection}>
            <Text style={styles.raisedText}>$1250.00</Text>
  <View style={styles.progressBg}>
    <View style={[styles.progressFill, { width: "70%" }]} />
  </View>
  
</View>

        <View style={styles.buttonsRow}>
          <Button
            title="Boost"
            type="outlined"
            style={styles.halfBtnOutlined}
            onPress={() => navigation.navigate("Phone")}
          />
          <Button
            title="Vote"
            type="solid"
            style={styles.halfBtnSolid}
            onPress={() => {}}
          />
        </View>
      
      </ScrollView>

<SupportModal
  
   isVisible={modalType === "support"}
        onClose={() => setModalType(null)}
/>

    </SafeAreaView>
  );
};

export default DemandPage;







