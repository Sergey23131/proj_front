import './loginForm.css'

export function LoginForm() {
    return (
        <div className="LoginForm">

            <form className={'Log-form'}>

                <label htmlFor='email'> User email </label>
                <input type="text" name={'email'}/><br/>

                <label htmlFor='password'> User password </label>
                <input type="text" name={'password'}/> <br/>

                <button className={'Log_buttonForm'}>Add user</button>

                <div className={'Errors'}>{}</div>
            </form>
        </div>
    );
}