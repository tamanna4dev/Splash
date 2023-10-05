import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Progress = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,width:320 }}>
    <View style={{backgroundColor:'#F7F5FF',padding:15,height:115,borderRadius:11}}>
      <View style={{flexDirection:'row',}}>
        <Text style={{color:'#B4A3FB' ,fontSize:24,}}>Your Analytics, </Text>
<Image source={require('../../Assets/image/6.png')} style={{ height: 99, width: 91}} />
</View>
<Text style={{color:'#B4A3FB' ,fontSize:25,fontWeight:600,marginTop:-71}}>Ashnerr</Text>

    </View>
    <View style={{flexDirection:'row',gap:57,marginVertical:15}}>
    <Text style={{fontSize:13,color:'#B4A3FB',fontWeight:500}}>Progress</Text>


    <TouchableOpacity


          onPress={() => {
            navigation.navigate('Performance')
          }}>

<Text style={{fontSize:13,color:'#BEBEBE'}}>Performance</Text>


        </TouchableOpacity>
   
      <Text style={{fontSize:13,color:'#BEBEBE'}}>Rank</Text>
    </View> 
    
<Image source={require('../../Assets/image/57.png')} style={{ height: 55, width: 280,borderRadius:9}} />
<Image source={require('../../Assets/image/58.png')} style={{ height: 55, width: 280,borderRadius:9,marginVertical:11}} />
<Text style={{color:'#141414',fontSize:14,fontWeight:600}}>Monthly Progress</Text>
<Text style={{backgroundColor:'#B4A3FB',color:'#fff',padding:5,borderRadius:6,textAlign:'center',width:90,height:29,marginVertical:18}}>September</Text>
<Image source={require('../../Assets/image/59.png')} style={{ height: 190, width: 290,borderRadius:9,marginVertical:11}} />
   
    </View>
    
    </View>
  )
}

export default Progress

const styles = StyleSheet.create({})