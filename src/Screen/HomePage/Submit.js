import { CheckBox,StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, {useState} from 'react';

const Submit = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [isSelectedtwo, setSelectiontwo] = useState(false);
  const [isSelectedthree, setSelectionthree] = useState(false);
  const [isSelecteds, setSelections] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
<Text style={{color:'#FF5773',fontWeight:600,fontSize:22,textAlign:'center',marginVertical:10}}>Test</Text>


<Text style={{color:'#A5A5A5',fontSize:18,fontWeight:500,}}>Topic</Text>
<Text style={{color:'#4E4E4E',fontSize:26,fontWeight:600,}}>Roman Numbers</Text>
<View style={{flexDirection:'row',gap:166,marginVertical:11}}>
    <Text style={{color:'#A9A9A9',fontSize:12}}>Question 10 of 10</Text>
    <Text style={{color:'#FF5773',fontWeight:600}}>40 sec</Text>
</View>
<View style={{flexDirection:'row',gap:15}}>
<Image source={require('../../Assets/image/51.png')} style={{ height: 50, width: 127}} />
<Image source={require('../../Assets/image/49.png')} style={{ height: 88, width: 166,borderRadius:10}} />
    </View>
    <View style={{marginVertical:10}}>
    <View style={{flexDirection:'row',gap:15,}}>
<Image source={require('../../Assets/image/52.png')} style={{ height: 80, width: 149}} />
<Image source={require('../../Assets/image/53.png')} style={{ height: 80, width: 149}} />
</View>
<View style={{flexDirection:'row',gap:15}}>

    <View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:18,alignItems:'center',borderBottomRightRadius:10,borderBottomLeftRadius:10,height: 60, width: 149,marginTop:-6}}>


      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Triangle</Text>
      </View>
      
  
</View>
  
<View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:18,alignItems:'center',borderBottomRightRadius:10,borderBottomLeftRadius:10,height: 60, width: 149,marginTop:-6}}>



<View style={styles.checkboxContainer}>
  <CheckBox
    value={isSelectedtwo}
    onValueChange={setSelectiontwo}
    style={styles.checkbox}
  />
  <Text style={styles.label}>Triangle</Text>
</View>


</View>
</View>
 </View>

 <View style={{flexDirection:'row',gap:15,}}>
<Image source={require('../../Assets/image/54.png')} style={{ height: 80, width: 149}} />
<Image source={require('../../Assets/image/55.png')} style={{ height: 80, width: 149}} />
</View>
<View style={{flexDirection:'row',gap:15}}>

    <View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:18,alignItems:'center',borderBottomRightRadius:10,borderBottomLeftRadius:10,height: 60, width: 149,marginTop:-6}}>


      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelectedthree}
          onValueChange={setSelectionthree}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Triangle</Text>
      </View>
      
  
</View>
  
<View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:18,alignItems:'center',borderBottomRightRadius:10,borderBottomLeftRadius:10,height: 60, width: 149,marginTop:-6}}>



<View style={styles.checkboxContainer}>
  <CheckBox
    value={isSelecteds}
    onValueChange={setSelections}
    style={styles.checkbox}
  />
  <Text style={styles.label}>Triangle</Text>
</View>


</View>
</View>
<Text style={{marginVertical:20}}></Text>

<TouchableOpacity
style={{height:50,backgroundColor:'#FF5773',borderRadius:7,}}
          onPress={() => {
            navigation.navigate('Submit')
          }}>

<Text style={{color:'#fff',textAlign:'center',padding:16,fontSize:15,fontWeight:500,}}>Submit</Text>

        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Submit

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
  gap:8

  },
  checkbox: {
    alignSelf: 'center',
    borderWidth:'none'
  },
  label: {
fontWeight:500
  },
});