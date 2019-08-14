import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { FetchUsers, ClearUsers } from '../store/Actions';
import Users from '../constants/Users'

const mapStateToProps = state => {

  console.log(state)
  
  return {
    users: state.users,
    serverErrors: state.serverErrors
  };
};

const mapDispatchToProps = { FetchUsers, ClearUsers };

class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: Users
    };
  }

  fetchUsers = () => {
    this.props.FetchUsers();
  }

  clearUsers = () => {
    this.props.ClearUsers();
  }
  
  render() {

    const UsersComponentList = (
      
      /**
       * @TODO Replace this line with the commented out line
       *  just below it once you successfully retrieve users.
       */
      this.state.users && this.state.users.map(user => {
      // this.props.users && this.props.users.map(user => {

        return (
          <View key={user.id}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UserDetail', { user })}
              style={Styles.userButton}
            >
              <Text style={Styles.userText}>{ user.name }</Text>
              <Text style={Styles.userText}>{ user.email }</Text>
              <Text style={Styles.userText}>{ user.phone }</Text>
            </TouchableOpacity>
          </View>
        )
      })
    );
    
    return (
      <ScrollView style={Styles.container}>

        <View style={Styles.headerContainer}>
          <Text style={Styles.headerText}>
            All Users
          </Text>
        </View>

        <View style={Styles.fetchContainer}>

          <TouchableOpacity
            onPress={this.fetchUsers}
            style={Styles.fetchButton}
          >
            <Text style={Styles.fetchButtonText}>
              Fetch Users
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.clearUsers}
            style={Styles.clearButton}
          >
            <Text style={Styles.clearButtonText}>
              Clear Users
            </Text>
          </TouchableOpacity>

        </View>

        <View style={Styles.contentContainer}>

          { UsersComponentList }

        </View>
        
      </ScrollView>
    );
  };
};

const Styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  headerContainer: {
    backgroundColor: 'lightskyblue',
    paddingVertical: 20,
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  contentContainer: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    padding: 16,
  },

  fetchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },

  fetchButton: {
    backgroundColor: 'darkgreen',
    borderRadius: 8,
    paddingHorizontal: 26,
    paddingVertical: 18,
  },

  fetchButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  
  clearButton: {
    backgroundColor: 'steelblue',
    borderRadius: 8,
    paddingHorizontal: 26,
    paddingVertical: 18,
  },

  clearButtonText: {
    color: 'white',
    textAlign: 'center',
  },


  userButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  userText: {
    fontSize: 16,
    marginBottom: 8,
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);