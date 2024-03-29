import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CustomButton = ({ title, onPress,disabled }) => {
    return (
       
        <TouchableOpacity
            activeOpacity={0.95}
            style={styles.button}
            onPress={onPress}
            // disabled={disabled}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width:320,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'blue',
        borderRadius:40,
        borderWidth:1,
    },
    text: {
        fontSize:18,
        fontWeight:'700',
        color:'white',  
    }
})
export default CustomButton;