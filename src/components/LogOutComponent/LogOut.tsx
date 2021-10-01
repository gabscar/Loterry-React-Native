import React from 'react'
import { ButtonLogOut, TextButton } from './styles'
import { Icon } from 'react-native-elements'
import { AuthActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
export const LogOut: React.FC = ()=>{
    const dispatch = useDispatch();
    function handlePressLogOut(){
        dispatch(AuthActions.logOut());
    }
    return(
        <ButtonLogOut onPress = {handlePressLogOut}>
                    <TextButton>Log out </TextButton><Icon name = 'log-out' type='feather' color='#CF3434' size={19} />
        </ButtonLogOut>
    )
}