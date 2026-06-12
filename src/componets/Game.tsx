import * as React from 'react'


import { StyleSheet,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Colors} from '../styles/Colors';
import { PanGestureHandler } from 'react-native-gesture-handler';

 export default function Game():  React.JSX.Element{
    const handleGsture=(event:any)=>{
        console.log(event)
    }
    return(
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    )
 }
  const styles= StyleSheet.create({
container:{
    backgroundColor:Colors.primary,
    flex:1
}
  })