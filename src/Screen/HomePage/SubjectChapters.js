import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SubjectChapters = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(230 230 230)', padding: 20, }}>
<Text style={{color:'#FF5773',fontWeight:600,fontSize:22,marginVertical:10,textAlign:'center'}}>EVS</Text>

<View style={{flexDirection:'row',gap:20,marginVertical:10}}>
<TouchableOpacity

          onPress={() => {
            navigation.navigate('EachChapters')
          }}>

<Image source={require('../../Assets/image/31.png')} style={{ height: 172, width: 150}} />
    </TouchableOpacity>
 <Image source={require('../../Assets/image/33.png')} style={{ height: 172, width: 150}} />

        </View>
        <View style={{flexDirection:'row',gap:20,marginVertical:10}}>
 <Image source={require('../../Assets/image/34.png')} style={{ height: 172, width: 150}} />
 <Image source={require('../../Assets/image/35.png')} style={{ height: 172, width: 150}} />

        </View>
        <View style={{flexDirection:'row',gap:20,marginVertical:10}}>
 <Image source={require('../../Assets/image/36.png')} style={{ height: 172, width: 150}} />
 <Image source={require('../../Assets/image/37.png')} style={{ height: 172, width: 150}} />

        </View>

    </View>
    </View>
  )
}

export default SubjectChapters

const styles = StyleSheet.create({})