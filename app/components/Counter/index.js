import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

const Counter = ({navigation}) =>{
    const [counter,setCounter]=useState(0)
    return (
       <View>
           <Text style={styles.text}>Hi Counter!</Text>
            <Button
                onPress={() => {setCounter(counter+1); console.log(counter)}} 
                title="Increase" 
            />
            <Button
                onPress={() =>{ setCounter(counter-1);console.log(counter)}} 
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