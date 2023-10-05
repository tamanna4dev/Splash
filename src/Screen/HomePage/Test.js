import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Test = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
  
   <Text style={{color:'#FF5773',fontWeight:600,fontSize:22,textAlign:'center',marginVertical:10}}>Test</Text>
   <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:50}}>
 <Text style={{color:'#FE5979',fontWeight:600,fontSize:18}}>Ancient romans</Text>
   <Image source={require('../../Assets/image/44.png')} style={{ height: 93, width: 92}} />
 </View>
 <View style={{marginTop:-68}}>
 <Image source={require('../../Assets/image/45.png')} style={{ height: 20, width: 129,}} />
 <TouchableOpacity
style={{backgroundColor:'#FF5773',height:34,width:102,borderRadius:7,marginVertical:10,}}
          onPress={() => {
            navigation.navigate('Instructions')
          }}>

<Text style={{color:'#fff',textAlign:'center',padding:7,fontSize:13,fontWeight:500,}}>Attend</Text>
    </TouchableOpacity>


   
 </View>
   </View>
   <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:50}}>
 <Text style={{color:'#FE5979',fontWeight:600,fontSize:18}}>Ancient romans</Text>
   <Image source={require('../../Assets/image/44.png')} style={{ height: 93, width: 92}} />
 </View>
 <View style={{marginTop:-68}}>
 <Image source={require('../../Assets/image/45.png')} style={{ height: 20, width: 129,}} />
  <Text style={{backgroundColor:'#FF5773',height:34,width:102,color:'#fff',textAlign:'center',padding:7,fontSize:13,fontWeight:500,borderRadius:7,marginVertical:10}}>Attend</Text>
   
 </View>
   </View>

   <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:50}}>
 <Text style={{color:'#FE5979',fontWeight:600,fontSize:18}}>Ancient romans</Text>
   <Image source={require('../../Assets/image/44.png')} style={{ height: 93, width: 92}} />
 </View>
 <View style={{marginTop:-68}}>
 <Image source={require('../../Assets/image/45.png')} style={{ height: 20, width: 129,}} />
  <Text style={{backgroundColor:'#FF5773',height:34,width:102,color:'#fff',textAlign:'center',padding:7,fontSize:13,fontWeight:500,borderRadius:7,marginVertical:10}}>Attend</Text>
   
 </View>
   </View>

   <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:50}}>
 <Text style={{color:'#FE5979',fontWeight:600,fontSize:18}}>Ancient romans</Text>
   <Image source={require('../../Assets/image/44.png')} style={{ height: 93, width: 92}} />
 </View>
 <View style={{marginTop:-68}}>
 <Image source={require('../../Assets/image/45.png')} style={{ height: 20, width: 129,}} />
  <Text style={{backgroundColor:'#FF5773',height:34,width:102,color:'#fff',textAlign:'center',padding:7,fontSize:13,fontWeight:500,borderRadius:7,marginVertical:10}}>Attend</Text>
   
 </View>
   </View>


   
    </View>

     
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})