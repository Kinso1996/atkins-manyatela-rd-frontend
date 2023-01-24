import {Modal,View,Text,ActivityIndicator} from 'react-native';

const LoadingDialog=({loadingModalVisible})=>{
    return(
        <Modal visible={loadingModalVisible}
        transparent={true}>
        <View style={{ flex:1,backgroundColor:"#00000020", justifyContent:"center",alignItems:"center"}}>
          <View style={{backgroundColor:"white",padding:10,borderRadius:5, width:"80%", alignItems:"center"}}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large" color="#f35588"/>
          </View>
        </View>
      </Modal>
    );
};

export default LoadingDialog;