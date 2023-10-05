import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'



const SplashScreen = ({navigation}) => {
  useEffect(()=>{ 
    setTimeout(()=>{
  navigation.navigate('Onboardingscreen1')
    },2000)
  },[])
  return (
    <View style={styles.container}>

      <Image source={require('../../Assets/image/1.png')} style={{ height: 123, width: 152, }} />

    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
      }
})