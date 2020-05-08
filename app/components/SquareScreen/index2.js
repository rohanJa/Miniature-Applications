import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import  ColorCounter from '../ColorCounter'
// import console = require('console');

/*
    Need To implement Switch Case condition so as 
    color not exceed 255 and cannot do below 0.
    1.  As it is not possible because if increse after 
        below zero we have to come uptil zero then the color will increase. 
    2.  Color will not change if we decrease after we exceed 255.
*/


const SquareScreen = () =>{
    const [red,setRed] = useState(0)
    const [blue,setBlue] = useState(0)
    const [green,setGreen] = useState(0)

    const INCREMENT_COLOR=15
    const DECREMENT_COLOR=10
    
    return(
        <View>
            <ColorCounter color="Red"
                onIncrease={()=>{setRed(red+INCREMENT_COLOR)
                    console.log("Raju")
                }}
                onDecrease={()=>setRed(red-DECREMENT_COLOR)}
            />
            <ColorCounter color="Green"
                onIncrease={() => setGreen(green+INCREMENT_COLOR)}
                onDecrease={() => setGreen(green-DECREMENT_COLOR)}
            
            />
            <ColorCounter color="Blue"
                onIncrease={() => setBlue(blue+INCREMENT_COLOR)}
                onDecrease={() => setBlue(blue-DECREMENT_COLOR)}
            />

            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

export default SquareScreen;