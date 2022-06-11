import { View, Text } from 'react-native'
import {useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import {COLORS, SHADOWS, SIZES, FONTS} from '../constants'

const DetailsDesc = ({data}) => {
  return (
    <>
    <View>
      <NFTTitle />
    </View>
    </>
  )
}

export default DetailsDesc