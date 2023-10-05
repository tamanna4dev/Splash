import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const VideoLectures1 = () => {
  return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
        <View style={{ backgroundColor: '#fff', padding: 20, }}>
      
        <Text style={{color:'#703EDB',fontWeight:600,fontSize:22,textAlign:'center',marginVertical:10}}>Videos</Text>
    <Image source={require('../../../Assets/image/40.png')} style={{ height: 165, width: 315}} />

   
<View  style={{backgroundColor:'rgba(33, 33, 33, 0.6)',padding:10,borderBottomLeftRadius:8,borderBottomRightRadius:8,marginTop:-58}}>
<Text style={{color:'#fff'}}>Roman Numbers: Exploration</Text>
<Text style={{color:'#DADADA'}}>Roman Numbers</Text>
    </View>    

<View style={{marginVertical:20}}>
<Image source={require('../../../Assets/image/41.png')} style={{ height: 165, width: 315}} />  
<View  style={{backgroundColor:'rgba(33, 33, 33, 0.6)',padding:10,borderBottomLeftRadius:8,borderBottomRightRadius:8,marginTop:-58}}>

<Text style={{color:'#fff'}}>Roman Numbers: Exploration</Text>


<Text style={{color:'#DADADA'}}>Roman Numbers</Text>
    </View> 
</View>


    <Image source={require('../../../Assets/image/42.png')} style={{ height: 165, width: 315}} />

   
<View  style={{backgroundColor:'rgba(33, 33, 33, 0.6)',padding:10,borderBottomLeftRadius:8,borderBottomRightRadius:8,marginTop:-63}}>
<View style={{flexDirection:'row',gap:40}}>
<Text style={{color:'#fff'}}>Roman Numbers: Exploration</Text>
<Text style={{backgroundColor:'rgba(80, 80, 80, 1)',color:'#fff',width:71,height:24,padding:2,textAlign:'center',borderRadius:5}}>Revise</Text>
</View>
<Text style={{color:'#DADADA'}}>Roman Numbers</Text>
    
        </View> 

  
    </View>
    
    </View>
  )
}

export default VideoLectures1

const styles = StyleSheet.create({})