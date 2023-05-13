import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button'
import styles from './style'
const SignUp = () => {
    const [fullname, SetFullName] = useState('');
    const [phone, SetPhone] = useState('');
    const [email, SetEmail] = useState('');
    const [password, setPasssword] = useState('');

    const handleSignUp = () => {
        console.warn('Signin data', email, password)
    }
    return (
        <View style={styles.container}>
            <Title title="SignIn Screen" />
            <View style={styles.formBox}>
                <CustomInput
                    placeholder="First Name"
                    onChange={SetFullName}
                />
                <CustomInput
                    placeholder="Email"
                    onChange={SetEmail}
                />
                <CustomInput
                    placeholder="Phone"
                    onChange={SetPhone}
                />
                <CustomInput
                    placeholder="Password"
                    onChange={setPasssword}
                />
                <CustomButton
                    title={"Sign Up"}
                    onPress={handleSignUp}
                />
            </View>
        </View>
    )
}
export default SignUp;