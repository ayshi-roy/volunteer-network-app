import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logos/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container">            
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
                                <a class="nav-link" href="#">Blog</a>
                            </Link>                            
                        </li>
                        <li class="nav-item">
                            <Link to="/register">
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Register</button>
                            </Link>                            
                        </li>
                        <li class="nav-item">                            
                            <button class="btn btn-dark my-2 my-sm-0" type="submit">Admin</button>
                        </li>
                    </ul>
                    
                </div> 
            </nav>
        </div>
    );
};

export default Header;