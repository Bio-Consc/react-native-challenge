import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class UsersList extends Component {
  render() {
    return (
      <View style={Styles.homeContainer}>

        <View style={Styles.imageContainer}>
          <Image 
            source={require('../assets/logo.png')}
            style={Styles.image}
          />
        </View>

        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => this.props.navigation.navigate('UsersList')}
          >
            <Text style={Styles.buttonText}>
              View Users
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };
};

const Styles = StyleSheet.create({

  homeContainer: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    padding: 30,
    justifyContent: 'space-between'
  },

  imageContainer: {
    alignItems: 'center'
  },

  image: {
    borderRadius: 20,
    height: 200,
    marginTop: 60,
    width: 200
  },

  buttonContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },

  button: {
    backgroundColor: 'lightskyblue',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 18,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  }
  
});