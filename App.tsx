/*
`./src/componets/Game` =Stay in current folder, then go to src    
`../src/componets/Game` = Go up one folder first, then look for src 
 `../../`    =   Go up two folders                         */


import { GestureHandlerRootView } from "react-native-gesture-handler";
import Game from "./src/componets/Game";
import "react-native-gesture-handler"



const App= () =>(
<GestureHandlerRootView style={{flex:1}} ><Game/></GestureHandlerRootView>)

 export default App;