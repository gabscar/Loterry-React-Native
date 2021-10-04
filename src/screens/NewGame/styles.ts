import styled from "styled-components/native";

export const GameSection = styled.View`
    flex:1;
    flex-direction: column;
    align-self: center;  
    justify-content: flex-start;
    margin-top: 20px;
`
export const TextGames = styled.Text`
    font-style:italic;
    font-weight: bold;
    color: #707070;
    font-size: 17px;
   
`

export const ViewTexts = styled.View`
    flex-direction: column;
    margin-left: 14px;
    margin-bottom: 12px;
`

export const TextTitle= styled.Text`
    font-style: italic;
    font-weight: bold;
    color: #707070;
    font-size: 20px;
    margin-bottom: 12px;
`

export const TexSubTitle = styled.Text`
    font-weight: normal;
`

export const TextTitleDescribe = styled.Text`
    color: #707070;
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
`


export const TextDescribe = styled.Text`
    color: #707070;
    font-size: 17px;
    font-style: italic;
    text-align: justify;
`

export const DescribeContainer = styled.View`
    flex-direction: column;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left:14px;
    margin-right:14px;
`

export const NumberContainer = styled.View`

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const ContainerButtonsActionGame= styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-top: 15px;
`
export const ButtonsActionGame = styled.TouchableOpacity`
    background-color: #f7f7f7;
    border-color: #27c383;
    border-width: 2px;
    border-radius: 10px;
    margin-left: 12px;
    height: 50px;
    justify-content: center;
    align-items: center;
    padding: 2%;
    flex-direction: row;
`
export const TextActionButtons = styled.Text`
    font-weight:bold; 
    color: #27c383; 
    text-align: center;
    

`

export const ContainerActionsLeft = styled.View`
    flex-direction: row;
    margin-left: 11px;
`

export const ContainerActionsRigth = styled.View`
    margin-right: 25px;
`