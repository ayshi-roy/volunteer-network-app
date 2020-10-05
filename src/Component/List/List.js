import React, { useEffect, useState } from 'react';
import list from '../../logos/list.png';
import './List.css';

const List = (props) => {
    const {_id, title, checkIn} = props.volunteer;
    const [deleted, setDeleted] = useState(false);

    const deleteProduct = (id) =>{        
        fetch('http://localhost:5000/delete/'+id,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        })
    }
   
    useEffect(() => {
       props.handleButton(); 
    },[deleted])
    
    return (
        <div className="col-md-6">
            <div className="detail">
                <div className="imgPart">
                <img src={list} height="150px" width="150px"/> 
                </div>
                <div className="detailPart">
                    <h5>{title}</h5>
                    <h6>{(new Date(checkIn).toDateString('dd/MM/yyyy'))}</h6>
                    <button onClick={() => deleteProduct(_id)} className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
        
    );
};

export default List;