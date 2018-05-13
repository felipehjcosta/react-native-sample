import { Image, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const ListItem = ({item}) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Image style={styles.thumb} source={{uri: item.img_url}} />
        <View style={styles.textContainer}>
          <Text style={styles.price}>{item.price_formatted}</Text>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        </View>
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
