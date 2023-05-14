import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

import Title from '../../components/Title'
import { Formik } from 'formik'
import Formik_Input from '../../components/formikinput';
import ErrorText from '../../components/ErrorText';

import { loginValidationSchema } from '../../utils/validate';
import CustomButton from '../../components/Button'
import { login } from '../../redux/action/authAction'
import styles from './style'
import { INVALID_LOGIN } from '../../constants';
import OrText from '../../components/OrText';

const SignIn = ({ login, error, navigation }) => {

    const handleSignUp = async () => {
        navigation.navigate('SignUp')
    }
    return (
        <View style={styles.container}>
            <Title title="SignIn Screen" />
            <View style={styles.formBox}>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={async values => {
                        console.log(values)

                        try {
                            console.log(values)
                            const success = await login(values.email, values.password);
                            success ? navigation.navigate('Dashboard') : console.warn(INVALID_LOGIN)

                        } catch (error) {
                            console.log(error)
                        }
                    }
                    }>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Text style={styles.title}>Email Address:</Text>

                            <Formik_Input
                                name="email"
                                value={values.email}
                                placeholder={"Email Address"}
                                onChange={handleChange('email')}
                                handleBlur={handleBlur('email')}
                            />
                            {
                                errors.email && <ErrorText error={errors.email} />
                            }

                            <Text style={styles.title}>Password:</Text>
                            <Formik_Input
                                name="password"
                                value={values.password}
                                placeholder={"Password"}
                                onChange={handleChange('password')}
                                handleBlur={handleBlur('password')}
                            />
                            {
                                errors.password && <ErrorText error={errors.password} />
                            }

                            <View style={{ alignItems: 'center', padding: 30 }}>
                                <View style={styles.paddingTop}>
                                    <CustomButton
                                        title={"Sign In"}
                                        onPress={handleSubmit}
                                    />
                                   
                                </View>
                                <OrText />
                                    <CustomButton
                                        title={"Register"}
                                        onPress={handleSignUp}
                                    />
                            </View>
                        </>
                    )}
                </Formik>


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