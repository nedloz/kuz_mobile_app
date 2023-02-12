import {
  Text, View, Image,
  Pressable, Button
} from 'react-native';
// import { Icon } from '@rneui/themed';


import styles from '../styles/allStyles';

function Card({name, rating, price, imgLink, isNew}) {
  


  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
          <Pressable style={styles.likeButton}>
            <Image style={styles.likeImg} source={require('../images/like.png')} />
          </Pressable>
          {/* <Button title='' color=''><Image style={styles.likeImg} source={require('../images/like.png')} /></Button> */}
          <Image style={styles.carImage} source={imgLink} />
      </View>
      <View style={styles.cardDescription}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.descriptionContainer}>
            <Image style={styles.star} source={require('../images/star.png')}></Image>
            <Text style={styles.rating}>{rating}  {isNew?'  |': ''}</Text>
            {isNew? (
              <View style={styles.newFlag}>
                <Text style={{fontSize: 9, }}>New</Text>
              </View>
            ): (<></>)}
          
        </View>
        <Text style={styles.price}>{`$${price}`}</Text>
      </View>
    </View>
  )
}

export default Card