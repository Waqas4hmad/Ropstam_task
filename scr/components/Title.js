import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'blue',
        paddingTop:15
    }
})
export default Title;