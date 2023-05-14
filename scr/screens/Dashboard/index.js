import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import Title from '../../components/Title';
import { cars } from '../../redux/action/carAction'
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, ScrollView } from 'react-native';

import styles from './style';


const Dashboard = ({ cars }) => {
    const [selectedValue, setSelectedValue] = useState();
    const [color, setColor] = useState('');
    const [model, setModel] = useState('');
    const [make, setMake] = useState('');
    const [regNo, setRegNo] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);


    const [options, setOptions] = useState([
    ]);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
      ]);
    const getCarsApi = async () => {
        const success = await cars();
        // setItems(success)
        console.log("ddd",success)

        const option = success.map(item => ({ label: item.name, value: item.id }));
        setOptions(option)
    }

    useEffect(() => {
        getCarsApi();
        
    }, [])

    const handleCreateCar = () => {
        const car = { color, model, make, regNo }
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
            <View >
           
           
            </View>
          
            <Text>{JSON.stringify(cars)}</Text>


            <Text style={styles.title}>Colors:</Text>
            <CustomInput placeholder={"Colors"} onPress={null} />
            <Text style={styles.title}>Model:</Text>
            <CustomInput placeholder={"Model"} onPress={null} />
            <Text style={styles.title}>Make:</Text>
            <CustomInput placeholder={"Make"} onPress={null} />
            <Text style={styles.title}>Registration:</Text>
            <CustomInput placeholder={"Registration"} onPress={null} />
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                <CustomButton
                    title={"Save"}
                    onPress={handleCreateCar}
                />
                <View style={{ paddingTop: 15 }}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={options}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                defaultValues={selectedValue}
        
                mode="BADGE"
                badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
            />
                </View>

            </View>

        </View>
    )
}

const mapStateToProps = state => ({
    cars: state.cars
})


export default connect(mapStateToProps, { cars })(Dashboard);