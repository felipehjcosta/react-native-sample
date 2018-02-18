import React from 'react';
import {Button, Container, Content, Input, Item, Spinner, Text} from 'native-base'
import SearchResultList from './SearchResultList.js';
import {Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center'
    },
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    locationButton: {
        height: 36,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        borderWidth: 2,
        borderColor: '#48BBEC',
        borderRadius: 8,
    },
});

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: 'london',
            isLoading: false,
            message: ''
        };
    }

    onSearchTextChanged(event) {
        this.setState({searchString: event.nativeEvent.text});
    }

    _executeQuery(query) {
        this.setState({isLoading: true, message: ''});
        fetch(query)
            .then(response => response.json())
            .then(json => this._handleResponse(json.response))
            .catch(error =>
                this.setState({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                }));
    }

    _handleResponse(response) {
        this.setState({isLoading: false, message: ''});
        if (response.application_response_code.substr(0, 1) === '1') {
            const {navigate} = this.props.navigation;
            navigate('SearchResultList', {listing: response.listings})
        } else {
            this.setState({message: 'Location not recognized; please try again.'});
        }
    }

    onSearchPressed() {
        var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        console.log(">>>> query: " + query)
        this._executeQuery(query);
    }

    onLocationPressed() {
        navigator.geolocation.getCurrentPosition(
            location => {
                var search = location.coords.latitude + ',' + location.coords.longitude;
                this.setState({searchString: search});
                var query = urlForQueryAndPage('centre_point', search, 1);
                this._executeQuery(query);
            },
            error => {
                this.setState({
                    message: 'There was a problem with obtaining your location: ' + error
                });
            });
    }

    render() {
        const spinner = this.state.isLoading ? (<Spinner/>) : (<View/>);

        return (
            <Container>
                <Content>
                    <View style={styles.container}>

                        <Text style={styles.description}>
                            Search for houses to buy!
                        </Text>

                        <Image source={require('./Resources/house.png')} style={styles.image}/>
                        <View style={styles.flowRight}>
                            <Item style={styles.searchInput}>
                                <Input onChange={this.onSearchTextChanged.bind(this)}
                                       placeholder="Search via name or postcode"/>
                            </Item>
                            <Button onPress={this.onSearchPressed.bind(this)}>
                                <Text style={styles.buttonText}>Go</Text>
                            </Button>

                        </View>
                        <Button
                            onPress={this.onLocationPressed.bind(this)}>
                            <Text style={styles.buttonText}>
                                Use your Location!
                            </Text>
                        </Button>


                        {spinner}

                        <Text style={styles.description}>{this.state.message}</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber
    };
    data[key] = value;

    const querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');

    return 'https://api.nestoria.co.uk/api?' + querystring;
}

module.exports = SearchScreen;