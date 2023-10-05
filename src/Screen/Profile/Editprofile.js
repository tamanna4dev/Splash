import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Editprofile = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20, }}>
<Text style={{color:'rgba(255, 22, 105, 1)',fontWeight:500,fontSize:25,textAlign:'center',marginVertical:22}}>Create profile</Text>
<Text style={styles.lables}>Enter full name</Text>
          <TextInput style={styles.input}
  
            placeholder=" Zavier mustag"/>

<Text style={styles.lables}>Enter email-id</Text>
<TextInput style={styles.input}
           
            placeholder=" Zavier mustag"/>

<Text style={styles.lables}>Enter your city</Text>
<TextInput style={styles.input}
          
            placeholder="Example@xyz.com"/>

<Text style={styles.lables}>Date of birth</Text>
<TextInput style={styles.input}
         
            placeholder=" DD/MM/YYYY"/>

<Text style={styles.lables}>Gender</Text>

<View style={{flexDirection:'row',gap:18}}>
            <TextInput style={styles.inputs}
          
            placeholder="Male"/>
              <TextInput style={styles.inputs}
         
            placeholder="Female"/>
            </View>

            <TouchableOpacity

        style={{backgroundColor:'rgba(245, 116, 191, 1)',borderRadius:7,marginVertical:30}}
          onPress={() => {
            navigation.navigate('Save')
          }}>

<Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:15,padding:11}}>Save</Text>

        </TouchableOpacity>

        <TouchableOpacity


  onPress={() => {
    navigation.navigate('LogOut')
  }}>

        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:12}}>
    <Image source={require('../../Assets/image/72.png')} style={{ height: 18, width:16,}} />
           <Text style={{color:'#FF5773',fontSize:15,fontWeight:600}}>Logout</Text> 
        </View>
        </TouchableOpacity>

    </View>
      
    </View>
  )
}

export default Editprofile



const styles = StyleSheet.create({
  input: {
    height: 52,
        backgroundColor:'rgba(254, 254, 254, 0.5)',
        padding: 10,
        color:'#cec6c6',
        borderRadius:6,
        marginVertical:8,
        borderWidth:1,
        borderColor:'#fff',
        width:308
},
lables: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',




},
inputs: {
  height: 52,
      backgroundColor:'rgba(254, 254, 254, 0.5)',
      padding: 10,
      color:'#cec6c6',
      borderRadius:6,
      marginVertical:8,
      borderWidth:1,
      borderColor:'#fff',
      width:145,
      // textAlign:'center'
},
})