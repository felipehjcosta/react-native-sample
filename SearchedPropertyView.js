import React, {Component} from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {},
    heading: {
        backgroundColor: '#F8F8F8',
    },
    separator: {
        height: 1,
        backgroundColor: '#DDDDDD'
    },
    image: {
        width: 400,
        height: 300
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        margin: 5,
        color: '#656565'
    },
    description: {
        fontSize: 18,
        margin: 5,
        color: '#656565'
    }
});

class SearchedPropertyView extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {state} = this.props.navigation;
        const property = state.params.property;
        let stats = property.bedroom_number + ' bed ' + property.property_type;
        if (property.bathroom_number) {
            stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
                ? 'bathrooms' : 'bathroom');
        }

        const price = property.price_formatted.split(' ')[0];

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image}
                           source={{uri: property.img_url}}/>
                    <View style={styles.heading}>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.title}>{property.title}</Text>
                        <View style={styles.separator}/>
                    </View>
                    <Text style={styles.description}>{stats}</Text>
                    <Text style={styles.description}>{property.summary}</Text>
                </View>
            </ScrollView>
        );
    }
}

export default SearchedPropertyView