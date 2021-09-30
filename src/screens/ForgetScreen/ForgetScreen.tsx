import React,{useState} from 'react'

import {View,TextInput,Text,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Logo from '../../components/Logo/Logo';
import { ButtonElement, ButtonText, ForgetContainer, FormContainer, InputText, TitleText } from './styles';
import { emailValidator} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native'

const ForgetScreen : React.FC=()=>{
   
    const [email, setEmail] = useState({ value: '', error: '' });
    const navigation=useNavigation()

    function handleClickBack(){
        navigation.goBack();
    }

    function handleSubmit(){
        const emailError = emailValidator(email.value);
        if (emailError ) {
            setEmail({ ...email, error: emailError });
            return;
         }
         navigation.navigate("Login");
    }

    return(
        <View style={{ flex: 1 }}>
            <View  style={styles.container}>
                <ForgetContainer>
                    <Logo/>
                    <FormContainer>
                        <TitleText>Reset Password</TitleText>
                        <InputText
                            placeholder='Email'
                            autoCapitalize='none'
                            defaultValue={email.value}
                            color={email.error?'red':'transparent'}
                            onChangeText ={email=>setEmail({value:email, error:''})}
                        />{email.error ? <Text style={styles.error}>{email.error}</Text> : null}
                        <ButtonElement onPress = {handleSubmit}>
                                <ButtonText color={"#B5C401"}>Send Link  <Icon 
                                        name = 'arrow-right' 
                                        type='feather' 
                                        color="#B5C401" 
                                        size={25}  />
                                </ButtonText>
                            </ButtonElement>
                    </FormContainer>
                </ForgetContainer>
                <ButtonElement onPress={handleClickBack}>
                        <ButtonText color={'#707070'}>Back <Icon 
                                name = 'arrow-left' 
                                type='feather' 
                                color="#707070" 
                                size={25}  />
                        </ButtonText>
                    </ButtonElement>
            </View>
        </View>
    )
}

export default ForgetScreen;



const styles = StyleSheet.create({

    container: {
        marginTop:150,
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