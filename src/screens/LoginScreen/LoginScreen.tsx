import React,{ useState, useEffect }  from "react";
import { Icon } from 'react-native-elements'
import {View,TextInput,Text,StyleSheet } from 'react-native';
import { ButtonElement, ButtonText, FormContainer, InputText, LoginContainer, TGLContainer, TGLText } from "./styles";




const LoginScreen: React.FC=()=>{
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [color,setColor]= useState('transparent')

    const [load,setLoad] = useState(true)
    return(
        <View  style={styles.container}>
             
            <LoginContainer>
                    <View>
                        <TGLText>TGL</TGLText>
                        <TGLContainer/>
                    </View>
                    <FormContainer>
                        <InputText
                            placeholder='User'
                            autoCapitalize='none'
                            defaultValue={user}
                            color={color}
                            onChangeText ={user=>setUser(user)}
                        >
                        </InputText>
                        <InputText
                            placeholder='Password'
                            autoCapitalize='none'
                            defaultValue={password}
                            color={color}
                            onChangeText ={user=>setUser(user)}
                        >
                        </InputText>
                        <ButtonElement>
                            <ButtonText>Log In  <Icon 
                                    name = 'arrow-right' 
                                    type='feather' 
                                    color="#000000" 
                                    size={25}  />
                            </ButtonText>
                        </ButtonElement>
                    </FormContainer>
            </LoginContainer>
            
        </View>
    )
}


export default LoginScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    titleButton:{
        color:'white',
        fontSize:20,
        marginRight:12,
        fontWeight:'bold'
    }
})