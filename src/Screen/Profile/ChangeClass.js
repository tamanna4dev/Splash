import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const ChangeClass = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,width:340 }}>
    <Text style={{color:'#000',fontWeight:600,fontSize:20,textAlign:'center'}}>Change class</Text>

   <Text style={{color:'#414141',fontWeight:600,fontSize:16,marginVertical:14}}> Select board </Text>
   <View style={{flexDirection:'row',gap:13}}>
  
   <View style={{backgroundColor: '#E8F9FF',borderRadius:30,height:33,width:141,padding:8}}>
   <Text style={{textAlign:'center',fontWeight:500,fontSize:13}}>CBCE</Text>
   </View>

   <View style={{backgroundColor: '#FFEFDF',borderRadius:30,height:33,width:151,padding:8}}>
   <Text style={{textAlign:'center',fontWeight:500,fontSize:13}}>MH State Board</Text>
   </View>
   </View>
   <Text style={{color:'rgba(29,29,29,1)',fontWeight:600,fontSize:16,marginVertical:14}}> Select class </Text>
   <View style={{flexDirection:'row',gap:20}}>
   <View>
    <View style={{backgroundColor: '#FFF6F7',padding:16,borderRadius:14,height:147,width:140,justifyContent:'flex-end'}}>
   <Text style={{color:'rgba(255, 87, 115, 1)',fontSize:17,fontWeight:600}}>class 5th </Text>
   <Text style={{color:'rgba(189, 7, 37, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>
   <View>
    <View style={{backgroundColor: '#F6F2FF',padding:16,borderRadius:14,height:147,width:140,justifyContent:'flex-end'}}>
   <Text style={{color:'rgba(180, 163, 251, 1)',fontSize:17,fontWeight:600}}>class 6th </Text>
   <Text style={{color:'rgba(136, 124, 188, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>

    </View>

    <View style={{flexDirection:'row',gap:20,marginVertical:18}}>
   <View>
    <View style={{backgroundColor: '#EAFFF6',padding:16,borderRadius:14,height:147,width:140,justifyContent:'flex-end'}}>
   <Text style={{color:'rgba(49, 228, 147, 1)',fontSize:17,fontWeight:600}}>class 7th </Text>
   <Text style={{color:'rgba(0, 137, 75, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>
   <View>
    <View style={{backgroundColor: '#E8F9FF',padding:16,borderRadius:14,height:147,width:140,justifyContent:'flex-end'}}>
   <Text style={{color:'rgba(87, 212, 250, 1)',fontSize:17,fontWeight:600}}>class 8th </Text>
   <Text style={{color:'rgba(20, 121, 151, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>

    </View>
    <View style={{flexDirection:'row',gap:20}}>
   <View>
    <View style={{backgroundColor: '#FFF5EA',padding:16,borderRadius:14,height:147,width:140,justifyContent:'flex-end'}}>
   <Text style={{color:'rgba(255, 181, 99, 1)',fontSize:17,fontWeight:600}}>class 9th </Text>
   <Text style={{color:'rgba(181, 104, 19, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>
   <View>
    <View style={{backgroundColor: '#FFF4FA',padding:16,borderRadius:14,height:147,width:140,justifyContent:'flex-end'}}>
   <Text style={{color:'rgba(245, 116, 191, 1)',fontSize:17,fontWeight:600}}>class 10th </Text>
   <Text style={{color:'rgba(171, 22, 109, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>

    </View>
    

     </View>
     </View>

  )
}

export default ChangeClass

const styles = StyleSheet.create({})