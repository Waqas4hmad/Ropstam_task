import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Title from '../../components/Title'
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button'
import styles from './style'

const SignIn = () => {
    const [email, SetEmail] = useState('');
    const [password, setPasssword] = useState('');

const handleSignIn = () => {
    console.log('Signin ddata', email, password)
}
    return (
        <View style={styles.container}>
            <Title title="SignIn Screen" />
            <View style={styles.formBox}>
                <CustomInput
                    placeholder="Email"
                    onChange={SetEmail}
                />
                <CustomInput
                    placeholder="Password"
                    onChange={setPasssword}
                />

            </View>
            <CustomButton
            title={"Sign In"}
            onPress={handleSignIn}
            />
        </View>
    )
}
export default SignIn;