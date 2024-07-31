import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import RestaurantScreen from './screens/RestaurantScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen} />
        <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})