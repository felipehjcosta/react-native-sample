import React, {Component,} from 'react'
import {ListView} from 'react-native'
import PropTypes from 'prop-types'

import SearchResult from './SearchResult.js';

class SearchResultList extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.navigation.state.params.listing
    };
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.lister_url !== r2.lister_url});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.state.data)
    };
  }

  componentWillReceiveProps(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.data)
    });
  }

  renderRow(row) {
    return (
      <SearchResult
        row={row}
        navigation={this.props.navigation}
        />
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