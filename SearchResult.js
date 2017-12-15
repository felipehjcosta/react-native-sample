import React, { Component, } from 'react'
import { 
  View,
  Image, 
  TouchableHighlight, 
  StyleSheet,
  Text
} from 'react-native'

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class SearchResult extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: this.props.image_url }} />
            <View  style={styles.textContainer}>
              <Text style={styles.price}>{this.props.price}</Text>
              <Text style={styles.title}
                    numberOfLines={1}>{this.props.children}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
        
      </TouchableHighlight>
    )
  }
}

export default SearchResult