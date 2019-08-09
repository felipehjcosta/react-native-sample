import { Text, View, Image } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const ListItem = ({item}) => {
  return (
    <View stye={styles.itemContainer}>
      <Image style={styles.itemImage} source={{uri: item.img_url}} />
      <View style={styles.contentContainer}>
        <Text style={styles.contentPrice}>{item.price_formatted}</Text>
        <Text style={styles.contentTitle} numberOfLines={1}>{item.title}</Text>
      </View>
    </View>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price_formatted: PropTypes.string.isRequired,
    img_url: PropTypes.string,
    lister_url: PropTypes.string
  })
}

export default ListItem
