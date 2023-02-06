import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Like from './images/like.svg'

export default function App() {
  return (
    <View style={styles.main}>
      <Card name='BMW M4 Series' rating='4.5' price='170,000'/>
      <Card name='BMW M4 Series' rating='4.5' price='170,000'/>
      <Card name='BMW M4 Series' rating='4.5' price='170,000'/>
    </View>

  );
}


const Card = (data) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          {/* <Like style={styles.likeIcon} source={require('./images/like.svg')}></Like> */}
          <Image style={styles.carImage} source={require('./images/ferrari.png')}></Image>
        </View>
      </View>
      <View style={styles.cardDescription}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.descriptionContainer}>
          <View style={styles.ratingContainer}>
            <Image style={styles.star}></Image>
            <Text style={styles.rating}>{data.rating}</Text>
          </View>
          <View style={styles.newFlag}>
            <Text>New</Text>
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
    width: '48%',
    height: 240,
    marginBottom: 10,
    alignItems: 'stretch',

  },

  cardContainer: {
    backgroundColor: '#DFDFDF',
    width: '100%',
    height: 130,
    borderRadius: 20,
    marginBottom: 10,
  },

  imageContainer: {
    margin: 10,
  },

  likeIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex: 2,
    right: 7,
    // backgroundColor: 'orange',
    objectFit: 'cover',
    borderRadius: 3,
  },

  carImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',

  },

  cardDescription: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 2,
  },

  name: {
    fontWeight: 'bold',
  },

  descriptionContainer: {
    flexDirection: 'row'
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
    backgroundColor: 'orange',
    marginRight: 10,
  },

  rating: {
    marginRight: 10,
  },

  newFlag: {
    width: 40,
    height: 20,
    alignItems: 'center',
    backgroundColor: '#DFDFDF',
    borderRadius: 5,

  },

  price: {
    fontWeight: 'bold',
  }

});
