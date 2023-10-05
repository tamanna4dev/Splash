import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

const MyRewards = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
   <Text style={{color:'#000',fontWeight:600,fontSize:22,textAlign:'center',marginVertical:10}}>My rewards</Text>
   <Text style={{backgroundColor:'#FFB442',color:'#fff',padding:8,textAlign:'center',width:90,height:32,fontSize:11,borderBottomEndRadius:9,borderTopEndRadius:9}}>12-10-2022</Text>

    <Image source={require('../../Assets/image/64.png')} style={{ height: 254, width: 249,borderRadius:9,marginVertical:15}} />
<Text style={{backgroundColor:'#FFB442',color:'#fff',padding:8,textAlign:'center',width:90,height:32,fontSize:11,borderBottomEndRadius:9,borderTopEndRadius:9}}>12-10-2022</Text>
    
    <Image source={require('../../Assets/image/64.png')} style={{ height: 254, width: 249,borderRadius:9,marginVertical:15}} />

</View>
</View>
  )
}

export default MyRewards 

const styles = StyleSheet.create({})