import React from 'react'

import useStore from '../../hooks/useStore'
import { View,Text } from 'react-native'
import { observer } from "mobx-react-lite";
import ModalWrapper from './ModalWrapper'
import { useEffect } from 'react';


const Layout = ({children})=>{

const [layout] =  useStore('layout')

const l = layout.getLayout

// useEffect(()=>{
// console.log(l)
// },[l,children])

    if( l === 'auth'){
    return   <View>{children}</View>
    } else if(l === 'public'){
    return <View>
        <ModalWrapper>
            {children}
          </ModalWrapper>
        </View>
    } else {
    return <View>
         {children}
        </View>
    }
}

export default observer(Layout)