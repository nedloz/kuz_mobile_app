import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

import ferrari from './images/Black-Ferrari.png'
import Mclaren from './images/Mclaren.png'
import BMW from './images/Red-BMW.png'

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView  > 
        <Card name='Ferrari' rating='4.5' price='170,000' imgLink={ferrari}/>
        <Card name='Mclaren' rating='4.7' price='200,000' imgLink={Mclaren}/>
        <Card name='BMW M4 Series' rating='4.3' price='150,000' imgLink={BMW}/>
      </ScrollView > 
    </SafeAreaView>

  );
}


const Card = (data) => {
  return (

    <View style={styles.card}>
      <View style={styles.cardContainer}>
        {/* <View style={styles.imageContainer}> */}
          <Image style={styles.likeIcon} source={require('./images/like.png')} />
          <Image style={styles.carImage} source={data.imgLink} />
        {/* </View> */}
      </View>
      <View style={styles.cardDescription}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.descriptionContainer}>
          {/* <View style={styles.ratingContainer}> */}

            <Image style={styles.star} source={require('./images/star.png')}></Image>
            <Text style={styles.rating}>{data.rating}  |</Text>

          {/* </View> */}

          <View style={styles.newFlag}>

            <Text style={{fontSize: 9, }}>New</Text>
          </View>

        </View>
        <Text style={styles.price}>{`$${data.price}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    
    margin: 7,
    marginTop: 20,
    padding: 10,
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  card: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    alignItems: 'stretch',

  },

  cardContainer: {
    padding: 10,
    backgroundColor: '#DFDFDF',
    // objectFit: 'contain',
    width: '100%',
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  // imageContainer: {
  //   height: '90%',
  //   width: '80%',
  
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // margin: 10,
  //   objectFit: 'contain',
  //   // backgroundColor: 'red',
  // },

  likeIcon: {
    width: 20,
    height: 18,
    position: 'absolute',
    zIndex: 2,
    right: 10,
    top: 10,
    // backgroundColor: 'orange',
    objectFit: 'contain',
    
    borderRadius: 3,
  },

  carImage: {
    width: '100%',
    height: '70%',
    objectFit: 'contain',
    

  },

  cardDescription: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 2,
  },

  name: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  ratingContainer: {
    flexDirection: 'row',
    marginRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#000',


  },

  star: {
    width: 18,
    height: 18,
    // backgroundColor: 'orange',
    marginRight: 10,
  },

  rating: {
    marginRight: 10,
    opacity: .6,
  },

  newFlag: {
    width: 40,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFDFDF',
    borderRadius: 5,

  },

  price: {
    fontWeight: 'bold',
  }

});
