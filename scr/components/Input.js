import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const CustomInput = ({ value,onChange,placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={(text) => onChange(text) }
        />)
};

const styles = StyleSheet.create({
    input: {
        width:"90%",
        height:40,
        borderColor:'gray',
        borderRadius:25,
        borderWidth:1,
        marginBottom:16,
        paddingLeft:20
    }
})
export default CustomInput;