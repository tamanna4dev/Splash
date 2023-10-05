import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboardingscreen1 from './src/Screen/OnboardingLogin/Onboardingscreen1'
import AppNavigation from './src/Navigation/AppNavigation'
import Onboardingscreen2 from './src/Screen/OnboardingLogin/Onboardingscreen2'
import Onboardingscreen3 from './src/Screen/OnboardingLogin/Onboardingscreen3'
import Onboardingscreen4 from './src/Screen/OnboardingLogin/Onboardingscreen4'
import LoginNo from './src/Screen/OnboardingLogin/LoginNo'
import OTPVerification from './src/Screen/OnboardingLogin/OTPVerification'
import Error from './src/Screen/OnboardingLogin/Error'
import Createprofile from './src/Screen/Createprofile,Selectclass/Createprofile'
import SelectBoard from './src/Screen/Createprofile,Selectclass/SelectBoard'

import BottomNavigation from './src/Bottom/BottomNavigation'
import Screen1 from './src/Screen/BottomScreen/Screen1'
import Share from './src/Screen/HomePage/Share'
import EVS from './src/Screen/HomePage/EVS'
import SubjectChapters from './src/Screen/HomePage/SubjectChapters'
import EachChapters from './src/Screen/HomePage/EachChapters'
import VideoLectures from './src/Screen/HomePage/VideoLectures'
import Concepts from './src/Screen/HomePage/Concepts'
import Test from './src/Screen/HomePage/Test'
import Instructions from './src/Screen/HomePage/Instructions'
import Question1 from './src/Screen/HomePage/Question1'
import Bookmark from './src/Screen/HomePage/Bookmark'
import BookmarkVideo from './src/Screen/HomePage/BookmarkVideo'
import Question2 from './src/Screen/HomePage/Question2'
import Submit from './src/Screen/HomePage/Submit'
import Test1 from './src/Screen/HomePage/Coding/Test1'
import Progress from './src/Screen/Analysis/Progress'
import Performance from './src/Screen/Analysis/Performance'
import Rank from './src/Screen/Analysis/Rank'
import AshneerMehta from './src/Screen/Profile/AshneerMehta'
import ChangeClass from './src/Screen/Profile/ChangeClass'




const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <AppNavigation/> */}
{/* <Question1/> */}
{/* <Instructions/> */}
<Createprofile/>
        </View>
  )
}

export default App

const styles = StyleSheet.create({})