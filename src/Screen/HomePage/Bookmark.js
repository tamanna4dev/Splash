import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Bookmark = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
  
   <Text style={{color:'#1D1D1D',fontWeight:600,fontSize:22,textAlign:'center',marginVertical:10}}>Bookmark</Text>
   <View style={{backgroundColor: '#FFECFE',padding:15,borderRadius:14,marginVertical:5,}}>
   <TouchableOpacity

onPress={() => {
  navigation.navigate('BookmarkVideo')
}}>
 <View style={{flexDirection:'row',gap:90}}>
 <Text style={{color:'#272738',fontWeight:600,fontSize:18}}>Mathematics</Text>
<Image source={require('../../Assets/image/12.png')} style={{ height: 50, width: 70}} />

 
 </View>
 <View>
 
<Text style={{marginTop:-25,color:'rgb(168 168 168)',fontSize:10}}>20 videos</Text>

   
 </View>


</TouchableOpacity> 

   </View>
   <View style={{backgroundColor: '#E9E7FF',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:140}}>
 <Text style={{color:'#272738',fontWeight:600,fontSize:18}}>Coding</Text>
   <Image source={require('../../Assets/image/18.png')} style={{ height: 50, width: 70}} />
 </View>
 <View>
 
<Text style={{marginTop:-25,color:'rgb(168 168 168)',fontSize:10}}>20 videos</Text>

   
 </View>
   </View>
   <View style={{backgroundColor: '#FFE8E8',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:15}}>
 <Text style={{color:'#272738',fontWeight:600,fontSize:18}}>Environmental science</Text>
   <Image source={require('../../Assets/image/16.png')} style={{ height: 50, width: 70}} />
 </View>
 <View>
 
<Text style={{marginTop:-25,color:'rgb(168 168 168)',fontSize:10}}>20 videos</Text>

   
 </View>
   </View>
   <View style={{backgroundColor: '#FFF4DA',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:103}}>
 <Text style={{color:'#272738',fontWeight:600,fontSize:18}}>Geography</Text>
   <Image source={require('../../Assets/image/17.png')} style={{ height: 50, width: 70}} />
 </View>
 <View>
 
<Text style={{marginTop:-26,color:'rgb(168 168 168)',fontSize:10}}>20 videos</Text>

   
 </View>
   </View>
   <View style={{backgroundColor: '#E8EFFF',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:111}}>
 <Text style={{color:'#272738',fontWeight:600,fontSize:18}}>Chemistry</Text>
   <Image source={require('../../Assets/image/14.png')} style={{ height: 59, width: 70}} />
 </View>
 <View>
 
<Text style={{marginTop:-35,color:'rgb(168 168 168)',fontSize:10}}>20 videos</Text>

   
 </View>
   </View>
   <View style={{backgroundColor: '#E2F3FF',padding:15,borderRadius:14,marginVertical:5,}}>
 
 <View style={{flexDirection:'row',gap:150}}>
 <Text style={{color:'#272738',fontWeight:600,fontSize:18}}>Physics</Text>
   <Image source={require('../../Assets/image/13.png')} style={{ height: 50, width: 70}} />
 </View>
 <View>
 
<Text style={{marginTop:-26,color:'rgb(168 168 168)',fontSize:10}}>20 videos</Text>

   
 </View>
   </View>
   

   
    </View>

     
    </View>
  )
}

export default Bookmark

const styles = StyleSheet.create({})