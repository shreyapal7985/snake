import {StyleSheet, View, Text} from 'react-native';
import {Coordinate} from '../types/Type'
 export default function Food({x,y}:Coordinate):React.JSX.Element{
    return<Text style={[{top:y*10, left:x*10},styles.food]}>🍎</Text>
 }

 const styles=StyleSheet.create(
    {
        food:{
            width:20,
            height:20,
            borderRadius:7,
            position:'absolute'},});