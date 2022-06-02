import {Text, View, SafeAreaView, FlatList} from 'react-native'
//flatlist native me as a.map he
import {useState} from 'react'

import {COLORS, NFTData} from '../constants'
// import { SafeAreaView } from 'react-native-safe-area-context'
import {NFTCard, HomeHeader, FocusedStatusBar} from '../components'

const Home = () => {
  return (
   <SafeAreaView style={{flex: 1}}>

       <FocusedStatusBar background={COLORS.primary}/>


   </SafeAreaView>
  )
}

export default Home