import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const BookmarkVideo = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
  
   <Text style={{color:'#1D1D1D',fontWeight:600,fontSize:20,textAlign:'center',marginVertical:10}}>Bookmark</Text>
   <Text style={{color:'#1D1D1D',fontWeight:600}}>Videos</Text>
   <Image source={require('../../Assets/image/47.png')} style={{ height:120, width:315,marginVertical:8}} />
<View style={{flexDirection:'row',gap:90}}>
<Text style={{color:'#494949',fontWeight:500,fontSize:12}}>Roman Numbers: ExplorationRoman </Text>
<Image source={require('../../Assets/image/Bookmark.png')} style={{ height:20, width:20,marginVertical:8}} />

</View>
   <Text style={{color:'#A5A5A5',fontSize:12,marginTop:-19}}>Topic name</Text>

   <Image source={require('../../Assets/image/48.png')} style={{ height:120, width:315,marginVertical:8}} />
<View style={{flexDirection:'row',gap:90}}>
<Text style={{color:'#494949',fontWeight:500,fontSize:12}}>Roman Numbers: ExplorationRoman </Text>
<Image source={require('../../Assets/image/Bookmark.png')} style={{ height:20, width:20,marginVertical:8}} />

</View>
   <Text style={{color:'#A5A5A5',fontSize:12,marginTop:-19}}>Topic name</Text>

   <Image source={require('../../Assets/image/49.png')} style={{ height:120, width:315,marginVertical:8}} />
<View style={{flexDirection:'row',gap:90}}>
<Text style={{color:'#494949',fontWeight:500,fontSize:12}}>Roman Numbers: ExplorationRoman </Text>
<Image source={require('../../Assets/image/Bookmark.png')} style={{ height:20, width:20,marginVertical:8}} />

</View>
   <Text style={{color:'#A5A5A5',fontSize:12,marginTop:-19}}>Topic name</Text>

    </View>
    </View>
  )
}

export default BookmarkVideo

const styles = StyleSheet.create({})