import React,{useReducer} from 'react'
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

const reducer = (state, action) =>{

    //state === {red:number,green:number,blue:number}
    //action === what action to perform on state object
    // action {colorToChange :'red' || 'green' || 'blue' ,amount:15 || -15}

    switch(action.type){
        case 'change_red':
            return state.red + action.payload < 0 || state.red + action.payload > 255 ?
                    state : 
                    {...state,red:state.red+action.payload };
       
        case 'change_green':
            return state.green + action.payload<0 || state.green + action.payload > 255 ?
                    state : 
                    {...state,green:state.green+action.payload };
    
        case 'change_blue':
           return state.blue + action.payload < 0 || state.blue + action.payload > 255 ?
                  state : 
                  {...state,blue:state.blue + action.payload };
        
        default:
            return state
    }

};

/*Reducer function has to return value at every action performed
as the state defined in functional component is different from 
state variable in reducer function.
*/ 

const SquareScreen = () =>{

    const INCREMENT_COLOR=15
    const DECREMENT_COLOR=10

    const [state ,dispatch]  = useReducer(reducer,{red:0,green:0,blue:0})

    const {red,green,blue} =state

    return(
        <View>
            <ColorCounter color="Red"
                onIncrease={()=> dispatch({type:'change_red', payload:INCREMENT_COLOR})}
                onDecrease={()=> dispatch({type:'change_red', payload: -DECREMENT_COLOR})}
            />
            <ColorCounter color="Green"
                onIncrease={() => dispatch({type:'change_green',payload:INCREMENT_COLOR})}
                onDecrease={() => dispatch({type:'change_green',payload:-DECREMENT_COLOR})}
            
            />
            <ColorCounter color="Blue"
                onIncrease={() => dispatch({type:'change_blue',payload:INCREMENT_COLOR})}
                onDecrease={() => dispatch({type:'change_blue',payload:-DECREMENT_COLOR})}
            />

            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

export default SquareScreen;