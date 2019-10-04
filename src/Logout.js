import React from 'react';
import { Button } from 'rebass';
import firebase from './config/fbConfig';
const logOutUser = () => {
 firebase.auth().signOut();
 console.log('Logout Success')
};
const Logout = () => {
 return <Button className="btn btn-warning" onClick={logOutUser} children="LogOut" />;
};
export default Logout;
