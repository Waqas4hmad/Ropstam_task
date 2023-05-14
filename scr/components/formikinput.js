import React from 'react'
import { TextInput, StyleSheet, Fei } from 'react-native'

const Formik_Input = ({ name, value, onChange, handleBlur, placeholder, keyboardType }) => {
    return (
        <TextInput
            name={name}
            placeholder={placeholder}
            style={styles.input}
            onChangeText={onChange}
            onBlur={handleBlur}
            value={value}
            keyboardType={keyboardType}
        />

    )
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: 40,
        borderColor: 'gray',
        borderRadius: 25,
        borderWidth: 1,
        marginBottom: 2,
        paddingLeft: 20
    }
})
export default Formik_Input;