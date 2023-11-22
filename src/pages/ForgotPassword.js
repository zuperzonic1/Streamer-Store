import {useNavigate} from 'react-router-dom';


function ForgotPassword(props){

    const navigate = useNavigate();

    function goToThanks(e){
        e.preventDefault();
        console.log("takes us to homepage");
        navigate('/categories');
    }
    return (
        <form className='cont' onSubmit={goToThanks}>
              <h1>Forgot Password</h1>
                <section className='contact-section'>
                    
                    <label className='contact-label'>Email:
                        <input className='contact-input' type="text" name='email'  onChange={props.handleEmailChange} placeholder='Email ...'/>
                    </label>
                   
                    <label className='contact-label'>Bio:
                        <input className='contact-input' type="text" name='message'  onChange={props.handleMessageChange} placeholder='Message ...'/>
                    </label>
                    <input className='contact-button' type="submit" value="Submit" />
                </section>
        </form>
    )
}

export default ForgotPassword;