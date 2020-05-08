import React ,{useReducer} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
// import console = require('console');

const reducer = (state,action) =>{

    switch (action.type){
        case "Increase":return {...state,counter:state.counter+1}
        case "Decrease":return {...state,counter:state.counter-1}
        default: return state
    }
}

const Counter = ({navigation}) =>{
    
    const [state,reducerFunc] = useReducer(reducer,{counter:0})

    const {counter} = state
    console.log(state)
    return (
       <View>
           <Text style={styles.text}>Hi Counter!</Text>
            <Button
                onPress={() =>reducerFunc({type:"Increase"})} 
                title="Increase" 
            />
            <Button
                onPress={() =>reducerFunc({type:"Decrease"})} 
                title="Decrease" 
            />
            <Text>Counter : {counter}</Text>
       </View> 
    )
}

const styles = StyleSheet.create({
   text:{
       fontSize:30
   } 
});


export default Counter; 