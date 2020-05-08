import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
// import console = require('console');


const ImageChild = (props) =>{

    return (
       <View>
           <Text style={styles.text}>{props.text}</Text>
            <Image source={props.img}/>
            <Text>{props.score}</Text>
       </View> 
    )
}

const styles = StyleSheet.create({
   text:{
       fontSize:30
   } 
});


export default ImageChild; 