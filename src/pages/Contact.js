
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import React, {useState} from "react";


    function Profile(props){

        const navigate = useNavigate();
    
        function goToContactConfirmation(e){
            e.preventDefault();
            console.log("Imagine the future");
            navigate('profileedit');
        }


        
        return (
            <form onSubmit={goToContactConfirmation}>
                <h1>Profile Page</h1>
                <h2>Name</h2>
                <h2>Last name</h2>

                <input className='contact-button' type="submit" value="Edit profile" />
            </form>
        )
    }
export default Profile;