import React,{ useState, useEffect }  from "react";
import { Icon } from 'react-native-elements'
import {View,TextInput,Text,StyleSheet } from 'react-native';
import { ButtonElement, ButtonForgot, ButtonText, ForgotText, FormContainer, InputText, LoginContainer, TGLContainer, TGLText, TitleText } from "./styles";
import { emailValidator,isEmpty } from '../../utils/utils';
import Logo from "../../components/Logo/Logo";


const LoginScreen: React.FC<{navigation:any}>=({ navigation })=>{
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [color,setColor]= useState('transparent');
    
    function handleClickForget(){
        navigation.navigate("Forget");
    }

    function handleClickSignUp(){
        navigation.navigate("CreateAcc");
    }
    function handleClickSubmit(){
       const emailError = emailValidator(email.value);
       const passwordError = isEmpty(password.value); 
      
       
       if (emailError || passwordError) {
          setEmail({ ...email, error: emailError });
          setPassword({ ...password, error: passwordError });
          return;
       }
    }
    return(
        <View style={{ flex: 1 }}>
            <View  style={styles.container}>
                <LoginContainer>
                        <Logo/>
                        <FormContainer>
                            <TitleText>Authentication</TitleText>
                            <InputText
                                placeholder='User'
                                autoCapitalize='none'
                                defaultValue={email.value}
                                color={color}
                                onChangeText ={email=>setEmail({value:email, error:''})}
                            />{email.error ? <Text style={styles.error}>{email.error}</Text> : null}
                            
                            <InputText
                                    placeholder='Password'
                                    autoCapitalize='none'
                                    secureTextEntry
                                    defaultValue={password.value}
                                    color={password.error?'red':'transparent'}
                                    onChangeText ={password=>setPassword({value:password, error:''})}
                            />{password.error ? <Text style={styles.error}>{password.error}</Text> : null}
                          
                            <ButtonForgot onPress={handleClickForget}>
                                <ForgotText> I forget my password</ForgotText>
                            </ButtonForgot>
                            <ButtonElement onPress = {handleClickSubmit}>
                                <ButtonText color={"#B5C401"}>Log In  <Icon 
                                        name = 'arrow-right' 
                                        type='feather' 
                                        color="#B5C401" 
                                        size={25}  />
                                </ButtonText>
                            </ButtonElement>
                        </FormContainer>
                </LoginContainer>
                <ButtonElement onPress={handleClickSignUp}>
                    <ButtonText color={'#707070'}>Sign Up  <Icon 
                            name = 'arrow-right' 
                            type='feather' 
                            color="#707070" 
                            size={25}  />
                    </ButtonText>
                </ButtonElement>
                
            </View>
        </View>
    )
}


export default LoginScreen;


const styles = StyleSheet.create({

    container: {
        marginTop:90,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        
    },
    error: {
        fontSize: 14,
        color: 'red',
        paddingHorizontal: 4,
        paddingTop: 4,
    },
})