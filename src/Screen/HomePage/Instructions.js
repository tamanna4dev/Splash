import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Instructions = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
    <View style={{ backgroundColor: '#FF5773', padding: 20, }}>
  
<View style={{justifyContent: 'center', alignItems: 'center',width:300,height:230,marginVertical:20}}>
<Text style={{color:'#fff',fontWeight:600,fontSize:22,}}>Test</Text>
   <Image source={require('../../Assets/image/46.png')} style={{ height: 230, width: 231,}} />
</View>
</View>
    <View style={{backgroundColor:'#fFF',padding:20,borderTopLeftRadius:18,borderTopRightRadius:18,marginTop:-23,width:340}}>
<Text style={{color:'#141414',fontSize:17,fontWeight:500}}>Instructions</Text>
<View style={{flexDirection:'row',gap:15}}>
  <Text style={{backgroundColor:'#E8F9FF',height:50,width:149,color:'#4E4E4E',textAlign:'center',padding:12,fontSize:15,fontWeight:500,borderRadius:7,marginVertical:10}}>10 Question</Text>
  <Text style={{backgroundColor:'#FFEFDF',height:50,width:149,color:'#4E4E4E',textAlign:'center',padding:12,fontSize:15,fontWeight:500,borderRadius:7,marginVertical:10}}>10 Minutes</Text>
   
    </View>  
    <View style={{flexDirection:'row',gap:20}}>
        <Text  style={{backgroundColor:'#FFF6F7',height:45,width:46,borderRadius:7}}></Text>
        <Text style={{color:'#484848',fontSize:13,fontWeight:400}}>An angle is formed when two rays are</Text>
         
  </View>   
  <Text style={{color:'#484848',fontSize:13,fontWeight:400,marginTop:-24,marginLeft:66}}>joined together and find it?</Text>

  <View style={{marginVertical:25}}>
  <View style={{flexDirection:'row',gap:20}}>
        <Text  style={{backgroundColor:'#FFF6F7',height:45,width:46,borderRadius:7}}></Text>
        <Text style={{color:'#484848',fontSize:13,fontWeight:400}}>An angle is formed when two rays are</Text>
         
  </View>   
  <Text style={{color:'#484848',fontSize:13,fontWeight:400,marginTop:-24,marginLeft:66}}>joined together and find it?</Text>


  </View>
  <View style={{flexDirection:'row',gap:20}}>
        <Text  style={{backgroundColor:'#FFF6F7',height:45,width:46,borderRadius:7}}></Text>
        <Text style={{color:'#484848',fontSize:13,fontWeight:400}}>An angle is formed when two rays are</Text>
         
  </View>   
  <Text style={{color:'#484848',fontSize:13,fontWeight:400,marginTop:-24,marginLeft:66}}>joined together and find it?</Text>
  <TouchableOpacity
style={{height:50,backgroundColor:'#FF5773',borderRadius:7,marginVertical:30}}
          onPress={() => {
            navigation.navigate('Question1')
          }}>

<Text style={{color:'#fff',textAlign:'center',padding:12,fontSize:15,fontWeight:500,}}>Continue</Text>

        </TouchableOpacity>
  

    </View>
    </View>
      
 
  )
}

export default Instructions

const styles = StyleSheet.create({})