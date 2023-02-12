import React, {useState} from 'react';
import {
  Text, View, Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Button,

} from 'react-native';

import styles from './styles/allStyles';
import Card from './components/Card';

import ferrari from './images/Black-Ferrari.png'
import Mclaren from './images/Mclaren.png'
import BMW from './images/Red-BMW.png'



function App() {

  return (
    <SafeAreaView>
      <ScrollView  >
        <View style={styles.main}>
          <Card name='Ferrari' rating='4.5' price='170,000' imgLink={ferrari} isNew={true}/>
          <Card name='Mclaren' rating='4.7' price='200,000' imgLink={Mclaren} isNew={false}/>
          <Card name='BMW M4 Series' rating='4.3' price='150,000' imgLink={BMW} isNew={true}/>
          <Card name='Ferrari' rating='4.5' price='170,000' imgLink={ferrari} isNew={true}/>
          <Card name='Mclaren' rating='4.7' price='200,000' imgLink={Mclaren} isNew={false}/>
          <Card name='BMW M4 Series' rating='4.3' price='150,000' imgLink={BMW} isNew={true}/>
          <Card name='Ferrari' rating='4.5' price='170,000' imgLink={ferrari} isNew={true}/>
          <Card name='Mclaren' rating='4.7' price='200,000' imgLink={Mclaren} isNew={false}/>
          <Card name='BMW M4 Series' rating='4.3' price='150,000' imgLink={BMW} isNew={true}/>
        </View>
        
      </ScrollView > 
    </SafeAreaView>
  );
}

export default App