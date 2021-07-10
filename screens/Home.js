import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
 render(){
  return(
   <View style={{flex:1}}>
       <TouchableOpacity style={styles.craft}   onPress={() =>this.props.navigation.navigate("SpaceCrafts")}>
    <Text style={styles.craftText}>Space Craft</Text>
    </TouchableOpacity>
   </View>
  )
       }
}

const styles=StyleSheet.create({
    craft:{ 
        flex:0.75,
        marginLeft: 500,
        marginRight: 510,
        alignItems:'center',
        marginTop: 300,
        marginBottom:150,
        borderRadius: 60,
        backgroundColor: 'yellow'
    },
    craftText:{
        marginTop:36,
        fontSize:36.3,
        fontFamily:'cOopEr blaCK'
    }
})