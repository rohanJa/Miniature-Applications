import React,{useState} from 'react';
import {View,StyleSheet,TextInput,Text} from 'react-native';

const TextDemo = () =>{

    const [name,setName] = useState('')

    return (
    <View>
        <Text>Text Input</Text>
        <TextInput style={styles.input} 
                   value={name}
                   onChangeText={(newValue)=>setName(newValue)}
        />
        {name.length>5?null:<Text>Password is to short must be greater than 5 character</Text>}
        <Text>Typed String - {name}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth:1
    }
})


export default TextDemo;