import {useNavigate} from 'react-router-dom';


function ProfileEdit(props){

    const navigate = useNavigate();

    function goToThanks(e){
        e.preventDefault();
        console.log("takes us to homepage");
        navigate('/imagine');
    }
    return (
        <form className='cont' onSubmit={goToThanks}>
              <h1>EDIT PROFILE</h1>
                <section className='contact-section'>
                    <label className='contact-label'>First name:
                        <input className='contact-input' type="text" name='firstName'  onChange={props.handleFirstNameChange} placeholder='First name ...'/>
                    </label>
                    <label className='contact-label'>Last name:
                        <input className='contact-input' type="text" name='lastName'   onChange={props.handleLastNameChange} placeholder='Last name ...'/>
                    </label>
                   
                    <label className='contact-label'>Age:
                    <input className='contact-input' type="text" name='age'  onChange={props.handleAgeChange} placeholder='Age ...'/>
                    </label>
                    <label className='contact-label'>Bio:
                    {/* how to make text box bigger */}
                        <input className='contact-input' type="text" name='message'  onChange={props.handleMessageChange} placeholder='Message ...'/>
                    </label>
                    <input className='contact-button' type="submit" value="Submit" />
                </section>
        </form>
    )
}

export default ProfileEdit;