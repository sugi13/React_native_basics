import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Homescreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>Your Tasks 🚀</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    textStyle: {
        fontSize: 28,
        color: 'red',
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default Homescreen;
