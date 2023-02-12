import {StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  main: {
    height: '100%',
    margin: 7,
    marginTop: 0,
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
    width: '100%',
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',

  },
  likeButton: {
    width: 20,
    height: 18,
    // backgroundColor: 'red',
    position: 'absolute',
    top: 15,
    right: 15,
  },

  likeImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    },

  carImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
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

export default styles