
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
        marginTop:30px;

`
export const InputText = styled.TextInput<{color:string}>`
        width: 320;
        height:70;
        backgroundColor: white;
        paddingLeft:12;
        borderBottomColor: ${({color})=>color};
        borderTopColor: ${({color})=>color ==='transparent'? '#EBEBEB':color};
        borderBottomWidth:2;
        borderTopWidth:2;
        color:black;

`
export const TitleText = styled.Text`
        color: #707070;
        font-size: 28px;
        font-weight: bold;
        font-style: italic;
        text-align:center;
        marginBottom:10px;

`

export const ButtonElement = styled.TouchableOpacity`
        justifyContent: center;
        alignItems: center;
        marginTop:20;

`

export const ButtonText = styled.Text<{color:string}>`
        color: ${({color})=>color};
        fontSize: 35;
        fontWeight: bold;
`

export const ButtonForgot = styled.TouchableOpacity`
        alignItems: flex-end;
`
export const ForgotText = styled.Text`
        font-size: 16;
        color: #C1C1C1;
        font-style: italic;
`