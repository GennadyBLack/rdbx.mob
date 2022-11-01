import React from 'react'

import useStore from '../../hooks/useStore'
import { View,Text } from 'react-native'
import { observer } from "mobx-react-lite";
import ModalWrapper from './ModalWrapper'
import { useEffect } from 'react';


const Layout = ({children,layout='public'})=>{






    if( layout === 'auth'){
    return   <View style={{flex:1}}>{children}</View>
    } else if(layout === 'public'){
    return <View style={{flex:1}}>
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