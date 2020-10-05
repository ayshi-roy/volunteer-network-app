import React, { useContext, useState } from 'react';
import './Register.css';
import logo from '../../logos/logo.png';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,  
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';



const Register = () => {

    const [logInUser, setLogInUser] = useContext(UserContext);
    const {title} = useParams();

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    });      
    
    const handleDateChange = (date) => {
        const newDates = {...selectedDate}
        newDates.checkIn = date;
        setSelectedDate(newDates);
      };

      const handleSubmit = () => {
        const newVolunteer = {...logInUser,...selectedDate,title};
        console.log(newVolunteer);
        fetch('http://localhost:5000/addUser',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
      
    return (
        
        <div className="container">
            <center>
                <img src={logo} style={{width:'250px', height:'80px', marginTop:'10px', marginBottom:'30px'}}></img>
            </center>                        
            <div className="row justify-content-md-center">                            
                <div className="col-md-5">
                    <div className="login">
                        <div className="createAccount">
                            <h5>Register as a Volunteer</h5>
                            <form>
                                <input type="text" name="Name" value={logInUser.name} required/>
                                <input type="text" name="email" value={logInUser.email} required/>
                                <input type="text" name="description" value={title} required/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date"
                                            format="dd/MM/yyyy"
                                            value={selectedDate.checkIn}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                        }}
                                        />                                       
                                    </Grid>
                                </MuiPickersUtilsProvider>                                
                            </form>
                            <Link to="/list">
                                <button onClick={handleSubmit} style={{width:'22rem',textAlign:'center'}} className="btn btn-primary btn-lg">
                                    Register
                                </button>
                            </Link>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    );
};

export default Register;