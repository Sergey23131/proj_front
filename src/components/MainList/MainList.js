import {
    Switch,
    Route,
    Link,
} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {getUsers, postUser} from "../../services/service";
import {fetchUsers, fetchUserUpdate} from "../../redux/actions/actions";
import {useEffect, useState} from "react";
import {User} from "../User/User";
import './mainList.css'

export function MainList() {
    let [errors, setErrors] = useState('');

    const dispatch = useDispatch();

    const store = useSelector(state => {
        let {usersReducer} = state;
        return usersReducer
    });

    let {users} = store;

    useEffect(() => {
        getUsers().then(value => {
            dispatch(fetchUsers(value))
        })
    }, [users]);

    const onSubmit = async (e) => {
        try {
            e.preventDefault();

            const user = {
                name: e.target.name.value,
                nickName: e.target.nickName.value,
                age: e.target.age.value,
                phoneNumber: e.target.phoneNumber.value,
                email: e.target.email.value,
                role: e.target.role.value,
                password: e.target.password.value
            }

            const newUser = await postUser(user)

            if (newUser.message) {
                throw new Error(newUser.message)
            } else {
                setErrors('')
            }

        } catch (e) {
            setErrors(e.message);
        }
    }

    return (
        <div className="MainList">

            <div className={'header_links'}>
                <Link to={'/Login'} className={'Link_Button'}>LogIn</Link>
            </div>

            <div className={'Main-box'}>

                <div className={'Registration'}>
                    <h3>Registration form</h3>
                    <form onSubmit={onSubmit} className={'Create-form'}>
                        <div className={'form-box'}>
                            <div className={'first-box'}>
                                <label htmlFor='name'> <b>User name</b> </label><br/>
                                <input type="text" name={'name'} className={'mainInput'} placeholder={'Name'}/><br/>

                                <label htmlFor='nickName'> <b>User nickName</b> </label><br/>
                                <input type="text" name={'nickName'} className={'mainInput'}
                                       placeholder={'NickName'}/><br/>

                                <label htmlFor='age'><b>User age</b> </label><br/>
                                <input type="text" name={'age'} className={'mainInput'} placeholder={'Age'}/><br/>
                            </div>

                            <div className={'second-box'}>
                                <label htmlFor='phoneNumber'><b>User phone</b> </label><br/>
                                <input type="text" name={'phoneNumber'} className={'mainInput'}
                                       placeholder={'+380'} value={'+380'}/><br/>

                                <label htmlFor='email'> <b>User email</b> </label><br/>
                                <input type="text" name={'email'} className={'mainInput'} placeholder={'Email'}/><br/>

                                <label htmlFor='password'><b>User password</b> </label><br/>
                                <input type="text" name={'password'} className={'mainInput'}
                                       placeholder={'Password'}/><br/>
                            </div>

                            <div className={'third-box'}>
                                <label htmlFor='role'><b>User type</b> </label><br/>
                                <select name={'role'}>
                                    <option value='user'> User</option>
                                    <option value='admin'> Admin</option>
                                </select>

                                <div className={'Errors'}>{errors}</div>

                                <button className={'Add_button'}>Add user</button>

                            </div>
                        </div>
                    </form>
                </div>

                <div className={'UserList'}>
                    <div className={'User-header'}>
                        <h3>Name</h3>
                        <h3>NickName</h3>
                        <h3>Age</h3>
                        <h3>Role</h3>
                    </div>
                    {
                        users.map((value) => <div className={'User_box'} key={value.id}><User info={value}/></div>)
                    }
                </div>
            </div>
        </div>
    );
}

