import {TouchableOpacity, View, StyleSheet} from 'react-native';
import { Colors } from '../styles/Colors';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

interface HeaderProps{
    reloadGame:()=>void;
    pauseGame:()=>void;
    children: React.JSX.Element;
    isPaused:boolean;
}
export default function Header({
    children,
    reloadGame,
    pauseGame,
    isPaused,
}:HeaderProps):React.JSX.Element{
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={reloadGame}>
                <Ionicons name='reload-circle' size={35} color={Colors.primary}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={pauseGame}>
                <FontAwesome name={isPaused?'play-circle':'pause-circle'} 
                size={35} color={Colors.primary}/>
            </TouchableOpacity>
            {children}
            </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:0.05,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:12,
        borderColor:Colors.background,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:15
}
})