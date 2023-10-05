import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20 }}>
 <View style={{flexDirection:'row',gap:243,}}>
<Text style={{color:'#FE5C3B',fontWeight:700,fontSize:22,marginVertical:10}}>Stulyfe</Text>
<TouchableOpacity

  onPress={() => {
    navigation.navigate('Bookmark')
  }}>

<Image source={require('../../Assets/image/Bookmark.png')} style={{ height: 24, width: 24}} />

</TouchableOpacity>

 </View>

 <View style={{backgroundColor: '#fff',padding:15,borderRadius:14,}}>

    <View style={{ flexDirection:"row",gap:16,}} >
    <Image source={require('../../Assets/image/10.png')} style={{ height: 45, width: 29}} />

    <View style={{ flexDirection:"row",gap:98}} >
    <Text style={{fontWeight:600,fontSize:19}}>Ashneer Mehta</Text>
    <Image source={require('../../Assets/image/11.png')} style={{ height: 33, width: 33}} />

    </View>
    
        </View>
        <View style={{flexDirection:'row',gap:200,marginLeft:43,}}>
        <Text style={{fontSize:10,fontWeight:600,marginTop:-17}}>Class 5th</Text>
        <Text style={{fontWeight:700,fontSize:12,marginTop:-10}}>Gold</Text>
        </View>
        </View>

        <ScrollView>

 <View style={{backgroundColor: '#fff',padding:15,borderRadius:14,marginVertical:18}}>
<View style={{flexDirection:'row',gap:10}}>
<Image source={require('../../Assets/image/12.png')} style={{ height: 101, width: 96}} />
<Image source={require('../../Assets/image/13.png')} style={{ height: 101, width: 96}} />
<Image source={require('../../Assets/image/14.png')} style={{ height: 101, width: 96}} />

</View>

<View style={{flexDirection:'row',marginVertical:8,marginLeft:10,gap:55}}>
<Text style={{fontSize:12}}>Mathematics</Text>
<Text style={{fontSize:12}}>Physics</Text>
<Text style={{fontSize:12}}>Chemistry</Text>

</View>


<View style={{flexDirection:'row',gap:10 }}>
<Image source={require('../../Assets/image/17.png')} style={{ height: 101, width: 96}}/>
<TouchableOpacity

  onPress={() => {
    navigation.navigate('EVS')
  }}>

<Image source={require('../../Assets/image/16.png')} style={{ height: 101, width: 96}}/>
</TouchableOpacity>
<Image source={require('../../Assets/image/15.png')} style={{ height: 101, width: 96}}/>

</View>
<View style={{flexDirection:'row',marginVertical:8,marginLeft:14,gap:75}}>
<Text style={{fontSize:12}}>Geography</Text>
<Text style={{fontSize:12}}>EVS</Text>
<Text style={{fontSize:12}}>History</Text>

</View>

<View style={{flexDirection:'row',gap:10,}}>
<TouchableOpacity

onPress={() => {
  navigation.navigate('SubjectChapters1')
}}>

<Image source={require('../../Assets/image/18.png')} style={{ height: 101, width: 96}}/>
</TouchableOpacity>
<Image source={require('../../Assets/image/19.png')} style={{ height: 101, width: 96}} />


</View>
<View style={{flexDirection:'row',marginVertical:8,marginLeft:15,gap:80}}>
<Text style={{fontSize:12,}}>Coading</Text>
<Text style={{fontSize:12,}}>Biology</Text>


</View>
</View>

<View style={{backgroundColor: '#fff',padding:15,borderRadius:14,}}>
<Text style={{fontWeight:600,fontSize:15}}>Stulyfe updates</Text>
<Image source={require('../../Assets/image/23.png')} style={{ height: 120, width: 311,borderRadius:10,marginVertical:10}} />

</View>

<View style={{backgroundColor: '#fff',padding:15,borderRadius:14, marginVertical:15}}>
<Text style={{fontWeight:600,fontSize:15}}>Recently watched</Text>
<Image source={require('../../Assets/image/24.png')} style={{ height:99, width: 225,borderRadius:8,marginVertical:12}} />
<Text style={{fontWeight:500,fontSize:13}}>Roman Numbers: Exploration</Text>
<Text style={{fontWeight:500,fontSize:13,color:'#A5A5A5'}}>Mathematics</Text>

</View>

<View style={{ alignItems:'flex-end',  marginTop:-188}}>
<Image source={require('../../Assets/image/27.png')} style={{ height: 99, width: 90,borderBottomLeftRadius:8,borderTopLeftRadius:8,marginVertical:12}} />
<Text style={{fontWeight:500,fontSize:13}}>Roman Numbers</Text>
<Text style={{fontWeight:500,fontSize:13,color:'#A5A5A5'}}>Science</Text>
</View>

<View style={{backgroundColor: '#fff',padding:15,borderRadius:14, marginVertical:40}}>
<Text style={{fontWeight:600,fontSize:15}}>Best of stulyfe</Text>

<Image source={require('../../Assets/image/25.png')} style={{ height: 99, width: 225,borderRadius:8,marginVertical:12}} />


<Text style={{fontWeight:500,fontSize:13}}>Roman Numbers: Exploration</Text>
<Text style={{fontWeight:500,fontSize:13,color:'#A5A5A5'}}>Mathematics</Text>

</View>

<View style={{ alignItems:'flex-end',  marginTop:-213}}>
<Image source={require('../../Assets/image/27.png')} style={{ height: 99, width: 90,borderBottomLeftRadius:8,borderTopLeftRadius:8,marginVertical:12}} />
<Text style={{fontWeight:500,fontSize:13}}>Roman Numbers</Text>
<Text style={{fontWeight:500,fontSize:13,color:'#A5A5A5'}}>Science</Text>
</View>
<View style={{backgroundColor: '#fff',padding:15,borderRadius:14, marginVertical:40}}>
<View style={{flexDirection:'row',gap:11}}>
<Image source={require('../../Assets/image/26.png')} style={{ height: 81, width: 92}} />

<Text style={{color:'rgba(254, 92, 59, 0.47)',fontWeight:400,fontSize:25}}>Share<Text style={{color:'rgba(255, 22, 105, 1)' ,fontSize:25,fontWeight:'600'}}> Stulyfe App</Text></Text>
</View>
<TouchableOpacity

style={{backgroundColor:'rgba(245, 116, 191, 1)',borderRadius:7,width:140,marginTop:-40,marginLeft:104}}
  onPress={() => {
    navigation.navigate('Share')
  }}>

<Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:15,padding:11,}}>Send Code</Text>

</TouchableOpacity>



</View>
</ScrollView>

</View>
        </View>

  )
}

export default Screen1

const styles = StyleSheet.create({
   
})