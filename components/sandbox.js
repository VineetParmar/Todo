import React, { useState } from 'react';
import { StyleSheet,Text ,View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.container}> 
          <Text style={styles.boxone}>one</Text>
          <Text style={styles.boxtwo}>two</Text>
          <Text style={styles.boxthree}>three</Text>
          <Text style={styles.boxfour}>four</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "flex-start",
        paddingTop:40,
        // marginTop:40,
        backgroundColor: '#ddd'
    },
    boxone: {
        flex: 2,
       backgroundColor: 'violet',
       padding:10,
    },
    boxtwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding:20,
     },
     boxthree: {
        flex: 1,
        backgroundColor: 'coral',
        padding:30,
     },
     boxfour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding:40,
     }

    });