import * as React from 'react'

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Colors} from '../styles/Colors'
 export default function Game():  React.JSX.Element{
    return(
        <SafeAreaView></SafeAreaView>
    )
 }
  const styles= StyleSheet.create({
container:{
    backgroundColor:Colors.primary
}
  })