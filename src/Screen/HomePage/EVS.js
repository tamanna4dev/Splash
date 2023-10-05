import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const EVS = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(230 230 230)', padding: 20, }}>
<Text style={{color:'#FF5773',fontWeight:600,fontSize:22,marginVertical:10,textAlign:'center'}}>EVS</Text>

<View style={{flexDirection:'row',gap:20,marginVertical:10}}>
<TouchableOpacity

          onPress={() => {
            navigation.navigate('SubjectChapters')
          }}>

<Image source={require('../../Assets/image/29.png')} style={{ height: 172, width: 140,borderRadius:6}} />

        </TouchableOpacity>
 <Image source={require('../../Assets/image/29.png')} style={{ height: 172, width: 140}} />

        </View>
        <View style={{flexDirection:'row',gap:20,marginVertical:10}}>
 <Image source={require('../../Assets/image/29.png')} style={{ height: 172, width: 140,borderRadius:6}} />
 <Image source={require('../../Assets/image/29.png')} style={{ height: 172, width: 140,borderRadius:6}} />

        </View>
        <View style={{flexDirection:'row',gap:20,marginVertical:10}}>
 <Image source={require('../../Assets/image/29.png')} style={{ height: 172, width: 140,borderRadius:6}} />
 <Image source={require('../../Assets/image/29.png')} style={{ height: 172, width: 140,borderRadius:6}} />

        </View>

    </View>
    </View>
  )
}

export default EVS

const styles = StyleSheet.create({})