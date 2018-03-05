// @flow
// import * as React from 'react';
import {Image, ListView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions/items';

type Props = {};

class ListingComponent extends React.Component<Props> {

    componentDidMount() {
        this.props.fetchData();
    }

    renderRow(row) {
        return (
            <TouchableHighlight
                onPress={() => this.rowPressed()}
                underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.thumb} source={{uri: row.img_url}}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.price}>{row.price_formatted}</Text>
                            <Text style={styles.title}
                                  numberOfLines={1}>{row.title}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>

            </TouchableHighlight>
        );
    }

    render() {
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.lister_url !== r2.lister_url});
        return (
            <ListView
                dataSource={dataSource.cloneWithRows(this.props.items)}
                renderRow={this.renderRow.bind(this)}/>
        );
    }
}

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

// ListingComponent.propTypes = {
//     fetchData: PropTypes.func.isRequired,
//     items: PropTypes.array.isRequired,
//     // hasErrored: PropTypes.bool.isRequired,
//     isLoading: PropTypes.bool.isRequired
// };

const mapStateToProps = (state) => {
    return {
        items: state.items,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(itemsFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);