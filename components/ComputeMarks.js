import {useState} from 'react'
import {StyleSheet,View,TextInput,Button,Modal,Text,StatusBar} from 'react-native'
import LoadingDialog from './LoadingDialog';


const ComputeMarks=({isVisible,hideModal})=>{
    const [loadingModalVisibilty,setLoadingModalVisibility]=useState(false);
    const [firstNumber,setFirstNumber]=useState(0);
    const [secondNumber,setSecondNumber]=useState(0);
    const [mathOperation,setMathOperation]=useState('Addition');

    const FetchMathResult= async()=>{
        setLoadingModalVisibility(true);
        var payload={fisrtNumber:parseFloat(firstNumber),secondNumber:parseFloat(secondNumber),mathOperation:mathOperation};
        fetch(window.baseUrl+'/Math/MathResult',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(payload)
           }).then((response)=>response.json())
           .then((data)=>{
            console.log(data);
            setLoadingModalVisibility(false);
             if(data.isSuccess){
                setFirstNumber(0);
                setSecondNumber(0);
                setMathOperation('Addition');
                alert(data.message);
             }else{
                alert(data.message);
             }
           }).catch((error)=>{
            setLoadingModalVisibility(false);
             alert(error);
           });
      };

const handleSubmitMath=()=>{
    //Validate
    FetchMathResult();
}
      return(
        <Modal visible={isVisible} animationType='fade'>
            <LoadingDialog loadingModalVisible={loadingModalVisibilty}/>
            <View style={styles.historyContainer}>
                <View style={styles.headerSection}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>
                        Compute Marks
                    </Text>
                    <Button color={'orange'} title={'back'} onPress={hideModal} />
                </View>
                <View style={styles.bodySection}>
                    <View style={styles.textInputSection}>
                        <TextInput style={styles.inputItems} keyboardType='numeric' placeholder='First Number' onChangeText={(txt)=>{setFirstNumber(txt)}} value={firstNumber}/>
                        <TextInput style={styles.inputItems} keyboardType='numeric' placeholder='Second Number' onChangeText={(txt)=>{setSecondNumber(txt)}} value={secondNumber}/>
                    </View>
                    <View style={styles.mathOperationsSection}>
                        <Button title={'   +   '} style={styles.mathBtn}  onPress={()=>{setMathOperation('Addition')}} />
                        <Button title={'   -   '} style={styles.mathBtn} color={'red'} onPress={()=>{setMathOperation('Subtraction')}} />
                        <Button title={'   *   '} style={styles.mathBtn} color={'green'} onPress={()=>{setMathOperation('Multiplication')}} />
                        <Button title={'   /   '} style={styles.mathBtn} color={'orange'} onPress={()=>{setMathOperation('Division')}} />
                    </View>
                    <View style={{marginTop:10,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold'}}>Current Operation is: {mathOperation}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button title={'Submit'} onPress={handleSubmitMath} />
                    </View>
                </View>
            </View>
        </Modal>
      );
}

export default ComputeMarks;
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
      mathOperationsSection:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around'
      }
      ,
      inputItems:{
        padding:10,
        marginTop:10,
        borderWidth:1,
        borderColor:'#cccccc'
    },
    bodySection:{
      flex:10,
    },
    noResults:{
      alignItems:'center',
      padding:10,
  
    },
    mathBtn:{

    },
  });