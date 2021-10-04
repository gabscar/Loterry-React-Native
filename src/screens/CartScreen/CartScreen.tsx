import React,{useState, useEffect} from 'react'
import { ScrollView, View,Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { BottomContainer, 
        CartContainer, 
        CartItem, 
        CartText, 
        DeleteButton, 
        SaveButton, 
        TextContainer, 
        TextGameValue, 
        TextNameGame, 
        TextNumbers, 
        TextSave, 
        TotalText 
    } from './styles'
import { Icon } from 'react-native-elements'
import { Game } from '../NewGame/NewGame'
import { useDispatch } from 'react-redux'
import { CurrentCartActions } from '../../store/currentCart-slice'
import { HistoryCartActions } from '../../store/historyCart-slice'
import { FormattedData } from '../../utils/utils'




interface map{
    gameSelected:Game;
    selectedNumbers:number[];
}

const CartScreen: React.FC = ()=>{
    const [totalPrice,setTotalPrice]= useState(0)
    const CartItens = useSelector((state:RootState)=>state.currentCart.items);
    const dispatch = useDispatch();
    useEffect(()=>{
        setTotalPrice(CartItens.reduce((prevItem, currentItem,key) => prevItem + currentItem.gameSelected.price, 0));
    },[CartItens])
    function loadItens(){
        if(CartItens.length ===0){
            return(
                <TextNumbers>Não há itens no carrinho</TextNumbers>
            )
        }
      
        return(
           CartItens.map((item:map,index:number)=>{
            const {gameSelected, selectedNumbers} =item;
            let arr = selectedNumbers.map((item)=>{return item<9?('0'+item):`${item}`})
            
            return( 
                <CartItem>
                    <DeleteButton onPress = {()=>handleDeleteItem(index)}>
                        <Icon name = 'trash-2' type='feather' size={40}/>
                    </DeleteButton>
                    <TextContainer color= {gameSelected.color}>
                        <TextNumbers>
                            {arr.sort((a,b)=>{return a>b?1:-1}).join(', ')}
                        </TextNumbers>
                        <TextGameValue>
                            <TextNameGame color= {gameSelected.color}> {gameSelected.type} </TextNameGame>R$ {gameSelected.price}
                        </TextGameValue>
                    </TextContainer>
                </CartItem>
            )
           }) 
        )
    }

    function handleDeleteItem(id:number){
        console.log(id)
        dispatch(CurrentCartActions.RemoveToCart(id));
    }   

    function handleClickSave(){
        if(totalPrice<30){
            alert(`O valor mínimo de compras é de R$ 30,00`)
        }else{
           dispatch(CurrentCartActions.setDate(CartItens));
           dispatch(HistoryCartActions.buyGames(CartItens));
           setTotalPrice(0);
           dispatch(CurrentCartActions.ClearCart());
          
        }
    }

    return(
        <>
            <View style={{flex:1, marginBottom:10, marginTop:10}}>
                <ScrollView style={{height:'100%'}}>
                        <CartContainer>
                            {loadItens()}
                        </CartContainer>
                </ScrollView >
            </View>
            <BottomContainer>
                
                <TotalText>
                    <CartText> CART</CartText> TOTAL: R$ {totalPrice.toFixed(2)}
                </TotalText>
                <SaveButton onPress={handleClickSave}>
                    <TextSave>
                        Save <Icon 
                            name = 'arrow-right' 
                            type='feather' 
                            color="#27C383" 
                            size={15}  />
                    </TextSave>
                </SaveButton>
            </BottomContainer>
        </>
    )
}

export default CartScreen;
