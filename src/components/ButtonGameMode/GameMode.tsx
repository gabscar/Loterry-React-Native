import React from 'react'
import { Game } from '../../screens/NewGame/NewGame';
import { FlatList } from 'react-native';
import { ButtonGameMode, GameTypeContainer, TextGameBtn} from './styles';

interface GamesTypes{
    games: Game[],
    onClick : (item:string)=>void,
    gameSelected:Game


}

const GameMode:React.FC <GamesTypes>= ({games,onClick,gameSelected})=>{


    const renderItem=(({item})=>(
        <ButtonGameMode
                title={item['type']}
                color = {gameSelected.type === item['type']? item['color']:'#FFFF'}
                borderColor = {item['color']}
                key={item['type']}
                onPress = {()=>onClick(item['type'])}
        >
            <TextGameBtn color={gameSelected.type === item['type']? '#FFFF':item['color']}>
                {item['type']}
            </TextGameBtn>
        </ButtonGameMode>
    ))
    return(
        <GameTypeContainer>
                    <FlatList 
                        data = {games}
                        renderItem = {renderItem}
                        keyExtractor={item => item.type}
                        horizontal
                        style={{marginBottom:4}}
                    ></FlatList>
        </GameTypeContainer>
    )
}


export default GameMode;