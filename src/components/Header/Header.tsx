import React from "react"
import { ButtonLogOut,HeaderContainer, LogoContainer, TextButton, TGLContainer, TGLText } from './styles';
import { Icon } from 'react-native-elements'
import { AuthActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';

const Header:React.FC = ()=>{

    const dispatch = useDispatch();
    function handlePressLogOut(){
        dispatch(AuthActions.logOut());
    }

    return(
        <HeaderContainer>
                <LogoContainer>
                    <TGLText>TGL</TGLText>
                    <TGLContainer/>
                </LogoContainer>
                <ButtonLogOut onPress = {handlePressLogOut}>
                    <TextButton>Log out </TextButton><Icon name = 'log-out' type='feather' color='#CF3434' size={19} />
                </ButtonLogOut>
                
        </HeaderContainer>
    )
}

export default Header;