import React, { useContext } from 'react';
import logo from '../../logos/logo.png';
import google from '../../logos/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" }}; 

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {            
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email};
            setLogInUser(signInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <center>
           <img src={logo} style={{width:'250px', height:'80px', marginTop:'50px', marginBottom:'60px'}}></img>
           <div className='form'>
               <div className="formInside">
                   <h5>Login With</h5>
                   <div onClick={handleGoogleSignIn} className="log">
                       <img src={google} style={{width:'35px', height:'35px',marginRight:'40px'}}></img>
                       <p>Continue with Google</p>
                   </div>
               </div>
           </div>
        </center>
    );
};

export default Login;