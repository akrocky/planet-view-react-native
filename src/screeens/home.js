import { AntDesign } from '@expo/vector-icons';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Pheader from "../components/pheader";
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';


export default function home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
     <Pheader/>
    <FlatList
    contentContainerStyle={styles.list}
    data={PLANET_LIST}
    keyExtractor={(item,index)=>item.name}
    renderItem={({item,index})=>{
      const {name,color}=item;
       return(
         <Pressable onPress={()=>{
           navigation.navigate('Details')
           }} style={styles.item}>
           <View style={{flexDirection:"row",alignItems:"center"}}>
           <View style={[styles.circle,{backgroundColor:color}]}/>
           <Text preset='h4' style={styles.itemName}>{name}</Text>
           </View>
           <AntDesign name="right" size={24} color="white" />
         </Pressable>
       );
      
    }}
    ItemSeparatorComponent={()=> <View style={styles.seperator}/>}
    >

    </FlatList>
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
