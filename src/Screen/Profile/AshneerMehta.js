import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

const AshneerMehta = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
    <View style={{backgroundColor: '#FF5773',padding:15,borderRadius:14,}}>

    <View style={{ flexDirection:"row",gap:16,}} >
    <Image source={require('../../Assets/image/10.png')} style={{ height: 45, width: 29}} />

    <View style={{ flexDirection:"row",gap:40}} >
    <Text style={{fontWeight:600,fontSize:19,color:'#fff'}}>Ashneer Mehta</Text>


<TouchableOpacity

style={{backgroundColor:'#F8EBF7',padding:5,borderRadius:6,height:25, }}
  onPress={() => {
    navigation.navigate('Editprofile')
  }}>

<Text style={{color:'#FE5A7B',textAlign:'center',width:70,fontWeight:600,fontSize:11,}}>Edit profile</Text>


</TouchableOpacity>

    </View>
    
        </View>
            <Text style={{fontSize:10,fontWeight:600,marginTop:-17,marginLeft:43,color:'#fff'}}>Class 5th</Text>

        </View>
        <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:7}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/65.png')} style={{ height: 24, width: 24}} />
<TouchableOpacity


  onPress={() => {
    navigation.navigate('ChangeClass')
  }}>

<Text style={{color:'#FF5773',fontWeight:600,fontSize:15}}>Change class</Text>


</TouchableOpacity>

</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:7}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/66.png')} style={{ height: 24, width: 24}} />
<TouchableOpacity


  onPress={() => {
    navigation.navigate('MyRewards')
  }}>
<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>My rewards</Text>


</TouchableOpacity>
{/*  */}
</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:5}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/67.png')} style={{ height: 24, width: 24}} />
<TouchableOpacity

  onPress={() => {
    navigation.navigate('AboutStulyfe')
  }}>
<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>About stulyfe</Text> 


</TouchableOpacity>

</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:5}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/68.png')} style={{ height: 24, width: 24}} />
<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>Subscription</Text>
</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:5}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/69.png')} style={{ height: 24, width: 24}} />
<TouchableOpacity


  onPress={() => {
    navigation.navigate('ShareStulyfe')
  }}>

<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>Share stulyfe</Text> 


</TouchableOpacity>
{/* */}
</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:5}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/70.png')} style={{ height: 24, width: 24}} />
<TouchableOpacity


  onPress={() => {
    navigation.navigate('Support')
  }}>

<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>Support</Text>


</TouchableOpacity>

</View>
    </View>

    <View style={{backgroundColor: '#FFF6F7',padding:15,borderRadius:10,marginVertical:5}}>
<View style={{ flexDirection:"row",gap:16,}} >
<Image source={require('../../Assets/image/71.png')} style={{ height: 24, width: 24}} />
<TouchableOpacity


  onPress={() => {
    navigation.navigate('PrivacyPolicy')
  }}>

<Text style={{color:'#FFBFC9',fontWeight:500,fontSize:15}}>Privacy policy</Text>


</TouchableOpacity>
{/* */}
</View>
    </View>
    <Text style={{color:'#858689',fontSize:10,textAlign:'center',marginVertical:20}}>Version 2.0.1</Text>
    </View>
    </View>
  )
}

export default AshneerMehta

const styles = StyleSheet.create({})