import * as React from 'react'


import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../styles/Colors';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Coordinate, Direction, GestureEventType } from '../types/Type';
import Snake from './Snake';
import { checkGameOver } from '../utils/CheckGameOver';
import Food from './Food';
import {CheckEatsFood} from '../utils/checkEatsFood';
import { randomFoodPosition } from '../utils/randomFoodPosition';

const SNAKE_INITAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { xMin: 0, xMax: 36, yMin: 0, yMax: 80 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

export default function Game(): React.JSX.Element {
    const [direction, setDirection] = React.useState<Direction>(Direction.Right)
    const [snaake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITAL_POSITION)

    const [food, setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION)
    const [isPaused, setIsPaused] = React.useState<boolean>(false)
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false)
    const [score, setScore] = React.useState<number>(0);

React.useEffect(() => {
    if (!isGameOver) {
        const intervalId = setInterval(() => {
          !isPaused && moveSnake();
        }, MOVE_INTERVAL);
        return () => clearInterval(intervalId);
      }
}, [snaake, isGameOver, isPaused]);

    const moveSnake = () => {
        const snakeHead = snaake[0];
        const newHead = { ...snakeHead };//creating a copy

        //game over 
        if (checkGameOver(snakeHead, GAME_BOUNDS)) {
            setIsGameOver((prev)=> !prev);
        return;}


        switch (direction) {
            case Direction.Up:
                newHead.y -= 1;
                break;
            case Direction.Down:
                newHead.y += 1;
                break;
            case Direction.Left:
                newHead.x -= 1;
                break;
            case Direction.Right:
                newHead.x += 1;
                break;

        }

        //if eat food grow snake
        if(CheckEatsFood(newHead, food, 2)){
            setSnake([newHead, ...snaake]);
            //get another position for the food
            setFood(randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax))
            setScore(score+SCORE_INCREMENT)
        }
        setSnake([newHead, ...snaake.slice(0,-1)])
    }
    const pan = Gesture.Pan()
        .onStart(() => {
            console.log("finger touches the screen")
        })
        .onUpdate((event: GestureEventType) => {
            console.log("finger moving in X and Y direction");
            const { translationX, translationY } = event;
            if (Math.abs(translationX) > Math.abs(translationY)) {
                if (translationX > 0) {
                    setDirection(Direction.Right)
                }
                else {
                    //moving left
                    setDirection(Direction.Left)
                }
            }
            else {
                if (translationY > 0) {
                    //moving down
                    setDirection(Direction.Down)
                }
                else {
                    //moving up
                    setDirection(Direction.Up)
                }
            }
            console.log(event)
        })
        .onEnd(() => {
            console.log("finger leaves the screen")
        });
    return (
        <GestureDetector gesture={pan}>
            <SafeAreaView style={styles.container}>
                <View style={styles.boundaries}>
                    <Snake snakee={snaake} />
                    <Food x={food.x} y={food.y} />
                </View>
            </SafeAreaView>
        </GestureDetector>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1
    },
    boundaries: {
        flex: 1,
        borderColor: Colors.primary,
        borderWidth: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.background
    }
})