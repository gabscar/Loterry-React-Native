import React from 'react'
import {Text} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import { useSelector } from "react-redux";
import { RootState } from '../../store';
import { Icon } from 'react-native-elements'
import { CartIconContainer, CartTextContainer } from './styles';

export const CartIconComponent : React.FC =()=>{

    const cart = useSelector((state:RootState)=>state.currentCart.items);
    const navigator= useNavigation();

    function handleClickCard(){

        navigator.navigate('CartFlow')
    }
    return(
        <CartIconContainer onPress={handleClickCard}>
            <Icon name = 'shopping-cart' type='feather' size={30}/>
            <CartTextContainer>
                {   cart.length>0 &&
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{cart.length}</Text>
                }
            </CartTextContainer>
        </CartIconContainer>
    )
}


//export default CartIconComponent;
