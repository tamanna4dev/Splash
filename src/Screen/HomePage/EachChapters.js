import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const EachChapters = ({navigation}) => {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
    <View style={{justifyContent:'center',alignItems:'center'}}>

    <Text style={{color:'#FF5773',fontWeight:600,fontSize:22}}>EVS</Text>
    <Image source={require('../../Assets/image/6.png')} style={{ height: 172, width: 150}} />
    <Text style={{color:'rgba(254, 92, 59, 1)',fontWeight:600,fontSize:19,marginVertical:5}}>Global <Text style={{color:'rgba(255, 22, 105, 1)',fontWeight:600,fontSize:20,}}>warming</Text></Text>
 
    <Text style={{color:'#FF9FAA',fontWeight:600,fontSize:12,}}>“The study of mathematics, like the Nile, begins in</Text>
    <Text style={{color:'#FF9FAA',fontWeight:600,fontSize:12,}}>minuteness but ends in magnificence.”</Text>
   
    </View>
    <View style={{backgroundColor: 'rgba(255, 87, 115, 1)',padding:15,borderRadius:14,marginVertical:15,width:315,}}>
    <Text style={{color:'#ffffff',fontWeight:600,fontSize:19,}}>Video Lectures</Text>
    <Text style={{color:'#FFACBA',fontSize:11,marginVertical:4}}>26 videos</Text>
    <TouchableOpacity

style={{backgroundColor:'#fff',width:76,height:28,borderRadius:6}}
          onPress={() => {
            navigation.navigate('VideoLectures')
          }}>

<Text style={{color:'#FF5773',fontWeight:600,padding:5,textAlign:'center',fontSize:11}}>Play Now</Text>

        </TouchableOpacity>
   
        
        </View>
        <View style={{backgroundColor: 'rgba(255, 87, 115, 1)',padding:15,borderRadius:14,width:315}}>
    <Text style={{color:'#ffffff',fontWeight:600,fontSize:19,}}>Concepts</Text>
    <Text style={{color:'#FFACBA',fontSize:11,marginVertical:4}}>All topics included</Text>
    <TouchableOpacity

style={{backgroundColor:'#fff',width:76,height:28,textAlign:'center',borderRadius:6}}
          onPress={() => {
            navigation.navigate('Concepts')
          }}>

<Text style={{color:'#FF5773',fontWeight:600,padding:5,fontSize:11,textAlign:'center'}}>Learn Now</Text>

        </TouchableOpacity>

        
        </View>
        <View style={{backgroundColor: 'rgba(255, 87, 115, 1)',padding:15,borderRadius:14,marginVertical:15,width:315}}>
    <Text style={{color:'#ffffff',fontWeight:600,fontSize:19,}}>Test</Text>
    <Text style={{color:'#FFACBA',fontSize:11,marginVertical:4}}>Solve all the test and earn ranks</Text>
    <TouchableOpacity

style={{backgroundColor:'#fff',width:76,height:28,textAlign:'center',borderRadius:6}}
          onPress={() => {
            navigation.navigate('Test')
          }}>

<Text style={{color:'#FF5773',fontWeight:600,padding:5,fontSize:11,textAlign:'center'}}>Attempt</Text>

        </TouchableOpacity>

        
        </View>
    </View>
    </View>
  )
}

export default EachChapters

const styles = StyleSheet.create({})