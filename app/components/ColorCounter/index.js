import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import { useLinkProps } from '@react-navigation/native';
// import console = require('console');


const ColorCounter = (props) =>{
    console.log(props)    
    return (

        <View>
            <Text>{props.color}</Text>

            <Button title={`Increase ${props.color}`}
                    onPress={()=>props.onIncrease()}
            />
            
            <Button title={`Decrease ${props.color}`}
                    onPress={()=>props.onDecrease()}
            />
        </View>
    )
}

export default ColorCounter;