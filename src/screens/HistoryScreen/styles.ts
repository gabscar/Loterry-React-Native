import styled from "styled-components/native";



export const TopContainer = styled.View`
    flex-direction: column;
    margin-top: 12px;
`

export const TextTitle = styled.Text`
    font-weight: bold;
    font-style: italic;
    font-size: 24px;
    color: #707070;
    margin-left: 12px;
`

export const TextFilter = styled.Text`
    color: #868686;
    font-style: italic;
    font-size: 17px;
    margin-left: 17px;
    padding-top: 7px;
    margin-right: 5px;
`

export const CardGameContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
`

export const CardGameHistory = styled.View`
    width: 350px;
    border-color: #E2E2E2;
    border-width: 1px;
    margin-top: 10px;
    flex-direction: row;
    border-radius: 10px;
    height: 125px;
    padding-top: 10px;
    padding-bottom: 10px;
    
`
export const CardTextContainer = styled.View<{color:string}>`
    border-left-width: 4px;
    border-left-color: ${({color})=>color};
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

`
export const TextNumbers = styled.Text`
    color: #868686;
    font-size: 16px;
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
    margin-left: 15px;
    font-size: 15px;
`


