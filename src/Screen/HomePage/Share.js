import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Share = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(230 230 230)', padding: 20,width:340 }}>
 <View style={{flexDirection:'row',gap:215,marginVertical:20}}>
<Text style={{color:'#FE5C3B',fontWeight:700,fontSize:22}}>Stulyfe</Text>
 <Image source={require('../../Assets/image/Bookmark.png')} style={{ height: 24, width: 24}} />

 </View>

 

<Text style={{fontWeight:600,fontSize:15}}>Recently watched</Text>
<Image source={require('../../Assets/image/24.png')} style={{ height:99, width: 193,borderRadius:8,marginVertical:12}} />
<Text style={{fontWeight:500,fontSize:13}}>Roman Numbers: Exploration</Text>
<Text style={{fontWeight:500,fontSize:13,color:'#A5A5A5'}}>Mathematics</Text>



<View style={{ alignItems:'flex-end',  marginTop:-157}}>
<Image source={require('../../Assets/image/27.png')} style={{ height: 99, width: 97,borderBottomLeftRadius:8,borderTopLeftRadius:8,marginVertical:12}} />
<Text style={{fontWeight:500,fontSize:13}}>Roman Numbers</Text>
<Text style={{fontWeight:500,fontSize:13,color:'#A5A5A5'}} >Science</Text>
</View>


    </View>
    <Image source={require('../../Assets/image/28.png')} style={{ height:399, width: 344,borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:-12}} />

    </View>
  )
}

export default Share

const styles = StyleSheet.create({})