import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SelectBoard = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20,width:350 }}>
        <View style={{backgroundColor: '#fff',padding:15,borderRadius:14,height:99,width:'100%'}}>
   <View style={{flexDirection:'row',}}>
   <Text style={{color:'#FF159A',fontSize:23,fontWeight:400,}}>GoodMornning,</Text>
   <Image source={require('../../Assets/image/9.png')} style={{ height: 100, width: 128}} />
   
    </View>

   <Text style={{color:'#FF159A',fontSize:26,fontWeight:700,marginTop:-70}}>Ashnerr</Text>
   </View>
   <Text style={{color:'rgba(29,29,29,1)',fontWeight:600,fontSize:19,marginVertical:17}}> Select board </Text>
   <View style={{flexDirection:'row',gap:13}}>
  
   <View style={{backgroundColor: '#fff',borderRadius:30,height:33,width:151,padding:8}}>
   <Text style={{textAlign:'center',fontWeight:500,fontSize:13}}>CBCE</Text>
   </View>

   <View style={{backgroundColor: '#fff',borderRadius:30,height:33,width:151,padding:8}}>
   <Text style={{textAlign:'center',fontWeight:500,fontSize:13}}>MH State Board</Text>
   </View>
   </View>
   <Text style={{color:'rgba(29,29,29,1)',fontWeight:600,fontSize:19,marginVertical:17}}> Select class </Text>
   <View style={{flexDirection:'row',gap:20}}>
   <View>
    <View style={{backgroundColor: '#fff',padding:16,borderRadius:14,height:79,width:149}}>
   <Text style={{color:'rgba(255, 87, 115, 1)',fontSize:17,fontWeight:600}}>class 5th </Text>
   <Text style={{color:'rgba(189, 7, 37, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>
   <View>
    <View style={{backgroundColor: '#fff',padding:16,borderRadius:14,height:79,width:149}}>
   <Text style={{color:'rgba(180, 163, 251, 1)',fontSize:17,fontWeight:600}}>class 6th </Text>
   <Text style={{color:'rgba(136, 124, 188, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>

    </View>

    <View style={{flexDirection:'row',gap:20,marginVertical:18}}>
   <View>
    <View style={{backgroundColor: '#fff',padding:16,borderRadius:14,height:79,width:149}}>
   <Text style={{color:'rgba(49, 228, 147, 1)',fontSize:17,fontWeight:600}}>class 7th </Text>
   <Text style={{color:'rgba(0, 137, 75, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>
   <View>
    <View style={{backgroundColor: '#fff',padding:16,borderRadius:14,height:79,width:149}}>
   <Text style={{color:'rgba(87, 212, 250, 1)',fontSize:17,fontWeight:600}}>class 8th </Text>
   <Text style={{color:'rgba(20, 121, 151, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>

    </View>
    <View style={{flexDirection:'row',gap:20}}>
   <View>
    <View style={{backgroundColor: '#fff',padding:16,borderRadius:14,height:79,width:149}}>
   <Text style={{color:'rgba(255, 181, 99, 1)',fontSize:17,fontWeight:600}}>class 9th </Text>
   <Text style={{color:'rgba(181, 104, 19, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>
   <View>
    <View style={{backgroundColor: '#fff',padding:16,borderRadius:14,height:79,width:149}}>
   <Text style={{color:'rgba(245, 116, 191, 1)',fontSize:17,fontWeight:600}}>class 10th </Text>
   <Text style={{color:'rgba(171, 22, 109, 1)',fontSize:14,fontWeight:500}}>MH State Board</Text>

    </View>

  
   </View>

    </View>
    
<TouchableOpacity

        style={{backgroundColor:'rgba(245, 116, 191, 1)',borderRadius:7,marginVertical:30}}
          onPress={() => {
            navigation.navigate('BottomNavigation')
          }}>

<Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:15,padding:11}}>Proceed</Text>

        </TouchableOpacity>
     </View>
     </View>

  )
}

export default SelectBoard

const styles = StyleSheet.create({})