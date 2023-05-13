import React from 'react'
import { Button, StyleSheet } from 'react-native'

const CustomButton = ({ title, onPress }) => {
    return (
        <Button
        style={styles.button}
            title={title}
            onPress={onPress}
        />
    )
};

const styles = StyleSheet.create({
    button: {
        width: "90%",
        height: 40,
        borderColor: 'gray',
        borderRadius: 25,
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 20
    }
})
export default CustomButton;