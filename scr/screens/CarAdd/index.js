import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'
import CustomButton from '../../components/Button';
import Title from '../../components/Title';
import { cars, car_add } from '../../redux/action/carAction'

import styles from './style';
import Formik_Input from '../../components/formikinput';
import ErrorText from '../../components/ErrorText';

const carValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, ({ min }) => `Name must be at least ${min} characters`)
        .required('Name is Required'),
    color: yup
        .string()
        .required('Color is required'),
    model: yup
        .string()
        .min(4, ({ min }) => `Model number is invalide`)
        .max(4, ({ max }) => `Model number is invalide`)
        .required('Model is required'),
    make: yup
        .string()
        .min(4, ({ min }) => `Make number is invalide`)
        .max(4, ({ max }) => `Make number is invalide`)
        .required('Make is required'),
    regNo: yup
        .string()
        .required('Make is required')
        .min(5, ({ min }) => `Registration # must be at least ${min} characters`)
        .max(8, ({ max }) => `Registration # is invalide`),
})
const CarAdd = ({ car_add, navigation }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [model, setModel] = useState('');
    const [make, setMake] = useState('');
    const [regNo, setRegNo] = useState('');


    const handleCreateCar = async () => {
        let carData = {
            name: name,
            color: color,
            model: model,
            make: make,
            regNo: regNo
        };

        if (color && model && make && regNo) {
            const success = await car_add(carData)
            console.log(success)
            if (success) {
                navigation.navigate('Dashboard')
            }
        }
    }

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