import React from 'react'
import { Text, StyleSheet, Fei } from 'react-native'

const ErrorText = ({ error}) => {
    return (
        <Text
        style={styles.error}>
            {error}
        </Text>

    )
};

const styles = StyleSheet.create({
    error: {
       color:'red',
       fontSize:14,
       paddingBottom:10
    }
})
export default ErrorText;