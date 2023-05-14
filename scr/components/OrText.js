import React from 'react'
import { Text, StyleSheet } from 'react-native'

const OrText = ({ value, onChange, placeholder }) => {
    return (
        <Text style={styles.or}>OR</Text>
        )
};

const styles = StyleSheet.create({
    or: {
        fontSize:18,
        fontWeight:'bold',
        color:'blue',
        paddingTop:15,
        paddingBottom:15

    }
})
export default OrText;