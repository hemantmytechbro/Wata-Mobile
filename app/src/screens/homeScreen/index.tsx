


import React, { useRef, useState } from "react";
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import styles from "./style";
import { Bg, Girl, Assistant, Men, YellowCircle } from "../../../assets/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigations/baseNavigation";
import Button from "../../components/Button";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    topText: "The app that connects people\nwith needs to people that can help.",
    title: "Start a petition",
    desc: "to get support for your cause.",
    image: (
      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <Girl
          width={"110%"}
          height={"96%"}
          preserveAspectRatio="xMidYMid meet"
          style={{ marginTop: 6, marginLeft: 37 }}
        />
      </View>
    ),
  },
  {
    id: "2",
    topText: "Be the eyes and ears on the ground.",
    title: "Share feedback",
    desc: "to help improve country project delivery.",
    image: <Men width={"100%"} height={"97%"} preserveAspectRatio="xMidYMid meet" style={{ marginBottom: 21, marginRight: 7 }} />,
  },
  {
    id: "3",
    topText: "Let your vote count for something.",
    title: "Vote on posts",
    desc: "to push for action.",
    image: <Assistant width={"100%"} height={"100%"} preserveAspectRatio="xMidYMid meet" />,
    hasButton: true,
  },
];

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleHorizontalScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleHorizontalScroll}
        scrollEventThrottle={16}
      >
        {slides.map((item) => (
          <ScrollView
            key={item.id}
            style={{ width }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Background top 70% */}
            <View style={styles.bgWrapper}>
              <Bg width={width * 1.2} height={height * 0.61} preserveAspectRatio="none" />
              <Text style={styles.topText}>{item.topText}</Text>
            </View>

            {/* Circle + Image */}
            <View style={styles.circleWrapper}>
              <YellowCircle width={width * 0.9} height={width * 0.9} />
              <View style={styles.characterWrapper}>{item.image}</View>
            </View>

            {/* Bottom text & buttons */}
            <View style={styles.bottomWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>

              {item.hasButton && (
                <View style={styles.buttonWrapper}>
                  <Button title="Sign Up" type="solid" onPress={() => navigation.navigate("Signup")} />
                  <View style={styles.footer}>
                    <Text style={styles.login}>Continue to</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                      <Text style={styles.signUpText}> Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        ))}
      </ScrollView>

      {/* Dots */}
      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: currentIndex === index ? "#FFD700" : "#2E6B4F" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;



