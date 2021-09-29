import React from "react"
import { TGLContainer, TGLText } from "./styles";
import { View } from "react-native";


const Logo:React.FC=()=>{

    return(
        <View>
            <TGLText>TGL</TGLText>
            <TGLContainer/>
        </View>
    )
}

export default Logo;