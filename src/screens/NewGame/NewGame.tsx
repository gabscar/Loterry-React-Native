import React,{useState,useEffect} from 'react';
import {View,TextInput,Text,StyleSheet, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {  DescribeContainer, 
    GameSection, 
    NumberContainer, 
    TexSubTitle, 
    TextDescribe, 
    TextGames, 
    TextTitle, 
    TextTitleDescribe,
    ViewTexts , 
    ContainerActionsLeft, 
    ContainerActionsRigth, 
    ContainerButtonsActionGame, 
    TextActionButtons,
    ButtonsActionGame} from './styles';
import Header from '../../components/Header/Header'
import api from '../../services/api';
import { Icon } from 'react-native-elements'
import GameMode from '../../components/ButtonGameMode/GameMode';
import  ButtonNumber  from '../../components/ButtonNumbersGame/ButtonNumber';



export interface Game{
    id:number;
    type: string;
    description: string ;
    range: number;
    price: number;
    'max-number': number;
    color: string;
}

const NewGame :React.FC = ()=>{
    const [games, setGames]= useState<Game[]>([]);
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
    const [gameSelected, setGameSelected] = useState<Game>({
        id:0,
        type: '',
        description: '',
        range: 0,
        price: 0,
        'max-number': 0,
        color: '',
    })
    useEffect(()=>{
        getGames()
    },[])
    async function getGames() {
        try{
            api.get('/types')
            .then((response)=>response.data)
            .then((data)=>{
              setGames(data);
              setGameSelected(data[0]);
            })
            
            console.log(gameSelected)
        }catch(err){
            console.log(err)
        }
    }

    const handleSelectGame = (type:string)=>{
        const game = games.find((item:Game)=>item.type===type)
        if(game)
            setGameSelected(game)
        setSelectedNumbers([]);
    }
    function handleSelectNumber(index:number){
        let limit = Number(gameSelected['max-number']) -selectedNumbers.length 
        if(limit !==0 && !selectedNumbers.includes(index)){
            let newArr = [...selectedNumbers,index];
            setSelectedNumbers(newArr);
        }else if(selectedNumbers.includes(index)){
            setSelectedNumbers(selectedNumbers.filter((item)=>item !==index));
            
        }else if(limit ===0){ 
            alert('fail')
        }
    }
    function generateNumbers(){
        let numbers = []
        
        for(let i=1;i<=gameSelected.range;i++){
           numbers.push( 
                <ButtonNumber
                    key={i}
                    value={i}
                    btnColor = {gameSelected.color}
                    selected = {selectedNumbers.includes(i)}
                    onClick = {()=>handleSelectNumber(i)}
                />
            )
        }
        console.log(selectedNumbers)
        return numbers;
    }

    return(
        <>
            <Header/>
            <GameSection>

                <ViewTexts>
                    <TextTitle>NEW BET <TexSubTitle>FOR {gameSelected.type}</TexSubTitle></TextTitle>
                    <TextGames>Choose a Game </TextGames>
                </ViewTexts>
                <GameMode games={games} onClick = {handleSelectGame} gameSelected={gameSelected}/>
                <ScrollView style= {{height: '100%'}}>
                    <DescribeContainer>
                        <TextTitleDescribe>
                            Fill your Bet
                        </TextTitleDescribe>
                        <TextDescribe>
                            {gameSelected.description}
                        </TextDescribe>
                    </DescribeContainer>
                    <NumberContainer>
                        {generateNumbers()}
                    </NumberContainer>
                    <ContainerButtonsActionGame>
                        <ContainerActionsLeft>
                            <ButtonsActionGame>
                                <TextActionButtons>
                                    Complete Game
                                </TextActionButtons>
                            </ButtonsActionGame>
                            <ButtonsActionGame>
                                <TextActionButtons>
                                    Clear Game
                                </TextActionButtons>
                            </ButtonsActionGame>
                        </ContainerActionsLeft>
                        <ContainerActionsRigth>
                            <ButtonsActionGame>
                                <TextActionButtons>
                                    Add to Cart <Icon name = 'shopping-cart' type='feather' color='#27c383' size={19} />
                                </TextActionButtons>
                            </ButtonsActionGame>
                        </ContainerActionsRigth>
                    </ContainerButtonsActionGame>
                </ScrollView>
            </GameSection>
        </>
    )
}

export default NewGame;