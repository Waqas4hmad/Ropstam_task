import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button'
import Title from '../../components/Title'
import { register } from '../../redux/action/authAction'
import styles from './style'
const SignUp = ({ register, navigation }) => {
    const [fullname, SetFullName] = useState('');
    const [phone, SetPhone] = useState('');
    const [email, SetEmail] = useState('');
    const [password, setPasssword] = useState('');

    const handleSignUp = async () => {
        let formData = {
            fullname: fullname,
            email: email,
            phone: phone,
            password: password
        };
        if (fullname && email && phone && password) {
            const success = await register(formData )
            console.log(success)
            if( success)
            {
                navigation.navigate('SignIn')
            }
        }
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

export default connect(null, { register })(SignUp);
