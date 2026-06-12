import { Fragment } from "react/jsx-runtime";
import { Coordinate } from "../types/Type";
import { View, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors";


interface SnakeProps{
    snakee:Coordinate[];
}

export default function Snake({snakee}:SnakeProps):React.JSX.Element{
    return(
        <Fragment>
            {snakee.map((segment:Coordinate, index:number)=>{
                const segmentStyle={
                    left:segment.x*10,
                    top: segment.y*10,
                }
                return <View key={index} style={[styles.snake,segmentStyle]}/>
            })}
        </Fragment>
    )
}

const styles=StyleSheet.create(
    {
        snake:{
            width:15,
            height:15,
            borderRadius:7,
            backgroundColor:Colors.primary,
            position:'absolute'

        }
    }
)