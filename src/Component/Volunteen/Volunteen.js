import React from 'react';
import { Link } from 'react-router-dom';
import './Volunteen.css';

const Volunteen = (props) => {
    
    const {title, image} = props.volunteer;
    
    return (
        <div className="col-md-3">
            <Link to={`/register/${title}`}>            
            <div className="card" style={{width: '18rem', margin: '20px'}}>
                <img className="card-img-top" src={image} alt="Card image cap"/>
                <div className="card-body">
                   <h4 className="card-title">{title}</h4>                    
                </div>
            </div>
            </Link> 
        </div>
    );
};

export default Volunteen;