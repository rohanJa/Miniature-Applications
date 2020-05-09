import React,{useReducer} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import  ColorCounter from '../ColorCounter'
// import console = require('console');

/*
    Need To implement Switch Case condition so as 
    color not exceed 255 and cannot do below 0.
    1.  As it is not possible because if decrease after 
        below zero we have to come uptil zero then the color will increase. 
    2.  Color will not change if we increase after we exceed 255.
*/

const reducer = (state, action) =>{

    //state === {red:number,green:number,blue:number}
    //action === what action to perform on state object
    // action {colorToChange :'red' || 'green' || 'blue' ,amount:15 || -15}

    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount < 0 || state.red + action.amount > 255 ?
                    state : 
                    {...state,red:state.red+action.amount };
       
        case 'green':
            return state.green + action.amount<0 || state.green + action.amount > 255 ?
                    state : 
                    {...state,green:state.green+action.amount };
    
        case 'blue':
           return state.blue + action.amount < 0 || state.blue + action.amount > 255 ?
                  state : 
                  {...state,blue:state.blue + action.amount };
        
        default:
            return state
    }

};

/*Resucer function has to return value at every action performed
as the state defined in functional component is different from 
state variable in reducer function n
*/ 

const SquareScreen = () =>{

    const INCREMENT_COLOR=15
    const DECREMENT_COLOR=10

    const [state ,runMyReducer]  = useReducer(reducer,{red:0,green:0,blue:0})

    const {red,green,blue} =state

    return(
        <View>
            <ColorCounter color="Red"
                onIncrease={()=> runMyReducer({colorToChange:'red', amount:INCREMENT_COLOR})}
                onDecrease={()=> runMyReducer({colorToChange:'red', amount: -DECREMENT_COLOR})}
            />
            <ColorCounter color="Green"
                onIncrease={() => runMyReducer({colorToChange:'green',amount:INCREMENT_COLOR})}
                onDecrease={() => runMyReducer({colorToChange:'green',amount:-DECREMENT_COLOR})}
            
            />
            <ColorCounter color="Blue"
                onIncrease={() => runMyReducer({colorToChange:'blue',amount:INCREMENT_COLOR})}
                onDecrease={() => runMyReducer({colorToChange:'blue',amount:-DECREMENT_COLOR})}
            />

            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

export default SquareScreen;