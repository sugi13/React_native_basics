import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Detailscreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>Details</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    textStyle: {
        fontSize: 18,
        color: 'red',
        padding: 10,
        fontWeight: 'bold',
    },
});

export default Detailscreen
