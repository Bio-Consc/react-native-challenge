/**
 * Packages
 */
import Axios from 'axios';
import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, CLEAR_USERS } from './Types';

/**
 * *****************************************
 * 
 * Actions
 * 
 * *****************************************
 */

export function FetchUsers() {
  return function(dispatch) {

    /**
     * Fetch request for users
     */
    Axios.get('https://jsonplaceholder.typicode.com/users')

      /**
       * @TODO Task #2 Implement Redux
       */
    
      // Your code starts here ...

      .then()
      .catch();

      // Your code ends here ...
  };
}

export function ClearUsers() {
  return { type: CLEAR_USERS };
}