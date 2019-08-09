import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles.js'

class DetailUI extends React.Component {

  static propTypes = {
    detailState: PropTypes.object.isRequired
  }

  static defaultProps = {}

  render () {
    const {
      detailState
    } = this.props

    const property = detailState
    let stats = property.bedroom_number + ' bed ' + property.property_type
    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' +
        (property.bathroom_number > 1
          ? 'bathrooms' : 'bathroom')
    }

    const price = property.price_formatted

    return (
      <ScrollView styles={{backgroundColor: '#ffffff'}}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: property.img_url}} />
          <View style={styles.heading}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.title}>{property.title}</Text>
            <View style={styles.separator} />
          </View>
          <Text style={styles.description}>{stats}</Text>
          <Text style={styles.description}>{property.summary}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default DetailUI
