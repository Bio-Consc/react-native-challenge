import React, { Component } from 'react';
import { View } from 'react-native';

export default class UsersList extends Component {
  render() {

    /**
     * @TODO Implement UI
     * 
     * `UserDetail` (component) is called from an onPress event on the 
     *  UsersList TouchableOpacity for that given user.
     * 
     * To that `navigate` route, we pass the user object, which
     *  is referenced here as `User`.
     * 
     */
    const User = this.props.navigation.getParam('user', null);
    // console.log(User);
    
    return (
      <View>

        {/* Your code starts here ... */}

        {/* ... */}

        {/* Your code ends here ... */}

      </View>
    );
  };
};
