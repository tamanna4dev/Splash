import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const LoginNo  = ({navigation}) => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  const [f1,setF1] = useState('');
  const [f2,setF2] = useState('');
  const [f3,setF3] = useState('');
  const [f4,setF4] = useState('');
  const [f5,setF5] = useState('');
  const [f6,setF6] = useState('');
  const [count,setCount]= useState(0);

    useEffect(()=>{
       const interval= setInterval(()=>{
    if(count == 0) {
        clearTimeout(interval)
    } else {
        setCount(count - 4); 
        }
    }, 1000);
    return ()=>{
        clearInterval(interval);
    };},[count]);


    const otpValidate =()=>{
        let otp ='123456';
        let enderedOtp= f1,f2,f3,f4,f5,f6;
        if(enderedOtp==otp){
            Alert.alert('OTP Matched')
        } else {
            Alert.alert('Wrong OTP');
        }
    }

    return (

       
            
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,width:340 }}>
<Image source={require('../../Assets/image/6.png')} style={{ height: 220, width: 250}} />

     
<Text style={{fontSize:28,fontWeight:700,color:'rgba(255, 22, 105, 1)',}}>Enter your</Text>
<Text style={{fontSize:28,fontWeight:700,color:'rgba(255, 22, 105, 1)',}}> mobile number</Text>


  <Text style={{color:'rgba(131, 145, 161, 0.58)',fontSize:14,}}>Enter the verification code sent on your </Text>
  <Text style={{color:'rgba(131, 145, 161, 0.58)',fontSize:14,}}>mobile. </Text>


            <View style={styles.otpView}>

                <TextInput ref={et1} style={[styles.inputView, {borderColor: f1.length >= 10 ? 'blue' : '#000'}]} keyboardType="number-pad" maxLength={100}
                value={f1}
                    onChangeText={txt => {
                        setF1(txt)
                        if (txt.length >= 100) {
                            et2.current.focus();
                       

                        } 
                        else if (txt.length < 100 ) {
                            et1.current.focus();
                        }
                    }}
                />
              
               
              
                
                
            </View>
<TouchableOpacity

        style={{backgroundColor:'rgba(245, 116, 191, 1)',borderRadius:7,marginVertical:30}}
          onPress={() => {
            navigation.navigate('OTPVerification')
          }}>

<Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:15,padding:11}}>Send Code</Text>

        </TouchableOpacity>
      

        </View>
        </View>     


  )
}

export default LoginNo

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor:'rgba(254, 254, 254, 0.5)',
        padding: 10,
        color:'#666',
        borderRadius:6,
        marginVertical:15,
        borderWidth:1,
        borderColor:'#fff'
    },
    otpView: {
      width: '94%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',

  },
  inputView: {
      width: 300,
      height: 52,
      borderWidth: 0.5,
      borderRadius: 10,
  
     
      fontSize: 18,
      fontWeight: '700',
      marginVertical:20
      
  },
    })