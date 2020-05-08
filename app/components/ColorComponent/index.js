import React,{useState} from 'react'
import {View,StyleSheet,Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ColorComponent = () =>{
    const [colors,setColors]=useState([])
    
    return  (
        <View>
            <Button title="Add Color" onPress={()=>{
                                                setColors([...colors,randomRgb()])
                                                console.log(colors)
                                              }}
            />
            <FlatList data={colors} keyExtractor={(index )=>index }
                    renderItem={({item})=>{
                        return(          
                            <View style={{
                                    width:100,
                                    height:100,
                                    backgroundColor: item
                                    }}
                            />
                        )
                        console.log(element)
                    }}
            />
        </View>
    )
}

const randomRgb = () =>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`
}



export default ColorComponent;