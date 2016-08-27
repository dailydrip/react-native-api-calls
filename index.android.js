import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import API from './api/API'

class apiCalls extends Component {

  constructor(props){
    super(props);
    this.state = { pokemon: '' }
  }

  getPokemonInfo() {
    API.getPokemon('pikachu').then((pokemon) => {
        console.log(pokemon)
        this.setState({pokemon})
      });
  }

  componentDidMount(){
    this.getPokemonInfo()
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pokemon
        </Text>

        <View>
          <Text>Name: {this.state.pokemon.name}</Text>
          <Text>Weight: {this.state.pokemon.weight}</Text>
          <Text>Height: {this.state.pokemon.height}</Text>

          <Image
            style={styles.pokeImage}
            source={{uri: this.state.pokemon.image_url}}
          />
        </View>
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
  pokeImage: {
    width: 200,
    height: 200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('apiCalls', () => apiCalls);
