import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Performance = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
    <View style={{backgroundColor:'#FFEEF8',padding:15,height:115,borderRadius:11}}>
      <View style={{flexDirection:'row',}}>
        <Text style={{color:'#F574BF' ,fontSize:24,}}>Your Analytics, </Text>
<Image source={require('../../Assets/image/6.png')} style={{ height: 99, width: 91}} />
</View>
<Text style={{color:'#F574BF' ,fontSize:25,fontWeight:600,marginTop:-71}}>Ashnerr</Text>

    </View>
    <View style={{flexDirection:'row',gap:57,marginVertical:15}}>
    <Text style={{fontSize:13,color:'#BEBEBE',}}>Progress</Text>
    <Text style={{fontSize:13,color:'#F574BF',fontWeight:500}}>Performance</Text>


    <TouchableOpacity


          onPress={() => {
            navigation.navigate('Rank')
          }}>


<Text style={{fontSize:13,color:'#BEBEBE'}}>Rank</Text>

        </TouchableOpacity>
   
    </View> 
<Image source={require('../../Assets/image/60.png')} style={{ height: 55, width: 290,borderRadius:9}} />
<Image source={require('../../Assets/image/61.png')} style={{ height: 55, width: 290,borderRadius:9,marginVertical:9}} />
<Image source={require('../../Assets/image/62.png')} style={{ height: 55, width: 290,borderRadius:9}} />
<Text style={{color:'#141414',fontSize:14,fontWeight:600,marginVertical:17}}>Test performance</Text>
<View style={{flexDirection:'row',gap:5}}>
<Text style={{backgroundColor:'#F574BF',color:'#fff',padding:5,borderRadius:6,textAlign:'center',width:75,height:29,fontSize:11}}>Mathematics</Text>
<Text style={{backgroundColor:'#FFEEF8',color:'#000',padding:5,borderRadius:6,textAlign:'center',width:69,height:29,fontSize:11}}>History</Text>
<Text style={{backgroundColor:'#FFEEF8',color:'#000',padding:5,borderRadius:6,textAlign:'center',width:68,height:29,fontSize:11,}}>Science</Text>
<Text style={{backgroundColor:'#FFEEF8',color:'#000',padding:5,borderRadius:6,textAlign:'center',width:65,height:29,fontSize:11,}}>Math</Text>

</View>
<Text style={{color:'#141414',fontSize:14,fontWeight:600,marginVertical:17}}>More than 100%</Text>
<Image source={require('../../Assets/image/63.png')} style={{ height: 131, width: 290,borderRadius:9}} />

    </View>
    
    </View>
  )
}

export default Performance

const styles = StyleSheet.create({})