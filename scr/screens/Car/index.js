import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Formik } from 'formik'
import { connect } from 'react-redux'
import Formik_Input from '../../components/formikinput';
import ErrorText from '../../components/ErrorText';
import CustomButton from '../../components/Button';
import Title from '../../components/Title';
import { cars, car_add, car_update, car_delete } from '../../redux/action/carAction'
import { carValidationSchema } from '../../utils/validate';
import styles from './style';

const Car = ({ cars, car_add, car_update, car_delete, route, navigation }) => {
    const { car } = route.params;


    const handleUpdateCar = async () => {
        let carData = {
            name: name,
            color: color,
            model: model,
            make: make,
            regNo: regNo
        };

        if (color && model && make && regNo) {
            const success = await car_update(carData, car.id)
            console.log(success)
            // if (success) {
            //      navigation.navigate('Dashboard')
            // }
        }
    }

    const handleDeleteCar = async () => {
        try {
            const success = await car_delete(car.id)
            console.log(success)
            if (success) {
                navigation.navigate('Dashboard')
            }
        } catch (error) {

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
                    name: car?.name,
                    color: car?.color,
                    model: car?.model,
                    make: car?.make,
                    regNo: car?.regNo,
                }}
                onSubmit={async values => {
                    try {
                        console.log(values)

                        const success = await car_update(values, car.id)
                        console.log(success)
                        if (success) {
                            navigation.navigate('Dashboard')
                        }
                    } catch (error) {
                        console.log(error?.message)
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
                            <View style={styles.paddingTop}>
                                <CustomButton
                                    title={"Delete"}
                                    onPress={handleDeleteCar}
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


export default connect(mapStateToProps, { cars, car_add, car_update, car_delete })(Car);