import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
// import console = require('console');


const HomeScreen = ({navigation}) =>{

    return (
       <View>
           <Text style={styles.text}>Hi There!</Text>
           <Button
                onPress={() => navigation.navigate('ListDemo')} 
                title="List Demo" 
            />
            <Button
                onPress={() => navigation.navigate('ImageScreen')} 
                title="Image Screen" 
            />
            <Button
                onPress={() => navigation.navigate('Counter')} 
                title="Counter Screen" 
            />
            <Button
                onPress={() => navigation.navigate('ColorComponent')} 
                title="Color Screen" 
            />
            <Button
                onPress={() => navigation.navigate('SquareScreen')} 
                title="Square Screen" 
            />
            <Button
                onPress={() => navigation.navigate('TextDemo')} 
                title="Text Demo" 
            />
       </View> 
    )
}

const styles = StyleSheet.create({
   text:{
       fontSize:30
   } 
});


export default HomeScreen; 