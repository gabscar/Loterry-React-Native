import React,{useState,useEffect} from 'react';
import {View,TextInput,Text,StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ButtonGameMode, GameSection, GameTypeContainer, TextGameBtn} from './styles';
import Header from '../../components/Header/Header'
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';


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
    useEffect(()=>{
        console.log(gameSelected)
    },[gameSelected])
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
    const renderItem=(({item})=>(
        <ButtonGameMode
                title={item['type']}
                color = {gameSelected.type === item['type']? item['color']:'#FFFF'}
                borderColor = {item['color']}
                key={item['type']}
                onPress = {()=>handleSelectGame(item['type'])}
        >
            <TextGameBtn color={gameSelected.type === item['type']? '#FFFF':item['color']}>
                {item['type']}
            </TextGameBtn>
        </ButtonGameMode>
    ))

    return(
        <>
            <Header/>
            <GameSection>
                <GameTypeContainer>
                    <FlatList 
                        data = {games}
                        renderItem = {renderItem}
                        keyExtractor={item => item.id}
                        horizontal
                    ></FlatList>
                </GameTypeContainer>
                <Text>New Bet </Text>
            </GameSection>
        </>
    )
}

export default NewGame;