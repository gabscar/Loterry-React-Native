
import styled from "styled-components/native";



export const NumberButton = styled.TouchableOpacity<{color:string}>`

    background-color: ${({color}) => color};
    border: none;
    width: 59px;
    height: 59px;
    margin-left: 12px;
    margin-bottom: 8px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;


`

export const TextNumber = styled.Text`
    color: white;
    font-weight: bold;
    
`