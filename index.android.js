import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Network,
  View
} from 'react-native';

class apiCalls extends Component {

  constructor(props){
    super(props);
    this.state = { movies: [] }
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies);
        this.setState({movies: responseJson.movies});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount(){
    this.getMoviesFromApiAsync();
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          API Calls
        </Text>
        { this.state.movies.map((item, index)=>(
          <Text key={index} style={styles.instructions}>
            {item.title} - {item.releaseYear}
          </Text>))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('apiCalls', () => apiCalls);
