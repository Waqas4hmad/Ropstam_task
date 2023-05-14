import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { Formik } from 'formik'
import Formik_Input from '../../components/formikinput';
import ErrorText from '../../components/ErrorText';
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button'
import Title from '../../components/Title'
import { register } from '../../redux/action/authAction'
import { registerValidationSchema } from '../../utils/validate';
import styles from './style'
const SignUp = ({ register, navigation }) => {
 

   
    return (
        <View style={styles.container}>
            <Title title="Sign Up" />
            <View style={styles.formBox}>
            <Formik
                validationSchema={registerValidationSchema}
                initialValues={{
                    fullname: '',
                    email: '',
                    phone: '',
                    password: '',
                }}
                onSubmit={async values => {
                    try {
                        console.log(values)
                        const success = await register(values )
                        console.log(success)
                        if (success) {
                            navigation.navigate('SignIn')
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
                }>
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <>
                        <Text style={styles.title}>Full Name:</Text>
                        <Formik_Input
                            name="fullname"
                            value={values.fullname}
                            placeholder={"Fullname"}
                            onChange={handleChange('fullname')}
                            handleBlur={handleBlur('fullname')}
                        />
                        {
                            errors.fullname && <ErrorText error={errors.fullname} />
                        }
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
                        <Text style={styles.title}>Phone:</Text>
                        <Formik_Input
                            name="phone"
                            value={values.phone}
                            placeholder={"Phone Number"}
                            onChange={handleChange('phone')}
                            handleBlur={handleBlur('phone')}
                        />
                        {
                            errors.phone && <ErrorText error={errors.phone} />
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
                                    title={"Register"}
                                    onPress={handleSubmit}
                                    disabled={isValid}
                                />
                            </View>
                        </View>
                    </>
                )}
            </Formik>
             
            </View>
        </View>
    )
}

export default connect(null, { register })(SignUp);
