import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectBoard from '../Screen/Createprofile,Selectclass/SelectBoard';
import Screen1 from '../Screen/BottomScreen/Screen1';

import SplashScreen from '../Screen/OnboardingLogin/SplashScreen';
import Onboardingscreen1 from '../Screen/OnboardingLogin/Onboardingscreen1';
import Onboardingscreen2 from '../Screen/OnboardingLogin/Onboardingscreen2';
import Onboardingscreen3 from '../Screen/OnboardingLogin/Onboardingscreen3';
import Onboardingscreen4 from '../Screen/OnboardingLogin/Onboardingscreen4';
import LoginNo from '../Screen/OnboardingLogin/LoginNo';
import OTPVerification from '../Screen/OnboardingLogin/OTPVerification';
import Error from '../Screen/OnboardingLogin/Error';
import Createprofile from '../Screen/Createprofile,Selectclass/Createprofile';
import BottomNavigation from '../Bottom/BottomNavigation';
import Share from '../Screen/HomePage/Share';
import EVS from '../Screen/HomePage/EVS';
import SubjectChapters from '../Screen/HomePage/SubjectChapters';
import EachChapters from '../Screen/HomePage/EachChapters';
import VideoLectures from '../Screen/HomePage/VideoLectures';
import Concepts from '../Screen/HomePage/Concepts';
import Test from '../Screen/HomePage/Test';
import Instructions from '../Screen/HomePage/Instructions';
import Question1 from '../Screen/HomePage/Question1';
import Bookmark from '../Screen/HomePage/Bookmark';
import BookmarkVideo from '../Screen/HomePage/BookmarkVideo';
import Question2 from '../Screen/HomePage/Question2';
import Submit from '../Screen/HomePage/Submit';
import SubjectChapters1 from '../Screen/HomePage/Coding/SubjectChapters1';
import EachChapters1 from '../Screen/HomePage/Coding/EachChapters1';
import VideoLectures1 from '../Screen/HomePage/Coding/VideoLectures1';
import Concepts1 from '../Screen/HomePage/Coding/Concepts1';
import Test1 from '../Screen/HomePage/Coding/Test1';
import Instructions1 from '../Screen/HomePage/Coding/Instructions1';
import Questions1 from '../Screen/HomePage/Coding/Questions1';
import Questions2 from '../Screen/HomePage/Coding/Questions2';
import Submit1 from '../Screen/HomePage/Coding/Submit1';
import Performance from '../Screen/Analysis/Performance'
import Progress from '../Screen/Analysis/Progress'
import Rank from '../Screen/Analysis/Rank'

import AboutStulyfe from '../Screen/Profile/AboutStulyfe';
import ChangeClass from '../Screen/Profile/ChangeClass';
import Editprofile from '../Screen/Profile/Editprofile';
import LogOut from '../Screen/Profile/LogOut';
import MyRewards from '../Screen/Profile/MyRewards';
import PrivacyPolicy from '../Screen/Profile/PrivacyPolicy';
import Save from '../Screen/Profile/Save';
import ShareStulyfe from '../Screen/Profile/ShareStulyfe';
import Support from '../Screen/Profile/Support';
import AshneerMehta from '../Screen/Profile/AshneerMehta';




const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
  
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Onboardingscreen1' component={Onboardingscreen1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Onboardingscreen2' component={Onboardingscreen2} options={{ headerShown: true }} />
      <Stack.Screen name='Onboardingscreen3' component={Onboardingscreen3} options={{ headerShown: true }} />
      <Stack.Screen name='Onboardingscreen4' component={Onboardingscreen4} options={{ headerShown: true }} /> 
      <Stack.Screen name='LoginNo' component={LoginNo} options={{ headerShown: true }} />
      <Stack.Screen name='OTPVerification' component={OTPVerification} options={{ headerShown: true }} /> 
      <Stack.Screen name='Error' component={Error} options={{ headerShown: true }} /> 
      <Stack.Screen name='Createprofile' component={Createprofile} options={{ headerShown: true }} /> 
      <Stack.Screen name='SelectBoard' component={SelectBoard} options={{ headerShown: true }} /> 
      <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: true }} /> 
      <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{ headerShown: true }} /> 
      <Stack.Screen name='Share' component={Share} options={{ headerShown: true }} /> 
      <Stack.Screen name='EVS' component={EVS} options={{ headerShown: true }} /> 
      <Stack.Screen name='SubjectChapters' component={SubjectChapters} options={{ headerShown: true }} /> 
      <Stack.Screen name='EachChapters' component={EachChapters} options={{ headerShown: true }} /> 
      <Stack.Screen name='VideoLectures' component={VideoLectures} options={{ headerShown: true }} /> 
      <Stack.Screen name='Concepts' component={Concepts} options={{ headerShown: true }} /> 
      <Stack.Screen name='Test' component={Test} options={{ headerShown: true }} /> 
      <Stack.Screen name='Instructions' component={Instructions} options={{ Instructions: true }} /> 
      <Stack.Screen name='Question1' component={Question1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Bookmark' component={Bookmark} options={{ headerShown: true }} /> 
      <Stack.Screen name='BookmarkVideo' component={BookmarkVideo} options={{ headerShown: true }} /> 
      <Stack.Screen name='Question2' component={Question2} options={{ headerShown: true }} /> 
      <Stack.Screen name='Submit' component={Submit} options={{ headerShown: true }} /> 
      <Stack.Screen name='SubjectChapters1' component={SubjectChapters1} options={{ headerShown: true }} /> 
      <Stack.Screen name='EachChapters1' component={EachChapters1} options={{ headerShown: true }} /> 
      <Stack.Screen name='VideoLectures1' component={VideoLectures1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Concepts1' component={Concepts1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Test1' component={Test1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Instructions1' component={Instructions1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Questions1' component={Questions1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Questions2' component={Questions2} options={{ headerShown: true }} /> 
      <Stack.Screen name='Submit1' component={Submit1} options={{ headerShown: true }} /> 
      <Stack.Screen name='Performance' component={Performance} options={{ headerShown: true }} /> 
      <Stack.Screen name='Progress' component={Progress} options={{ headerShown: true }} /> 
      <Stack.Screen name='Rank' component={Rank} options={{ headerShown: true }} /> 
      <Stack.Screen name='AshneerMehta' component={AshneerMehta} options={{ headerShown: true }} /> 
      <Stack.Screen name='AboutStulyfe' component={AboutStulyfe} options={{ headerShown: true }} /> 
      <Stack.Screen name='ChangeClass' component={ChangeClass} options={{ headerShown: true }} /> 
      <Stack.Screen name='Editprofile' component={Editprofile} options={{ headerShown: true }} /> 
      <Stack.Screen name='LogOut' component={LogOut} options={{ headerShown: true }} /> 
      <Stack.Screen name='MyRewards' component={MyRewards} options={{ headerShown: true }} /> 
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: true }} /> 
      <Stack.Screen name='Save' component={Save} options={{ headerShown: true }} /> 
      <Stack.Screen name='ShareStulyfe' component={ShareStulyfe} options={{ headerShown: true }} /> 
      <Stack.Screen name='Support' component={Support} options={{ headerShown: true }} /> 
    
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default AppNavigation

const styles = StyleSheet.create({})