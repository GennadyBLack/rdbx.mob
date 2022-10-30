import React from 'react'
import Auth from '../../layouts/Auth'
import Public from '../../layouts/Auth'
import Default from '../../layouts/Auth'
import useStore from '../../hooks/useStore'
import { View } from 'react-native'
import { observer } from "mobx-react-lite";

const Layout = ({children})=>{
const [layout] =  useStore('layout')

const l = layout.getLayout

if(l ==='Login'){
    return <Auth>
            {children}
    </Auth>
} else if(l === 'Public'){
    return <Public>
            {children}
        </Public>
} else {
    return <Default>
         {children}
        </Default>
}
}

export default observer(Layout)