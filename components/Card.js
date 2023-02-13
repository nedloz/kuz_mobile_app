import {
  Text, View, Image,
  Pressable, TextInput,
} from 'react-native';
import {
  useState
} from 'react'



import styles from '../styles/allStyles';

function Card({name, rating, price, imgLink, isNew}) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikeLink = (evt) => {
    setIsLiked(!isLiked)
  }


  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
          <Pressable style={styles.likeButton} onPress={handleLikeLink}>
            {isLiked? (
              <Image style={styles.likeImg} source={require('../images/blackLike.png')}/>
            ): (
              <Image style={styles.likeImg} source={require('../images/like.png')}/>
            )}
            {/* <Image style={styles.likeImg} source={require(likeLink)}/> */}
          </Pressable>
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