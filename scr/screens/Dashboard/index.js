import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import Title from '../../components/Title';
import { cars, car_add } from '../../redux/action/carAction'
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, ScrollView } from 'react-native';

import styles from './style';
import OrText from '../../components/OrText';


const Dashboard = ({ cars, navigation }) => {
    const [selectedValue, setSelectedValue] = useState();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [carsData, setCarsData] = useState([]);


    const [options, setOptions] = useState([]);

    const getCarsApi = async () => {
        const success = await cars();
        setCarsData(success)
        const option = success.map(item => ({ label: item.name, value: item.id }));
        setOptions(option)
    }

    useEffect(() => {
        getCarsApi();

    }, [navigation])

    const handleViewCar = async () => {
        const car = carsData.find(item => item.id === value);
        navigation.navigate('Car', { car })

    }

    const handleAddCar = async () => {
        navigation.navigate('CarAdd')

    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Title title="Car Dealership" />
            </View>

            <View style={{ flex: 1, paddingTop: 15 }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={options}
                    setOpen={setOpen}
                    setValue={setValue}
                    defaultValues={selectedValue}
                    mode="BADGE"
                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                />
            </View>

            <View style={{ paddingBottom: 30, alignItems: 'center' }}>
                    <CustomButton
                        title={"View Car"}
                        onPress={handleViewCar}
                    />
                <OrText/>
                <CustomButton
                        title={"Add New Car"}
                        onPress={handleAddCar}
                    />


            </View>

        </View>
    )
}

const mapStateToProps = state => ({
    cars: state.cars
})


export default connect(mapStateToProps, { cars, car_add })(Dashboard);