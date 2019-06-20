import React from 'react';
import { Button } from 'rebass';
import firebase from './config/fbConfig';
const logOutUser = () => {
 firebase.auth().signOut();
};
const LogOut = () => {
 return <Button onClick={logOutUser} children="Log Out" />;
};
export default Logout;
