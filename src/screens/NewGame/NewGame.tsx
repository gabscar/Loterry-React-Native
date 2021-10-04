import React,{useState,useEffect} from 'react';
import {ScrollView,StyleSheet } from 'react-native';

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
import { CartIconComponent } from '../../components/CartComponent/CartIconComponent';
import { useDispatch } from 'react-redux';
import { CurrentCartActions } from '../../store/currentCart-slice';
import Toast,{InfoToast} from 'react-native-toast-message';


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
    const dispatch = useDispatch();
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
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'O número máximo de números foi selecionado',
                autoHide: true,
                visibilityTime:1,
              });
        }
    }
    function handleCompleteGame(){
        let numbers:number[]= [];
        setSelectedNumbers([]);
        numbers.push(...selectedNumbers);
        let limit = gameSelected['max-number'] - numbers.length; 
        if(limit===0){            
            limit = gameSelected['max-number'];
            numbers=[];
        }
        
        for(let counter =0;counter<limit;){
            let sort = Math.floor(Math.random() * (gameSelected.range - 1)+1);
            if(numbers.indexOf(sort) === -1){
                numbers.push(sort);
                counter++;
            }
        }
        setSelectedNumbers([...numbers]);
    }

    function handleClearGame(){
        setSelectedNumbers([]);
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
     
        return numbers;
    }
    function handleAddItemToCart(){
        let numbersInDescription= gameSelected.description.match(/\d+/g);
        let arr:number[] = numbersInDescription!.map(item=>Number(item));
        let menor = Math.min(...arr);
       
        if(selectedNumbers.length>=menor){
            dispatch(CurrentCartActions.AddToCart({selectedNumbers,gameSelected}));
            setSelectedNumbers([]);
        }else{
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: `Selecione de ${menor} até ${gameSelected['max-number']} números para colocar no carrinho`,
                autoHide: true,
                visibilityTime:2,
            });
        }
    }

    return(
        <>
            <Header element = {<CartIconComponent/>} />
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
                            <ButtonsActionGame onPress={handleCompleteGame}>
                                <TextActionButtons >
                                    Complete Game
                                </TextActionButtons>
                            </ButtonsActionGame>
                            <ButtonsActionGame onPress={handleClearGame}>
                                <TextActionButtons>
                                    Clear Game
                                </TextActionButtons>
                            </ButtonsActionGame>
                        </ContainerActionsLeft>
                        <ContainerActionsRigth>
                            <ButtonsActionGame onPress={handleAddItemToCart}>
                                <TextActionButtons>
                                    Add to Cart 
                                </TextActionButtons>
                                <Icon name = 'cart-plus' type='font-awesome' color='#27c383' size={19} />
                            </ButtonsActionGame>
                        </ContainerActionsRigth>
                    </ContainerButtonsActionGame>
                </ScrollView>
            </GameSection>
        </>
    )
}

export default NewGame;