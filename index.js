// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , Button } from 'react-native';
// import React,{ useState } from 'react';

// export default function App() {

//  const [count,setcount] = useState(0);

//  const add = () => { setcount(count + 1 ) }

//  const sub = () => { if(count==0){ setcount(0)} else{ setcount(count - 1 ) }}

//  const reset = () => { setcount(0) }


//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.boldText}>{count}</Text>
//       </View>
//       <View style={styles.btn}>
//         <Button title="Add"  onPress={add} />
//       </View>
//       <View style={styles.btn}>
//         <Button title="Reset"  onPress={reset} />
//       </View>
//       <View style={styles.btn}>
//         <Button title="Sub"  onPress={sub} />
//       </View>
//       <StatusBar style="auto" />
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btn: {
//     margin:10
//   }
  
  
// });