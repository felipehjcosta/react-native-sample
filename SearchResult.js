import React, { Component, } from 'react'
import { 
  View,
  Image, 
  TouchableHighlight, 
  StyleSheet,
  Text
} from 'react-native'
import SearchedPropertyView from './SearchedPropertyView.js';

const styles = StyleSheet.create({
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

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  rowPressed() {
    const property = this.props.row;

    const { navigate } = this.props.navigation;
    navigate('SearchedPropertyView', { property: property });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.rowPressed()}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: this.props.row.img_url }} />
            <View  style={styles.textContainer}>
              <Text style={styles.price}>{this.props.row.price_formatted}</Text>
              <Text style={styles.title}
                    numberOfLines={1}>{this.props.row.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
        
      </TouchableHighlight>
    )
  }
}

export default SearchResult