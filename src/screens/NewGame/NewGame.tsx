import React from 'react';
import { Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { GameSection } from './styles';

const NewGame :React.FC <{navigation:any}>= ({navigation})=>{

    return(
        <GameSection>
            <Text>New Bet</Text>
        </GameSection>
    )
}

export default NewGame;