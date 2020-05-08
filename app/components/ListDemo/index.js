import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';


const ListDemo = ({navigation}) =>{

    const friends=[
        {name:"Ajain #1",age:122},
        {name:"Ajain #2",age:12},
        {name:"Ajain #3",age:12},
        {name:"Ajain #4",age:122},
        {name:"Ajain #5",age:121},
        {name:"Ajain #6",age:126},
        {name:"Ajain #7",age:124},
        {name:"Ajain #8",age:121},
        {name:"Ajain #9",age:122},
        {name:"Ajain #10",age:121},

    ]

    return (
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}>
                <Text>List Demo</Text>
                <Text>List Demo</Text>
                <Text>List Demo</Text>
            </TouchableOpacity>
            <FlatList 
                alwaysBounceVertical={true}
                    keyExtractor={friends=>
                        friends.name
                    }
                    data={friends}  
                    renderItem={({item})=>{
                        return <Text style={styles.textStyle}>{item.name}-{item.age}</Text>
                    }}
            />
    </View>
    )}

const styles = StyleSheet.create({
   textStyle:{
       marginVertical:50
   } 
});


export default ListDemo; 