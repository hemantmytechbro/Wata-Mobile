
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SmallButton from "../../components/SmallButton";
import {
  SearchIcon,
  RectangleIcon,
  Health,
  energy,
  agri,
  ict,
  ind,
  micro,
  water,
  Union,
  publicc,
  roads,
} from "../../../assets/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "Olivia">;

const OliviaOnboarding: React.FC<Props> = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate("LandingPage");
  };

  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState<string | null>(null);
  const [residence, setResidence] = useState("");
  const [residence2, setResidence2] = useState("");
  const [location, setLocation] = useState("");
  const [location2, setLocation2] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const goNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headingWrap}>
            <Text style={styles.headerTitle}>Hey! Olivia</Text>
            <Text style={styles.headerSubtitle}>Let’s set up your profile.</Text>
          </View>
          <View style={styles.stepBox}>
            <Text style={styles.stepText}>Step {step} of 4</Text>
          </View>
        </View>
      </View>

      {/* Keyboard handling */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.cardWrapper}>
            {/* Progress bar */}
            <View style={styles.progressBarBg}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${(step / 4) * 100}%` },
                ]}
              />
            </View>

            <ScrollView
              style={styles.card}
              contentContainerStyle={{ paddingBottom: 50 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <Text style={styles.sectionTitle}>How old are you?</Text>
                  <View style={styles.divider} />
                  <View style={styles.ageGrid}>
                    {[
                      { label: "18–25", sub: "Young Adult" },
                      { label: "26–35", sub: "Early Career" },
                      { label: "36–45", sub: "Mid Career" },
                      { label: "46–55", sub: "Senior Professional" },
                      { label: "56–65", sub: "Pre-retirement" },
                      { label: "65+", sub: "Retired" },
                    ].map((item, i) => (
                      <SmallButton
                        key={i}
                        title={item.label}
                        subtitle={item.sub}
                        selected={ageGroup === item.label}
                        onPress={() => setAgeGroup(item.label)}
                      />
                    ))}
                  </View>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <Text style={styles.sectionTitle}>Where do you reside?</Text>
                  <View style={styles.divider} />
                  <Input
                    placeholder="Where do you reside?"
                    value={residence}
                    onChangeText={setResidence}
                    rightElement={<RectangleIcon width={20} height={20} />}
                  />
                  <Input
                    placeholder="Another city"
                    value={residence2}
                    onChangeText={setResidence2}
                    rightElement={<SearchIcon width={20} height={20} />}
                  />
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <Text style={styles.sectionTitle}>Locations of interest</Text>
                  <View style={styles.divider} />
                  <Input
                    placeholder="Type location"
                    value={location}
                    onChangeText={setLocation}
                    rightElement={<SearchIcon width={20} height={20} />}
                  />
                  <Input
                    placeholder="Another location"
                    value={location2}
                    onChangeText={setLocation2}
                    rightElement={<RectangleIcon width={20} height={20} />}
                  />
                </>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <>
                  <Text style={styles.sectionTitle}>You’re passionate about</Text>
                  <View style={styles.divider} />
                  <View style={styles.ageGrid}>
                    {[
                      { title: "Health", subtitle: "Care", icon: Health },
                      { title: "Education", subtitle: "and Sports", icon: Union },
                      { title: "Water", subtitle: "Environment", icon: water },
                      { title: "Agriculture", subtitle: "Farming", icon: agri },
                      { title: "Industry", subtitle: "Sector", icon: ind },
                      { title: "ICT", subtitle: "Technology", icon: ict },
                      {
                        title: "microfinance",
                        subtitle: "Growth",
                        icon: micro,
                        splitTitle: ["micro", "finance"],
                      },
                      { title: "Energy", subtitle: "Cause Change", icon: energy },
                      { title: "Public", subtitle: "Sector", icon: publicc },
                      { title: "Roads", subtitle: "Transport", icon: roads },
                    ].map((item, i) => (
                      <SmallButton
                        key={i}
                        title={item.title}
                        subtitle={item.subtitle}
                        leftElement={<item.icon width={20} height={20} />}
                        selected={interests.includes(item.title)}
                        onPress={() => toggleInterest(item.title)}
                      />
                    ))}
                  </View>
                </>
              )}

              {/* Button */}
              <Button
                title={step < 4 ? "Next" : "Get Started"}
                onPress={step < 4 ? goNext : handleGetStarted}
                style={styles.nextBtn}
              />
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OliviaOnboarding;
