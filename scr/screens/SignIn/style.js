import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15,
    },
    formBox: {
        width:'100%',
        alignItems:'center',
        paddingTop:45
    },
    error :{
        fontSize:18,
        paddingTop:10,
        color:'red'
    }
}) 
export default Styles;