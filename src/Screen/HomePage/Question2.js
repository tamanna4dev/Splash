import { CheckBox,StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react';


const Question2 = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [isSelectedtwo, setSelectiontwo] = useState(false);
  const [isSelectedthree, setSelectionthree] = useState(false);
  const [isSelecteds, setSelections] = useState(false);
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(242 237 237)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20, }}>
<Text style={{color:'#FF5773',fontWeight:600,fontSize:22,textAlign:'center',marginVertical:10}}>Test</Text>


<Text style={{color:'#A5A5A5',fontSize:18,fontWeight:500,}}>Topic</Text>
<Text style={{color:'#4E4E4E',fontSize:26,fontWeight:700,}}>Roman Numbers</Text>
<View style={{flexDirection:'row',gap:160,marginVertical:11}}>
    <Text style={{color:'#A9A9A9'}}>Question 01 of 10</Text>
    <Text style={{color:'#06BA68',fontWeight:600}}>12 : 30</Text>
</View>
<View style={{flexDirection:'row',gap:15}}>
<Image source={require('../../Assets/image/51.png')} style={{ height: 50, width: 127}} />
<Image source={require('../../Assets/image/47.png')} style={{ height: 88, width: 166,borderRadius:10}} />

</View>
<View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:14,borderRadius:8,height:48}}>


      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Triangle</Text>
      </View>
      
  
</View>
  
<View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:14,borderRadius:8,height:48}}>


<View style={styles.checkboxContainer}>
  <CheckBox
    value={isSelectedtwo}
    onValueChange={setSelectiontwo}
    style={styles.checkbox}
  />
  <Text style={styles.label}>Triangle</Text>
</View>


</View>

<View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:14,borderRadius:8,height:48}}>



      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelectedthree}
          onValueChange={setSelectionthree}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Triangle</Text>
      </View>
      
     

</View>
<View style={{backgroundColor:'#fff4f5',marginVertical:10,padding:14,borderRadius:8,height:48}}>

<View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelecteds}
          onValueChange={setSelections}
          style={styles.checkbox}
        />
        <Text style={styles.label}>All of the above</Text>
      </View>
      </View>


<Text style={{marginVertical:50}}></Text>

<TouchableOpacity
style={{height:50,backgroundColor:'#FF5773',borderRadius:7,}}
          onPress={() => {
            navigation.navigate('Submit')
          }}>

<Text style={{color:'#fff',textAlign:'center',padding:16,fontSize:15,fontWeight:500,}}>Next</Text>

        </TouchableOpacity>
    </View>
 
    </View>
  )
}

export default Question2

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