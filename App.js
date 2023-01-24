import {useState,useEffect} from 'react';
import Header from './components/Header'
import HistoricalCalculations from './components/HistoricalCalculations';
import ComputeMarks from './components/ComputeMarks';

import { StyleSheet,SafeAreaView,View,Text,StatusBar,Modal,ActivityIndicator, Button,ScrollView} from 'react-native';
import LoadingDialog from './components/LoadingDialog';

export default function App() {
const [historyModalVisible,setHistoryModalVisible]=useState(false);
const [computeModalVisible,setComputeModalVisible]=useState(false);
const [loadingModalVisibilty,setLoadingModalVisibility]=useState(false);

window.baseUrl='https://differentblueglass18.conveyor.cloud';

const handleShowHistoryModal=()=>{
  setHistoryModalVisible(true);
}

const handleShowComputeModal=()=>{
  setComputeModalVisible(true);
}

const handleHideModal=()=>{
  setHistoryModalVisible(false);
  setComputeModalVisible(false);
}


  return (
      <SafeAreaView style={styles.appContainer}>
        <Header showHistoryModal={handleShowHistoryModal} showComputeModal={handleShowComputeModal} />
        <HistoricalCalculations isVisible={historyModalVisible} hideModal={handleHideModal}/>
        <ComputeMarks isVisible={computeModalVisible} hideModal={handleHideModal} />
        <View style={styles.bodySection}>
          <Text style={{fontWeight:'bold',textAlign:'center',fontSize:30}}>Welcome</Text>
        </View>
        <LoadingDialog loadingModalVisible={loadingModalVisibilty}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    marginTop:StatusBar.currentHeight,
    paddingBottom:20,
    marginHorizontal:30
  },

  bodySection:{
    flex:2,
  },
  noResults:{
    alignItems:'center',
    padding:10,

  },
});
