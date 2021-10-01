import React from "react"
import { ButtonLogOut,HeaderContainer, LogoContainer, TextButton, TGLContainer, TGLText } from './styles';
import { Icon } from 'react-native-elements'


interface Header{
    element: JSX.Element
}


const Header:React.FC <Header>= ({element})=>{

   
    return(
        <HeaderContainer>
                <LogoContainer>
                    <TGLText>TGL</TGLText>
                    <TGLContainer/>
                </LogoContainer>
               {element}
                
        </HeaderContainer>
    )
}

export default Header;