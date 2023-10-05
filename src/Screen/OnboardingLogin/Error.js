import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');

const Error = ({navigation}) => {
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20, }}>
   
            <Image source={require('../../Assets/image/8.png')} style={{ height: 240, width: 250,marginVertical:30, }} />
<Text style={{fontSize:28,fontWeight:700,color:'rgba(255, 92, 59, 1)',}}>Oops! </Text>
   <Text  style={{fontSize:26,fontWeight:700,color:'rgba(255, 22, 105, 1):'}}>Something went wrong</Text>

 




<TouchableOpacity

        style={{backgroundColor:'rgba(245, 116, 191, 1)', height: height * 0.05,borderRadius:7,marginTop:150}}
          onPress={() => {
            navigation.navigate('Createprofile')
          }}>

<Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:15,padding:11}}>Back to login</Text>

        </TouchableOpacity>
      

        </View>


    </View>
  )
}

export default Error

const styles = StyleSheet.create({

    })