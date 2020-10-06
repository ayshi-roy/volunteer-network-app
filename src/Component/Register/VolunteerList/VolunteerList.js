import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import List from '../../List/List';
import logo from '../../../logos/logo.png';


const VolunteenList = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [VolunteerList, setVolunteerList] = useState([]);

    
    const handleButton = () => {
        fetch('https://whispering-harbor-42099.herokuapp.com/list?email='+logInUser.email)
         .then(res => res.json())
         .then(data => setVolunteerList(data));
    }
    handleButton();
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">
                    <img src={logo}></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/home">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </Link>                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Donation</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Events</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/login">
                                <a class="nav-link" href="#">Login</a>
                            </Link>                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">{logInUser.name}</a>
                        </li>                        
                    </ul>
                    
                </div> 
            </nav>
           
           <div className="container">
               <div className="row">
                   {
                     VolunteerList.map(list => <List handleButton={handleButton} volunteer={list}></List>)  
                   } 
               </div>
            </div> 
        </div>
    );
};

export default VolunteenList;