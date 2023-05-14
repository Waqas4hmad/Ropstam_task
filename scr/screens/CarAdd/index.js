import React, { useState } from 'react'
import { connect } from 'react-redux'
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import Title from '../../components/Title';
import { cars, car_add } from '../../redux/action/carAction'
import { View, Text } from 'react-native';

import styles from './style';


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
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Title title="Car Dealership" />
            </View>
            <Text style={styles.title}>Name:</Text>
            <CustomInput value={name} placeholder={"Colors"} onChange={setName} />
            <Text style={styles.title}>Colors:</Text>
            <CustomInput value={color} placeholder={"Colors"} onChange={setColor} />
            <Text style={styles.title}>Model:</Text>
            <CustomInput value={model} placeholder={"Model"} onChange={setModel} />
            <Text style={styles.title}>Make:</Text>
            <CustomInput value={make} placeholder={"Make"} onChange={setMake} />
            <Text style={styles.title}>Registration:</Text>
            <CustomInput value={regNo} placeholder={"Registration"} onChange={setRegNo} />
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                <View style={styles.paddingTop}>
                    <CustomButton
                        title={"Add Car"}
                        onPress={handleCreateCar}
                    />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    cars: state.cars
})


export default connect(mapStateToProps, { cars, car_add })(CarAdd);