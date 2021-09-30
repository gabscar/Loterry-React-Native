import React,{useState} from 'react'
import {View,StyleSheet,Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Logo from '../../components/Logo/Logo';
import { ButtonElement, ButtonText, CreateAcountContainer, FormContainer, InputText, TitleText } from './style';
import { emailValidator,isEmpty } from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import api from "../../services/api";
const CreateAccountScreen: React.FC=()=>{
   
    const [email, setEmail] = useState({ value: '', error: '' });
    const [name, setName] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const navigation=useNavigation();
    async function handleClickSubmit(){
       const emailError = emailValidator(email.value);
       const passwordError = isEmpty(password.value); 
       const nameError = isEmpty(name.value);
       
       if (emailError || passwordError || nameError) {
          setEmail({ ...email, error: emailError });
          setPassword({ ...password, error: passwordError });
          setName({ ...name, error: nameError });
         
          return;
       }
       try{
        await api.post('/users',{
            "administrator": false,
            "email": email.value,
            "password": password.value,
            "name": name.value
        })
        navigation.navigate("Login");
       }catch(err){
            console.log(err)
       }

       
    }
    function handleClickBack(){
        navigation.goBack();
    }
    return(
        <View style={{ flex: 1 }}>
            <View  style={styles.container}>
                <CreateAcountContainer>
                    <Logo/>
                    <TitleText> Registration </TitleText>
                    <FormContainer>
                        <InputText
                                    placeholder='Name'
                                    autoCapitalize='none'
                                    defaultValue={name.value}
                                    color={name.error?'red':'transparent'}
                                    onChangeText ={name=>setName({value:name, error:''})}
                        />{name.error ? <Text style={styles.error}>{name.error}</Text> : null}
                        <InputText
                                    placeholder='Email'
                                    autoCapitalize='none'
                                    defaultValue={email.value}
                                    color={email.error?'red':'transparent'}
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
                        <ButtonElement onPress={handleClickSubmit}>
                                <ButtonText color={"#B5C401"}>Register  <Icon 
                                        name = 'arrow-right' 
                                        type='feather' 
                                        color="#B5C401" 
                                        size={25}  />
                                </ButtonText>
                        </ButtonElement>
                    </FormContainer>
                    
                </CreateAcountContainer>
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


export default CreateAccountScreen;



const styles = StyleSheet.create({

    container: {
        marginTop:80,
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