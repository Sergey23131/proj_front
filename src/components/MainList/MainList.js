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
            console.log(user)

            postUser(user).then(value => console.log(value))

            /* if (userfe.message) {
                 throw new Error(userfe.message)
             } else {
                 setErrors('')
             }*/

        } catch (e) {
            setErrors(e.message);
        }
    }

    return (
        <div className="MainList">

            <div className={'header_links'}>
                <Link to={''} className={'Link_Button'}>Registration</Link>
                <Link to={''} className={'Link_Button'}> LogIn</Link>
            </div>

            <div className={'Main-box'}>

                <div className={'Registration'}>

                    <form onSubmit={onSubmit} className={'Create-form'}>

                        <label htmlFor='name'> User name </label>
                        <input type="text" name={'name'}/>

                        <label htmlFor='nickName'> User nickName </label>
                        <input type="text" name={'nickName'}/>

                        <label htmlFor='age'> User age </label>
                        <input type="text" name={'age'}/><br/>

                        <label htmlFor='phoneNumber'> User phone </label>
                        <input type="text" name={'phoneNumber'}/>

                        <label htmlFor='email'> User email </label>
                        <input type="text" name={'email'}/>

                        <label htmlFor='password'> User password </label>
                        <input type="text" name={'password'}/> <br/>

                        <label htmlFor='role'> User type </label>
                        <select name={'role'}>
                            <option value='user'>User</option>
                            <option value='admin'>Admin</option>
                        </select>

                        <button className={'Add_button'}>Add user</button>

                        <div className={'Errors'}>{errors}</div>
                    </form>
                </div>

                <div className={'userList'}>
                    {
                        users.map((value) => <div className={'User_box'} key={value.id}><User info={value}/></div>)
                    }
                </div>
            </div>
        </div>
    );
}

