import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ShareStulyfe = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
    <View style={{backgroundColor: '#FF5773',padding:15,borderRadius:14,}}>

    <View style={{ flexDirection:"row",gap:16,}} >
    <Image source={require('../../Assets/image/10.png')} style={{ height: 45, width: 29}} />

    <View style={{ flexDirection:"row",gap:40}} >
    <Text style={{fontWeight:600,fontSize:19,color:'#fff'}}>Ashneer Mehta</Text>



<Text style={{color:'#FE5A7B',textAlign:'center',width:70,fontWeight:600,fontSize:11,}}>Edit profile</Text>




    </View>
    
        </View>
            <Text style={{fontSize:10,fontWeight:600,marginTop:-17,marginLeft:43,color:'#fff'}}>Class 5th</Text>

        </View>
        <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:7}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/65.png')} style={{ height: 24, width: 24}} />


<Text style={{color:'#FF5773',fontWeight:600,fontSize:15}}>Change class</Text>




</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:7}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/66.png')} style={{ height: 24, width: 24}} />

<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>My rewards</Text>



</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:5}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/67.png')} style={{ height: 24, width: 24}} />

<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>About stulyfe</Text> 



</View>
    </View>
    </View>
    <Image source={require('../../Assets/image/28.png')} style={{ height:399, width: 358,borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:-12}} />
   
    </View>
  )
}

export default ShareStulyfe

const styles = StyleSheet.create({})