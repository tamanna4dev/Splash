import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'


const Rank = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
    <View style={{backgroundColor:'#FFF5E5',padding:15,height:115,borderRadius:11}}>
      <View style={{flexDirection:'row',}}>
        <Text style={{color:'#FFB442' ,fontSize:24,}}>Your Analytics, </Text>
<Image source={require('../../Assets/image/6.png')} style={{ height: 99, width: 91}} />
</View>
<Text style={{color:'#FFB442' ,fontSize:25,fontWeight:600,marginTop:-71}}>Ashnerr</Text>

    </View>
    <View style={{flexDirection:'row',gap:57,marginVertical:15}}>
    <Text style={{fontSize:13,color:'#BEBEBE',}}>Progress</Text>
    <Text style={{fontSize:13,color:'#BEBEBE',}}>Performance</Text>

<Text style={{fontSize:13,color:'#FFB442',fontWeight:500}}>Rank</Text>

        
   
    </View> 
<Text style={{backgroundColor:'#FFB442',color:'#fff',padding:8,textAlign:'center',width:90,height:32,fontSize:11,borderBottomEndRadius:9,borderTopEndRadius:9}}>12-10-2022</Text>

    <ScrollView>
        
<TouchableOpacity

onPress={() => {
  navigation.navigate('AshneerMehta')
}}>


<Image source={require('../../Assets/image/64.png')} style={{ height: 264, width: 249,borderRadius:9,marginVertical:20}} />

</TouchableOpacity> 

<Image source={require('../../Assets/image/64.png')} style={{ height: 264, width: 249,borderRadius:9,marginVertical:20}} />
<Image source={require('../../Assets/image/64.png')} style={{ height: 264, width: 249,borderRadius:9,marginVertical:20}} />
<Image source={require('../../Assets/image/64.png')} style={{ height: 264, width: 249,borderRadius:9,marginVertical:20}} />
<Image source={require('../../Assets/image/64.png')} style={{ height: 264, width: 249,borderRadius:9,marginVertical:20}} />
<Image source={require('../../Assets/image/64.png')} style={{ height: 264, width: 249,borderRadius:9,marginVertical:20}} />
    </ScrollView>

    </View>
    
    </View>
  )
}

export default Rank

const styles = StyleSheet.create({})