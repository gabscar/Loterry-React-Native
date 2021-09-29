
import styled from "styled-components/native"
import { Button} from 'react-native-elements';


export const LoginContainer = styled.View`
        display:flex;
        margin-bottom: 38px;
        border-width: 1px;
        border-color: #dddddd;
        border-radius: 15px;
        align-items: center;
        width: 350px;
        height: 400px;
        
`

export const TGLText = styled.Text`
        color: #707070;
        font-size: 44px;
        font-weight: bold;
        
`;

export const TGLContainer = styled.View`
        backgroundColor:#b5c401;
        height:15px;
        borderRadius:15px;
`

export const FormContainer = styled.View`

        marginTop:70px;

`
export const InputText = styled.TextInput<{color:string}>`
        width: 320;
        height:70;
        borderRadius:12;
        backgroundColor: white;
        paddingLeft:12;
        borderBottomColor: ${({color})=>color};
        borderTopColor: ${({color})=>color};
        borderBottomWidth:2;
        borderTopWidth:2;
        marginBottom:10px;
        color:black;

`

export const ButtonElement = styled.TouchableOpacity`
        justifyContent: center;
        alignItems: center;
        marginTop:30;

`

export const ButtonText = styled.Text`
    color: #707070;
    fontSize: 35;
    fontWeight: bold;
`