import styled from "styled-components/native";


export const CartContainer = styled.View`
    align-items: center;
    justify-content: center;
`



export const CartItem = styled.View`
    width: 350px;
    border-color: #E2E2E2;
    border-width: 1px;
    margin-top: 10px;
    flex-direction: row;
    border-radius: 10px;
    height: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const DeleteButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding-left: 13px;
`
export const TextContainer = styled.View<{color:string}>`
    border-left-color: ${({color})=>color};
    border-left-width: 3px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
    flex-wrap: wrap;
`

export const TextNumbers = styled.Text`
    color: #868686;
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    margin-left: 15px;
    max-width: 260px;
`

export const TextGameValue = styled.Text`
    font-size: 14px;
    color:#868686;
    margin-left: 15px;
    margin-top: 8px;
`

export const TextNameGame = styled.Text<{color:string}>`

    color: ${({color})=>color};
    font-weight: bold;
    font-style: italic;
`

export const BottomContainer = styled.View`
 
   height: 30px;
   justify-content:space-evenly;
   flex-direction: row;
   margin-bottom: 20px;
`

export const TotalText = styled.Text`
    padding-top: 5px;
    color: #707070;
    font-size: 20px;

`

export const CartText = styled.Text`
    font-weight: bold;
    font-style: italic;
`

export const SaveButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: #E2E2E2;
    width: 120px;
    height: 27px;
    border-radius: 20px;
    padding: 5%;
`

export const TextSave = styled.Text`
    color: #27C383;
    font-size: 25px;
    font-weight: bold;
`