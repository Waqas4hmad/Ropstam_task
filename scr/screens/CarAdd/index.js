import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Formik } from 'formik'
import { connect } from 'react-redux'
import CustomButton from '../../components/Button';
import Title from '../../components/Title';
import { cars, car_add } from '../../redux/action/carAction'

import styles from './style';
import Formik_Input from '../../components/formikinput';
import ErrorText from '../../components/ErrorText';
import { carValidationSchema } from '../../utils/validate';
const CarAdd = ({ car_add, navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Title title="Car Dealership" />
            </View>
            <Formik
                validationSchema={carValidationSchema}
                initialValues={{
                    name: '',
                    color: '',
                    model: '',
                    make: '',
                    regNo: '',
                }}
                onSubmit={async values => {
                    try {
                        console.log(values)

                        const success = await car_add(values)
                        console.log(success)
                        if (success) {
                            navigation.navigate('Dashboard')
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
                }>
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <>
                        <Text style={styles.title}>Name:</Text>
                        <Formik_Input
                            name="name"
                            value={values.name}
                            placeholder={"Name"}
                            onChange={handleChange('name')}
                            handleBlur={handleBlur('name')}
                        />
                        {
                            errors.name && <ErrorText error={errors.name} />
                        }
                        <Text style={styles.title}>Colors:</Text>
                        <Formik_Input
                            name="color"
                            value={values.color}
                            placeholder={"Colors"}
                            onChange={handleChange('color')}
                            handleBlur={handleBlur('color')}
                        />
                        {
                            errors.color && <ErrorText error={errors.color} />
                        }
                        <Text style={styles.title}>Model:</Text>
                        <Formik_Input
                            name="model"
                            value={values.model}
                            placeholder={"Model"}
                            onChange={handleChange('model')}
                            handleBlur={handleBlur('model')}
                        />
                        {
                            errors.model && <ErrorText error={errors.model} />
                        }
                        <Text style={styles.title}>Make:</Text>
                        <Formik_Input
                            name="make"
                            value={values.make}
                            placeholder={"Make"}
                            onChange={handleChange('make')}
                            handleBlur={handleBlur('make')}
                        />
                        {
                            errors.make && <ErrorText error={errors.make} />
                        }
                        <Text style={styles.title}>Registration:</Text>
                        <Formik_Input
                            name="regNo"
                            value={values.regNo}
                            placeholder={"Registration"}
                            onChange={handleChange('regNo')}
                            handleBlur={handleBlur('regNo')}
                        />
                        {
                            errors.regNo && <ErrorText error={errors.regNo} />
                        }
                        <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                            <View style={styles.paddingTop}>
                                <CustomButton
                                    title={"Add Car"}
                                    onPress={handleSubmit}
                                    disabled={isValid}
                                />
                            </View>
                        </View>
                    </>
                )}
            </Formik>
        </ScrollView>
    )
}

const mapStateToProps = state => ({
    cars: state.cars
})


export default connect(mapStateToProps, { cars, car_add })(CarAdd);