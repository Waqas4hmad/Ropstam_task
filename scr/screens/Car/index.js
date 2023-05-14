import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import Title from '../../components/Title';
import { cars, car_add } from '../../redux/action/carAction'
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, ScrollView } from 'react-native';

import styles from './style';


const Car = ({ cars, car_add, route }) => {
    const { car } = route.params;
    const [selectedValue, setSelectedValue] = useState();
    const [name, setName] = useState(car?.name);
    const [color, setColor] = useState(car?.color);
    const [model, setModel] = useState(car?.model);
    const [make, setMake] = useState(car?.make);
    const [regNo, setRegNo] = useState(car?.regNo);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);


    const [options, setOptions] = useState([
    ]);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const getCarsApi = async () => {
        const success = await cars();
        // setItems(success)
        console.log("ddd", success)

        const option = success.map(item => ({ label: item.name, value: item.id }));
        setOptions(option)
    }

    useEffect(() => {
        getCarsApi();

    }, [])

    const handleCreateCar = async () => {
        let carData = {
            name: name,
            color: color,
            model: model,
            make: make,
            regNo: regis
        };

        if (color && model && make && regNo) {
            const success = await car_add(carData)
            console.log(success)
            if (success) {
                // navigation.navigate('SignIn')
            }
        }
    }

    const handleUpdateCar = () => {
        const car = { color, model, make, regNo }
    }

    const handleDeleteCar = () => {
        const car = { color, model, make, regNo }
    }
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Title title="Car Dealership" />
            </View>
            <Text style={styles.title}>Name:</Text>
            <CustomInput value={name} placeholder={"Colors"} onPress={setName} />
            <Text style={styles.title}>Colors:</Text>
            <CustomInput value={color} placeholder={"Colors"} onPress={setColor} />
            <Text style={styles.title}>Model:</Text>
            <CustomInput value={model} placeholder={"Model"} onPress={setModel} />
            <Text style={styles.title}>Make:</Text>
            <CustomInput value={make} placeholder={"Make"} onPress={setMake} />
            <Text style={styles.title}>Registration:</Text>
            <CustomInput value={regNo} placeholder={"Registration"} onPress={setRegNo} />
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>

                <CustomButton
                    title={"Update"}
                    onPress={handleCreateCar}
                />
                <View style={styles.paddingTop}>
                    <CustomButton
                        title={"Delete"}
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


export default connect(mapStateToProps, { cars, car_add })(Car);