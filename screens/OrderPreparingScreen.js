import { StyleSheet, Text, View, Image } from 'react-native'
import {React, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(()=> {
        setTimeout(()=> {
            // move to delivery screen
            navigation.navigate('Delivery')
        }, 3000)
    })
    
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require('../assets/images/download (7).jpeg')} className="h-50 w-50" />
    </View>
  )
}

export default OrderPreparingScreen

const styles = StyleSheet.create({})