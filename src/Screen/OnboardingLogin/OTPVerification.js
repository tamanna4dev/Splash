import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const OTPVerification  = ({navigation}) => {
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
    const [count,setCount]= useState(60);


    useEffect(()=>{
       const interval= setInterval(()=>{
    if(count == 0) {
        clearTimeout(interval)
    } else {
        setCount(count - 1 ); 
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

        <View style={styles.conatainer}>
            
        <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20, }}>
<View style={{ justifyContent: 'center', alignItems: 'center',}}>
<Image source={require('../../Assets/image/7.png')} style={{ height: 220, width: 250}} />

    </View>         
<Text style={{fontSize:28,fontWeight:700,color:'rgba(255, 22, 105, 1)',marginVertical:10}}>OTP Verification</Text>


  <Text style={{color:'rgba(131, 145, 161, 0.58)',fontSize:14,}}>Enter the verification code sent on your </Text>
  <Text style={{color:'rgba(131, 145, 161, 0.58)',fontSize:14,}}>mobile. </Text>


            <View style={styles.otpView}>

                <TextInput ref={et1} style={[styles.inputView, {borderColor: f1.length >= 1 ? 'blue' : '#000'}]} keyboardType="number-pad" maxLength={1}
                value={f1}
                    onChangeText={txt => {
                        setF1(txt)
                        if (txt.length >= 1) {
                            et2.current.focus();
                        } else if (txt.length < 1) {
                            et1.current.focus();
                        }
                    }}
                />
                <TextInput ref={et2} style={[styles.inputView, {borderColor: f2.length >= 1 ? 'blue' : '#000'}]}keyboardType="number-pad" maxLength={1} value={f2} onChangeText={txt => {
                    setF2(txt)
                    if (txt.length >= 1) {
                        et3.current.focus();
                    } else if (txt.length < 1) {
                        et1.current.focus();
                    }
                }} />
                <TextInput ref={et3} style={[styles.inputView, {borderColor: f3.length >= 1 ? 'blue' : '#000'}]} keyboardType="number-pad" maxLength={1} value={f3}
                    onChangeText={txt => {
                        setF3(txt)
                        if (txt.length >= 1) {
                            et4.current.focus();
                        } else if (txt.length < 1) {
                            et2.current.focus();
                        }
                    }}
                />
                <TextInput ref={et4} style={[styles.inputView, {borderColor: f4.length >= 1 ? 'blue' : '#000'}]}keyboardType="number-pad" maxLength={1} value={f4}
                    onChangeText={txt => {
                        setF4(txt)
                        if (txt.length >= 1) {
                            et5.current.focus();
                        }
                        else if (txt.length < 1) {
                            et3.current.focus();
                        }
                    }}
                />
                <TextInput ref={et5} style={[styles.inputView, {borderColor: f5.length >= 1 ? 'blue' : '#000'}]}keyboardType="number-pad" maxLength={1} value={f5}
                    onChangeText={txt => {
                        setF5(txt)
                        if (txt.length >= 1) {
                            et6.current.focus();
                        } else if (txt.length < 1) {
                            et4.current.focus();
                        }
                    }}
                />
                <TextInput ref={et6} style={[styles.inputView, {borderColor: f6.length >= 1 ? 'blue' : '#000'}]} keyboardType="number-pad" maxLength={1} value={f6}
                    onChangeText={txt => {
                        setF6(txt)
                        if (txt.length >= 1) {
                            et6.current.focus();
                        } else if (txt.length < 1) {
                            et5.current.focus();
                        }
                    }}
                />
            </View>
   
            <TouchableOpacity

style={{backgroundColor:'rgba(245, 116, 191, 1)',borderRadius:7,}}
  onPress={() => {
    navigation.navigate('Createprofile')
  }}>

<Text style={{textAlign:'center',color:'#fff',fontWeight:'600',fontSize:15,padding:11}}>Verify</Text>

</TouchableOpacity>
                    <View style={styles.resendView}> 
                    <Text style={{fontSize:13, fontWeight:'400', color:count== 0 ? 'blue': 'gray'}}
                    onPress={()=>{
                        setCount(60);
                    }}
                    > Resend OTP in  </Text>
                    {count !==0 && (
                        <Text style={{fontSize:13,marginLeft:-4,color:count== 0 ? 'blue': 'gray'}}>{count + 'seconds'}</Text>
                    )}
                    
            </View>
        </View>
        </View>
    )
}

export default OTPVerification 

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },

    otpView: {
        width: '94%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    inputView: {
        width: 40,
        height: 52,
        borderWidth: 0.5,
        borderRadius: 10,
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        marginVertical:40
        
    },

  
    resendView:{
        flexDirection:'row',
         alignSelf:'center',
          marginTop:17, 
         marginBottom:10,
  
    }
})
