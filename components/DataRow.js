import {Text,View,Button,StyleSheet} from 'react-native'

const DataRow=({message,index})=>{

    return(
        <View style={styles.rowContainer}>
            <View style={styles.titleSection}>
                <Text>{index}. {message}</Text>
            </View>
        </View>
    );
};

export default DataRow;

const styles=StyleSheet.create({
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        borderWidth:2,
        borderRadius:5,
        marginTop:10
    },
    titleSection:{
        width:'100%',
        color:'#000000'

    },
});