import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { connect,useSelector } from 'react-redux';

import Title from '../../components/Title'
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button'
import { login } from '../../redux/action/authAction'
import styles from './style'

const SignIn = ({ login, error,navigation }) => {
    const [email, SetEmail] = useState('');
    const [password, setPasssword] = useState('');
    
    const handleSignIn = async () => {
       const success= await login(email, password);
        success ? navigation.navigate('Dashboard') : console.warn("invalide Login")
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
                {/* <Text>{login}</Text> */}
                {error && <Text style={styles.error}>{error} </Text>}
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        error: state.error,
        login: state.login
    };
}
export default connect(mapStateToProps, { login })(SignIn);