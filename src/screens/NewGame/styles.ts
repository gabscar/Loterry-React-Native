import styled from "styled-components";

import {Button} from 'react-native'
export const GameSection = styled.View`
    flex:1;
    flex-direction: column;
    align-self: center;  
    justify-content: flex-start;
    margin-top: 40px;
`

export const GameMode = styled.View`


`
interface PropsBtn{
    color: string;
    borderColor: string;
}
export const ButtonGameMode = styled.TouchableOpacity<PropsBtn>`
   
    
    background-color: ${({color}) => color};
    border-color: ${({borderColor}) => borderColor};
    border-width: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    margin-left: 12px;
    width: 100px;
    height: 32px;
    border-radius: 30px;

`
export const TextGameBtn = styled.Text<{color:string}>`
    color: ${({color})=>color};
    font-size: 14px;
    font-weight: bold;
`

export const GameTypeContainer = styled.View`

    flex-direction: row;
`

