import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import Title from '../../components/Title'
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button'
import { login } from '../../redux/action/authAction'
import styles from './style'

const SignIn = ({ login, error }) => {
    const [email, SetEmail] = useState('');
    const [password, setPasssword] = useState('');
    const [data, setData] = useState([])

    const handleSignIn = () => {
        login(email, password)
    }
    return (
        <View style={styles.container}>
            <Title title="SignIn Screen" />
            <Text>{JSON.stringify(data)}</Text>
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
                {error && <Text style={styles.error}>{error} </Text>}
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        error: state.auth.error
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);