import React,{useState, useEffect} from "react";
import { ScrollView,View } from "react-native";
import  GameMode  from "../../components/ButtonGameMode/GameMode";
import Header from '../../components/Header/Header'
import { LogOut } from "../../components/LogOutComponent/LogOut";
import {CardGameContainer, CardGameHistory, TextFilter, TextTitle, TopContainer} from './styles'
import { Game } from "../NewGame/NewGame";
import api from "../../services/api";
import { RootState } from '../../store/index';
import { useSelector } from "react-redux";


export interface cart{
    gameSelected:Game;
    selectedNumbers:number[];
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
        getGames()
    },[])
   console.log(buyedGames)
    async function getGames() {
        try{
            api.get('/types')
            .then((response)=>response.data)
            .then((data)=>{
              setGames(data);
             
            })
        }catch(err){
            console.log(err)
        }
    }
    const handleSelectGame = (type:string)=>{
        const game = games.find((item:Game)=>item.type===type);
        if(gameSelected.type ===game?.type){
            setGameSelected(initialState)
            console.log('entrou')
        }else if(game){
            const filteredItens = buyedGames.filter((item:cart)=>item.gameSelected.type===type);
            setGameSelected(game);
            
        }  
    }
    const RenderGames = ()=>{
        console.log(listGames)
        return(
            listGames.map((item:Game)=>{
                return(
                    <CardGameHistory>

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