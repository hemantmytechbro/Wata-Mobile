
import React from 'react';
import { PostItem } from '../../src/components/Card/PostItem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../src/screens/LoginScreen';
import PhoneScreen from '../../src/screens/PhoneScreen';
import OtpScreen from '../../src/screens/OtpScreen';
import SignupScreen from '../../src/screens/SignupScreen';
 import HomeScreen from '../../src/screens/HomeScreen';
import ForgotPasswordScreen from '../../src/screens/ForgotScreen';
import CongratulationsScreen from '../../src/screens/Congratulation';
import OliviaOnboarding from '../../src/screens/Olivia';
import LandingPage from '../../src/screens/LandingPage';
import Notification from '../../src/screens/Notification';
import SearchTab from '../../src/screens/SearchTab';
import PostPage from '../../src/screens/PostPage';
import AddPost from '../../src/screens/AddPostPage';
import Verification from '../../src/screens/VerificationOtp';
import Payment from  '../../src/screens/Payment';
import DemandPage from '../../src/screens/DemandPage';

export type RootStackParamList = {
   Home:undefined;
  Login: undefined;
  Phone: undefined;
  Otp:undefined;
  Signup:undefined;
  ForgotPassword:undefined;
  Congratulations:undefined;
  Olivia:undefined;
 LandingPage:undefined;
 Notification:undefined;
 SearchTab:undefined,
 PostPage:undefined,
 AddPost:undefined,
 Verification:undefined,
 Payment:undefined,
  DemandPage: { item: PostItem }; 
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const BaseNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Congratulations" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen}/> 
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Phone" component={PhoneScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
       <Stack.Screen name="Congratulations" component={CongratulationsScreen} />
        <Stack.Screen name="Olivia" component={OliviaOnboarding} />
         <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="SearchTab" component={SearchTab} />
          <Stack.Screen name="PostPage" component={PostPage} />
            <Stack.Screen name="AddPost" component={AddPost} />
            <Stack.Screen name="Verification" component={Verification} />
             <Stack.Screen name="Payment" component={Payment} />
               <Stack.Screen name="DemandPage" component={DemandPage} />

    </Stack.Navigator>
  );
};

export default BaseNavigation;

