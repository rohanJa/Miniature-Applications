import React from 'react'
import {Text,StyleSheet,View} from 'react-native'

const BoxScreen = () =>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>Rohan 1</Text>
            <Text style={styles.textStyleTwo}>Rohan 2</Text>
            <Text style={styles.textStyleThree}>Rohan 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    viewStyle:{
        borderWidth:1,
        borderColor:'black',
        height:200,
    },
    textStyleOne:{
        borderWidth:3,
        borderColor:'red',
    },
    textStyleTwo:{
        borderWidth:3,
        borderColor:'red',
        backgroundColor:'red',
        position:'absolute',
        ...StyleSheet.absoluteFillObject
    },

    textStyleThree:{
        borderWidth:3, 
        borderColor:'red',
        // backgroundColor:'green',
        bottom:1
    }

});

export default BoxScreen;