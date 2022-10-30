import React from "react"
import { View,Text } from "react-native"
import ModalWrapper from '../components/base/ModalWrapper'

const Auth  = ({children})=>{
return <ModalWrapper>
    {children}
     </ModalWrapper>
}

export default Auth