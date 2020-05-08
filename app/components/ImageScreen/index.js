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
import ImageChild from '../ImageChild'

const ImageScreen = ({navigation}) =>{

    return (
       <View>
           <ImageChild text="rohan a" img={require('../assests/beach.jpg')} score="10"/>
           <ImageChild text="uddu c" img={require('../assests/forest.jpg')} score="6"/>
           <ImageChild text="raman ya" img={require('../assests/mountain.jpg')} score="4"/>
       </View> 
    )
}

const styles = StyleSheet.create({
   text:{
       fontSize:30
   } 
});


export default ImageScreen; 