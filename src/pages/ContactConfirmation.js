import { useNavigate } from 'react-router-dom';

function ProfileEdit(props) {
    const navigate = useNavigate();

    function goToThanks(e) {
        e.preventDefault();
        navigate('/categories');
    }

    return (
        <form className='profile-edit-form' onSubmit={goToThanks}>
            <h1 className='profile-edit-title'>EDIT PROFILE</h1>
            <section className='profile-edit-section'>
                <label className='profile-edit-label'>First name:
                    <input className='profile-edit-input' type="text" name='firstName' onChange={props.handleFirstNameChange} placeholder='First name ...'/>
                </label>
                <label className='profile-edit-label'>Last name:
                    <input className='profile-edit-input' type="text" name='lastName' onChange={props.handleLastNameChange} placeholder='Last name ...'/>
                </label>
                <label className='profile-edit-label'>Age:
                    <input className='profile-edit-input' type="text" name='age' onChange={props.handleAgeChange} placeholder='Age ...'/>
                </label>
                <label className='profile-edit-label'>Bio:
                    <textarea className='profile-edit-textarea' name='message' onChange={props.handleMessageChange} placeholder='Bio ...'></textarea>
                </label>
                <input className='profile-edit-submit' type="submit" value="Submit" />
            </section>
        </form>
    )
}

export default ProfileEdit;
