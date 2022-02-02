import {Link} from "react-router-dom";
import {forgotPassword} from "../../services/service";
import {useState} from "react";
import {useHistory} from "react-router";

import './forgotCard.css'

export function ForgotCard() {
    let [errors, setErrors] = useState('');

    const history = useHistory();

    const onSubmit = async (e) => {
        try {
            e.preventDefault();

            const email = {
                email: e.target.email.value
            }

            const setPassword = await forgotPassword(email);

            history.push('/MainList');

            if (setPassword.message) {
                throw new Error(setPassword.message);
            } else {
                setErrors('');
            }
        } catch (e) {
            setErrors(e.message);
        }

    }

    return (
        <div className="ForgotCard">
            <Link to={'/MainList'} className={'BackButton'}>Back</Link>

            <div className={'forgotBox'}>
                <p><b>Enter your email and follow the link from the email <br/>
                    (сheck spam folder)</b></p>

                <form onSubmit={onSubmit}>
                    <label htmlFor='email' className={'forgotLabel'}> User email </label>
                    <input type="text" name={'email'} className={'inputChange'}
                           placeholder={' Your mail'}/><br/>
                    <button className={'ConfirmMail'}>Forgot Password</button>

                    <div className={'Errors'}>{errors}</div>
                </form>
            </div>
        </div>
    );
}
