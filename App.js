import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Text from './src/components/text/text';
import details from './src/screeens/details';
import home from './src/screeens/home';
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded]=useFonts({
    'Antonio-Medium':require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold':require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular':require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });
  if (!loaded) {
    return <Text>Font is loading.......</Text>;
  };
 
  return (
    <>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={home}  />
        <Stack.Screen name="Details" component={details}  />
      </Stack.Navigator>
      
    </NavigationContainer>
   <StatusBar style='light'/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  alignItems: 'center',
    justifyContent: 'center'
   
  },
});
