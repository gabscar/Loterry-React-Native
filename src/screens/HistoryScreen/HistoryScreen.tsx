import React,{useState, useEffect} from "react";
import { ScrollView,View } from "react-native";
import  GameMode  from "../../components/ButtonGameMode/GameMode";
import Header from '../../components/Header/Header'
import { LogOut } from "../../components/LogOutComponent/LogOut";
import {CardGameContainer, CardGameHistory, CardTextContainer, TextFilter, TextGameValue, TextNameGame, TextNumbers, TextTitle, TopContainer} from './styles'
import { Game } from "../NewGame/NewGame";
import api from "../../services/api";
import { RootState } from '../../store/index';
import { useSelector } from "react-redux";


export interface cart{
    gameSelected:Game;
    selectedNumbers:number[];
    date: string;
}
const initialState = {
    id:0,
    type: '',
    description: '',
    range: 0,
    price: 0,
    'max-number': 0,
    color: '',
}

const HistoryScreen: React.FC = ()=>{
    const [games, setGames]= useState<Game[]>([]);
    const buyedGames = useSelector((state: RootState) => state.cartHistory.items);
    const [gameSelected, setGameSelected] = useState<Game>(initialState);
    const [listGames,setListGames] = useState(buyedGames);
   useEffect(()=>{
        getGames();        
   },[buyedGames]);
   console.log(buyedGames)
    async function getGames() {
        try{
            api.get('/types')
            .then((response)=>response.data)
            .then((data)=>{
              setGames(data);
              setListGames(buyedGames);
            })
        }catch(err){
            console.log(err)
        }
    }
    const handleSelectGame = (type:string)=>{
        const game = games.find((item:Game)=>item.type===type);
        if(gameSelected.type ===game?.type){
            setGameSelected(initialState);
            setListGames(buyedGames);
        }else if(game){
            const filteredItens = buyedGames.filter((item:cart)=>item.gameSelected.type===type);
            setGameSelected(game);
            setListGames(filteredItens);
        }  
    }
    const RenderGames = ()=>{
        
        if(listGames.length ==0){
            return <TextNumbers>Não existe histórico de jogos</TextNumbers>
        }
       
        return(
            listGames.map((item:cart)=>{
                let arr = item.selectedNumbers.map((item)=>{return item<9?('0'+item):`${item}`});
                return(
                    <CardGameHistory>
                        <CardTextContainer color= {item.gameSelected.color}>
                            <TextNumbers>
                                {arr.sort((a,b)=>{return a>b?1:-1}).join(', ')}
                            </TextNumbers>
                            <TextGameValue>
                                {item.date} - (R$ {item.gameSelected.price.toFixed(2)})
                            </TextGameValue>
                            <TextNameGame color= {item.gameSelected.color}> 
                                {item.gameSelected.type} 
                            </TextNameGame>
                        </CardTextContainer>
                    </CardGameHistory>
                )
            })
        )
    }
    return (
        <View>
            <Header element={<LogOut/>}/>
            <TopContainer>
                <TextTitle> RECENT GAMES</TextTitle>
                     <TextFilter>Filters:</TextFilter><GameMode games={games} onClick = {handleSelectGame} gameSelected={gameSelected}/>
            </TopContainer>
            <ScrollView style= {{height: '67.3%'}}>
                <CardGameContainer>
                    {RenderGames()}
                </CardGameContainer>
            </ScrollView>
        </View>
    )
}



export default HistoryScreen;