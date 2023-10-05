import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Onboardingscreen1 = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20, }}>
   
            <Image source={require('../../Assets/image/2.png')} style={{ height: 346, width: 290, }} />
<Text style={{fontSize:30,fontWeight:700,color:'#FF5874',}}>Study hard and, </Text>
   <Text  style={{fontSize:30,fontWeight:700,color:'#FF5874'}}>Stay focused</Text>
<View style={{marginVertical:10}}>
  <Text style={{color:'#636363',fontSize:14}}>Lorem Ipsum is simply dummy text of the printing</Text>
  <Text style={{color:'#636363',fontSize:14}}>and typesetting industry. Lorem Ipsum has been</Text>
  <Text style={{color:'#636363',fontSize:14}}>the industry's standard dummy text ever since the</Text>
  <Text style={{color:'#636363',fontSize:14}}>1500s</Text>
</View>
<View style={{justifyContent: 'center', alignItems: 'center',}}>
<TouchableOpacity
        
          onPress={() => {
            navigation.navigate('Onboardingscreen2')
          }}>

<Image source={require('../../Assets/image/0.png')} style={{ height: 50, width: 50,marginVertical:15 }} />

        </TouchableOpacity>
<Text style={{color:'#707070',fontSize:12,}}>By joining Stulyfe online coaching platform you agree with </Text>
<Text><Text style={{color:'#707070',fontSize:12}}> our </Text><Text style={{color:'#1E1E1E',fontSize:12,fontWeight:700}}>Terms & Conditions </Text><Text style={{color:'#707070',fontSize:12}}>and </Text><Text style={{color:'#1E1E1E',fontSize:12,fontWeight:700}}>Privacy Policy.</Text></Text>

</View>
    </View>

    </View>
  )
}

export default Onboardingscreen1

const styles = StyleSheet.create({})