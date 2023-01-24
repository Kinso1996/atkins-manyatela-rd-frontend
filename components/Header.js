import {StyleSheet,View,Text,Button} from 'react-native'

const Header=({showHistoryModal,showComputeModal})=>{
    return(
        <View style={styles.headerSection}>
            <View>
                <Text style={styles.headerText}>Calculator</Text>
            </View>
            <View>
                <Button title={"Home page"} />
            </View>
            <View>
                <Button title={"Historical calculations"} onPress={showHistoryModal} />
            </View>
            <View>
                <Button title={"Compute marks"} onPress={showComputeModal} />
            </View>
        </View>
    );
}

export default Header;

const styles=StyleSheet.create({
    headerSection:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
      },
      headerText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
        color:'#000000'
      },
});