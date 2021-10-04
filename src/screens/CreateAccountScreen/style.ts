
import styled from "styled-components/native"



export const CreateAcountContainer = styled.View`
        display:flex;
        margin-bottom: 20px;
        border-width: 1px;
        border-color: #dddddd;
        border-radius: 15px;
        align-items: center;
        width: 350px;
        height: 450px;
        
`
export const FormContainer = styled.View`
        margin-top:30px;

`
export const InputText = styled.TextInput<{color:string}>`
        width: 320;
        height:70;
        background-color: white;
        padding-left:12;
        border-bottom-color: ${({color})=>color};
        border-top-color: ${({color})=>color ==='transparent'? '#EBEBEB':color};
        border-bottom-width:2;
        border-top-width:2;
        color:black;

`
export const TitleText = styled.Text`
        color: #707070;
        font-size: 28px;
        font-weight: bold;
        font-style: italic;
        text-align:center;
        margin-bottom:10px;

`

export const ButtonElement = styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
        margin-top:20;

`

export const ButtonText = styled.Text<{color:string}>`
        color: ${({color})=>color};
        font-size: 35px;
        font-weight: bold;
`

export const ButtonForgot = styled.TouchableOpacity`
        align-items: flex-end;
`
export const ForgotText = styled.Text`
        font-size: 16;
        color: #C1C1C1;
        font-style: italic;
`