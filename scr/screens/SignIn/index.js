import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Title from '../../components/Title'
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button'
import styles from './style'

const SignIn = () => {
    const [email, SetEmail] = useState('');
    const [password, setPasssword] = useState('');
    const [data, setData] = useState([])
    const getAPIData = async () => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
        console.warn(result)
        console.log(result)
    }

    useEffect(() => {
        getAPIData()
    }, [])
    const handleSignIn = () => {
        console.warn('Signin data', email, password)


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
                <CustomButton
                    title={"Sign In"}
                    onPress={handleSignIn}
                />
            </View>

        </View>
    )
}
export default SignIn;