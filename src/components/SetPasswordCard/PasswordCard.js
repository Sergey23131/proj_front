import {useState} from "react";
import {setPassword} from "../../services/service";
import {Link} from "react-router-dom";

import './PasswordCard.css';
import {useHistory} from "react-router";

const queryString = require('query-string');

export function PasswordCard({location}) {
    let [errors, setErrors] = useState('');

    const history = useHistory();

    const parsed = queryString.parse(location.search);

    const {token} = parsed;

    const onSubmit = async (e) => {
        try {
            e.preventDefault();

            const password = {
                password: e.target.password.value
            }

            const newPassword = await setPassword(password, token);

            history.push('/MainList');

            if (newPassword.message) {
                throw new Error(newPassword.message);
            } else {
                setErrors('');
            }
        } catch (e) {
            setErrors(e.message);
        }

    }

    return (
        <div className="PasswordCard">
            <Link to={'/MainList'} className={'BackButton'}>Back</Link>

            <div className={'PasswordBox'}>
                <form onSubmit={onSubmit}>
                    <div className={'passwordForm'}>
                        <label htmlFor='password' className={'passwordLabel'}><b>Enter new password</b> </label>
                        <input type="text" name={'password'} className={'inputChange'}
                               placeholder={' New Password'}/><br/>
                    </div>
                    <button className={'ConfirmPassword'}>Set Password</button>

                    <div className={'Errors'}>{errors}</div>
                </form>
            </div>
        </div>
    );
}