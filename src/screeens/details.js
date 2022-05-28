import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Pheader from '../components/pheader';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function details() {
  return (
    <SafeAreaView style={styles.container}>
    <Pheader backBtn={true}/>
    <View>
      <Text>details</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:colors.black,
   
    },
    
    item:{
  flexDirection:"row",
  alignItems:"center",
  padding:spacing[4],
  justifyContent:'space-between'
    },
  circle:{
  width:30,
  height:30,
  borderRadius:15,
    },
    list:{
      padding:spacing[4]
    },
    itemName:{
      marginLeft:spacing[4]
    },
    seperator:{
      borderBottomColor:colors.white,
      borderWidth:0.5
    }
  })