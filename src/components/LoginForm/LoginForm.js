import './loginForm.css'
import {useState} from "react";
import {authUser} from "../../services/service";
import {useHistory} from "react-router";
import {fetchUserLogin, fetchUsers} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export function LoginForm() {
    let [errors, setErrors] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const forgotButton = () => {
        history.push('/forgotPassword')
    }

    const onSubmit = async (e) => {
        try {
            e.preventDefault();

            const login = {
                email: e.target.email.value,
                password: e.target.password.value
            }

            const logination = await authUser(login)

            if (logination.message) {
                throw new Error(logination.message)
            } else {
                setErrors('')
            }

            localStorage.setItem('access_token', logination.access_token)

            localStorage.setItem('refresh_token', logination.refresh_token)

            localStorage.setItem('user_id', logination.user.id)


            history.push('/auth/' + logination.user.id)

        } catch (e) {
            setErrors(e.message);
        }
    }

    return (
        <div className="LoginForm">

            <Link to={'/MainList'} className={'BackButton'}>Back</Link>

            <div className={'Log-box'}>

                <form className={'Log-form'} onSubmit={onSubmit}>

                    <label htmlFor='email'> User email </label>
                    <input type="text" name={'email'} className={'inputChange'}/><br/>

                    <label htmlFor='password'> User password </label>
                    <input type="text" name={'password'} className={'loginInput'}/> <br/>

                    <button className={'Log_buttonForm'}>Log in</button>
                </form>

                <button className={'Forgot_buttonForm'} onClick={forgotButton}>Forgot Password</button>

                <div className={'Errors'}>{errors}</div>
            </div>
        </div>
    );
}