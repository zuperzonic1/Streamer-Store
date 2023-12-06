import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../images/1.jpg';
import { Link } from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Admin = "admin"; 
    const Password = "password"; 

    function goToThanks(e) {
        e.preventDefault();

        if (username === Admin && password === Password) {
            // console.log("Login successful");
            navigate('/categories');
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <form className='cont' onSubmit={goToThanks}>
            <section className='log-in-section'>
                
                <img src={img} className='login-banner' alt='mockup img'/>
                <h1 className='login-title'>LOG-IN-PAGE</h1>
                <br />
                <section className='log-in-section1'>
                <label className='login-text' > USERNAME:
                    <input 
                        className='inputbox' 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder='enter your username ...'/>
                </label>
                <label className='login-text' > PASSWORD:
                    <input 
                        className='inputbox' 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='enter your password ...'/>
                </label>
                </section>
                <br />
                <input className='button' type="submit" value="Log In" />
                <br />
                <section className='log-in-section1'>
                    <Link className='button signup' to="/signup">Sign Up</Link>
                    <Link className='button forgotpassword' to="/forgotpassword">Forgot Password</Link>
                </section>
            <h1 className='para-title'>WHO ARE WE ?</h1>
            <p className='para-text'>
            Oh, behold the wonders of randomness, where words frolic and sentences dance in a chaotic symphony of pure, unadulterated chance!
             Here we are, in the realm of unpredictability, where the sentences are as random as a chicken playing the trombone in a marching 
             band of penguins!
            </p>
            </section>
        </form>
    )
}

export default LogIn;
