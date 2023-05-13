import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        paddingHorizontal:15,
        paddingTop:15,
    },
    formBox: {
        flex:1,
        width:'100%',
        alignItems:'center',

        paddingTop:25
    },
    error :{
        fontSize:18,
        paddingTop:10,
        color:'red'
    }
}) 
export default Styles;