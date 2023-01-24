import {useState,useEffect} from 'react'
import {StyleSheet,ScrollView,View,TextInput,Button,Modal,Text} from 'react-native'
import LoadingDialog from './LoadingDialog';
import DataRow from './DataRow';


const HistoricalCalculations=({isVisible,hideModal})=>{
    const [serverObjects,setServerObjects]=useState([]);
    const [loadingModalVisibilty,setLoadingModalVisibility]=useState(false);

    const FetchHistoricalData= async()=>{
        setLoadingModalVisibility(true);
        fetch(window.baseUrl+'/Math/HistoricalCalculations',{
                           method:'GET',
                           headers:{
                            'Content-Type':'application/json',
                           }
                          }).then((response)=>response.json())
                          .then((data)=>{
                            setLoadingModalVisibility(false);
                            setServerObjects(data);
                          }).catch((error)=>{
                            setLoadingModalVisibility(false);
                            setServerObjects([]);
                          });
      };

    useEffect(() => {
        FetchHistoricalData();
      }, []);

      return(
        <Modal visible={isVisible} animationType='fade'>
            <LoadingDialog loadingModalVisible={loadingModalVisibilty}/>
            <View style={styles.historyContainer}>
                <View style={styles.headerSection}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>
                        Historical Calculations
                    </Text>
                    <Button color={'orange'} title={'back'} onPress={hideModal} />
                </View>
                <View style={styles.bodySection}>
                    <ScrollView>
                        {serverObjects.map((serverObject,index)=>{
                            return <DataRow key={index} index={index+1} message={serverObject} />
                        })
                        }
                        {!loadingModalVisibilty && serverObjects.length==0 &&
                        <View style={styles.noResults}>
                            <Text>No results found </Text>
                        </View>
                        }
                    </ScrollView>
                </View>
            </View>
        </Modal>
      );
}

export default HistoricalCalculations;
const styles = StyleSheet.create({
    historyContainer:{
        padding:30,
        flex:1,
        justifyContent:'center',
        alignItems:'stretch'
    },
    headerSection:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
      },
    bodySection:{
      flex:10,
    },
    noResults:{
      alignItems:'center',
      padding:10,
  
    },
  });