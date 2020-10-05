import React, { useEffect, useState } from 'react';
import './Home.css';
import '../../logos/background.jpg';
import Volunteen from '../Volunteen/Volunteen';
import Header from '../Header/Header';


const Home = () => {
    
    const [volunteerValue, setVolunteerValue] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showCard')
        .then(res => res.json())
        .then(data => setVolunteerValue(data))
    },[])

    return (
        <div className="home-part">
            <div className="content">
                <Header></Header>                
                <h1>I GROW MY HELPING PEOPLE NEED</h1>
                <div className="search">                    
                    <form className="form-inline">                                                
                        <input className="form-control" type="search" placeholder="Search" style={{width:'400px'}} aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
                <div className="">
                    <div className="map">
                        <div className="row">                            
                                {
                                volunteerValue.map( volunt => <Volunteen volunteer={volunt}></Volunteen> )   
                                }
                                                        
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;