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
        flexDirection:'row',
        height:200,
        justifyContent:'space-between'
    },
    textStyleOne:{
        height:100,
        borderWidth:1,

    },
    textStyleTwo:{
        height:100,
        borderWidth:1,
        alignSelf:'flex-end'
    },

    textStyleThree:{
        height:100,
        borderWidth:1,
    }

});

export default BoxScreen;