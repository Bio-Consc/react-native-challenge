# React Native Challenge | BioConcious Technologies, Inc.

A BioConcious Technologies, Inc. React Native programming challenge.

## Challenge

This challenge works with the following technologies:

- `React Native`
- `React Navigation`
- `Redux`

The repository holds a React Native application that displays a list of users from a server and lets you view each user on their own page.

- The starting component is the`Home` component, which contains a button to navigate to another component, `UsersList`.
- `UsersList` has two buttons in its header, "Fetch Users" and "Clear All".
  - **Fetch Users** begins an API call inside our Redux action to fetch users. 
  - **Clear All** clears the users from the Redux state.

## Result

Image mock ups of the result we are going for are provided in a directory at the top-level called `/CompletedAppImageMockups`. You can use these for references.

___

## Starting up the Application

The application starts up like any other React Native application. [Click here for Facebook's Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started#installing-dependencies-2).

Make sure you install all `npm` dependencies with:

```unix
cd react-native-challenge/ProfileDirectoryApp
npm install
```

Then, run the application:

```unix
# Terminal #1
npm start

# Terminal #2
react-native run-android / run-ios
```


## Todos

Some parts of the code are missing. The challenge is to complete the following todos below.

### 1. Implement the Stack Navigator

Look at the `AppBottomTabNavigator` as a starting point. Your goal with the first task is to implement the stack navigator with the following components:

- `UsersList`
- `UserDetail`

And setting `UsersList` as the first component that comes up when they navigate to the stack navigator.

```js
// src/navigation/DirectoryStackNavigator.js

import { createStackNavigator } from 'react-navigation';

/**
 * Components
 */
import UsersList from '../components/UsersList';
import UserDetail from '../components/UserDetail';

// ... Your code starts here ...
  
// ...
  
// ... Your code ends here ...

export default createStackNavigator(StackNavigatorConfig, RouteConfigs);
```

When complete, you can uncomment the two lines inside `AppBottomTabNavigator` that are currently commented to prevent any errors (allowing the app to run with the missing code).

```js
/**
 * Components
 */
import Home from '../components/HomeScreen';
// import DirectoryStackNavigator from './DirectoryStackNavigator';

const BottomTabConfig = {
  Home,
  // UsersList: DirectoryStackNavigator
};
```

### 2. Implement the Redux

The Redux you will have to implement is some code inside the `FetchUsers` function in `src/store/Actions.js` and the reducer that takes the actions you implement in `src/store/Reducers.js`.

A good starting point is inside `UsersList.js` component, where you can see us import the action creator (function), and how it gets triggered when a user clicks "Fetch Users".

```js
// src/components/UsersList.js

import { FetchUsers, ClearUsers } from '../store/Actions';

// ...

const mapDispatchToProps = { FetchUsers, ClearUsers };

// ...

fetchUsers = () => {
  this.props.FetchUsers();
}

clearUsers = () => {
  this.props.ClearUsers();
}

// ...
```

Then you will implement the action creator, callback actions from the success and error of the API call provided, and the reducer that takes those actions in the reducer.

```js
// src/store/Actions.js

/**
 * Packages
 */
import Axios from 'axios';
import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, CLEAR_USERS } from './Types';

export function FetchUsers() {
  return function(dispatch) {

    /**
     * Fetch request for users
     */
    Axios.get('https://jsonplaceholder.typicode.com/users')

      // Your code starts here ...

      .then()
      .catch();

      // Your code ends here ...
  };
}

export function ClearUsers() {
  return { type: CLEAR_USERS };
}
```

As a hint of those actions, look at the top of the file for the action types that are already imported.

Then, implement the reducer:

```js
import { FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, CLEAR_USERS } from './Types';

/**
 * *****************************************
 *
 * Reducer
 *
 * *****************************************
 */

const InitialState = {
  users: [],

  serverError: null
};

export default function RootReducer(state = InitialState, action) {
  switch(action.type) {

    /**
     * Your code begins here ...
     */

    // ...

    /**
     * Your code ends here ...
     */

    default:
      return state;
  };
};
```

## 3. Implement the `UsersDetail` Component UI

The `UserDetail` component (inside `/components`) is currently empty. For this task implement the user detail component that displays all the items from the `User` object. You can be creative with this task and choose a UI implementation that you like, or you can reference our video of the final application above.

```js
// src/components/UserDetail.js

import React, { Component } from 'react';
import { View } from 'react-native';

export default class UsersList extends Component {
  render() {

    /**
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

```

### 4. Implement a Persist Layer

Currently, when the application is closed and started back up, if users were present in the Redux store, they will be cleared. By default, Redux does not come with a persist layer.

The challenge here is to write a persist and local storage layer inside the `/store` directory. We recommend you use [redux-persist](https://github.com/rt2zz/redux-persist).

___

## All Done?

When you complete your changes, send us a link to your forked repository! We're exicted to look over your code and ask you some questions about your design and implementation decisions.

You can send it to **ask@diabits.com**.
