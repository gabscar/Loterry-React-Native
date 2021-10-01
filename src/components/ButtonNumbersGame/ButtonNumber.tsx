
import React from 'react'
import { View,Text } from 'react-native'
import { NumberButton, TextNumber } from './styles'

interface Button{
    value:number;
    btnColor: string;
    selected: boolean;
    onClick : ()=>void;
    
}

const ButtonNumber: React.FC<Button> = ({value,btnColor,selected,onClick}) =>{
    console.log(selected)
    return(
        <NumberButton
            color = {selected ? btnColor:"#ADC0C4"}
            onPress = {onClick}
        >
            <TextNumber>{value<10 ? "0" + value:value}</TextNumber>
        </NumberButton>
    )
}


export default ButtonNumber;