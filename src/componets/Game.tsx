import * as React from 'react'


import { StyleSheet,Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Colors} from '../styles/Colors';
import { Gesture,GestureDetector } from 'react-native-gesture-handler';
import { Coordinate, Direction, GestureEventType } from '../types/Type';
import Snake from './Snake';

const SNAKE_INITAL_POSITION = [{ x: 5, y: 5}];
const FOOD_INITIAL_POSITION = { x: 5, y: 20};
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax:63};
const MOVE_INTERVAL =50;
const SCORE_INCREMENT = 10;

 export default function Game():  React.JSX.Element{
const [direction,setDirection]=React.useState<Direction>(Direction.Right)
const [snaake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITAL_POSITION)

const [food, setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION)
const [isPaused,setIsPaused]=React.useState<boolean>(false)
    const pan = Gesture.Pan()
    .onStart(()=>
    {
console.log("finger touches the screen")
 })
  .onUpdate((event:GestureEventType) => {
    console.log("finger moving in X and Y direction");
    const {translationX, translationY}=event;
    if(Math.abs(translationX)>Math.abs(translationY)){
        if(translationX > 0){
            setDirection(Direction.Right)
        }
        else{
            //moving left
            setDirection(Direction.Left)
        }
    }
    else{
        if(translationY > 0){
            //moving down
            setDirection(Direction.Down)
        }
        else{
            //moving up
            setDirection(Direction.Up)
        }
    }
    console.log(event)
  })
  .onEnd(()=>{
    console.log("finger leaves the screen")
  });
    return(
        <GestureDetector gesture={pan}>
        <SafeAreaView style={styles.container}>
            <View style={styles.boundaries}>
                <Snake snake={snaake}/>
            </View>
        </SafeAreaView>
        </GestureDetector>
    )
 }
  const styles= StyleSheet.create({
container:{
    backgroundColor:Colors.primary,
    flex:1
}
  })