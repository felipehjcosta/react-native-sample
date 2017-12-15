import React, { Component, } from 'react'
import { ListView, } from 'react-native'
import PropTypes from 'prop-types'

import SearchResult from './SearchResult.js';

class SearchResultList extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.lister_url !== r2.lister_url});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.data)
    };
  }
  
  componentWillReceiveProps(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.data)
    });
  }
  
  renderRow(row) {
    return (
      <SearchResult price="{row.price}" image_url="{row.img_url}">{row.text}</SearchResult>
    );
  }
  
  render() {
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    );
  }
}

export default SearchResultList