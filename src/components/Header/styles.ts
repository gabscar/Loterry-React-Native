import styled from "styled-components";


export const GameSection = styled.View`
    flex:1;
    flex-direction: column;
    align-self: center;  
    justify-content: flex-start;
    margin-top: 40px;
`

export const HeaderContainer = styled.View`
   
    top:0;
    height: 80px;
    border-bottom-color:#ebebeb;
    border-bottom-width: 2px;
    flex-direction:row;
    justify-content:space-between;
`
export const TGLText = styled.Text`
        color: #707070;
        font-size: 32px;
        font-weight: bold;
        
`;

export const TGLContainer = styled.View`
        background-color:#b5c401;
        height:10px;
        border-radius:15px;
        width: 63px;
`

export const LogoContainer = styled.View`
        margin-top: 20px;
        margin-left: 20px;
       
`

export const ButtonLogOut = styled.TouchableOpacity`

        justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-right: 20px;
        flex-direction: row;
`

export const TextButton = styled.Text`

        color: #707070;
        font-style: italic;
        font-weight:bold;
        padding-right: 4px;
        
`
