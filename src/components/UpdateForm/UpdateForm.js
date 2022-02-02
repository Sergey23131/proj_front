import {useState} from "react";
import {updateUser} from "../../services/service";
import {useHistory} from "react-router";

import './UpdateForm.css'


export function UpdateForm({updateState}) {
    let [errors, setErrors] = useState('');

    const history = useHistory()

    const onSubmit = async (e) => {
        try {
            e.preventDefault()

            const updateInfo = {
                name: e.target.name.value,
                phoneNumber: e.target.phoneNumber.value
            }

            const updatedUser = await updateUser(updateInfo, localStorage.access_token)


            if (updatedUser.message) {
                throw new Error(updatedUser.message)
            } else {
                setErrors('')
            }

            await updateState()

            history.push('/auth/' + localStorage.user_id)
        } catch (e) {
            setErrors(e.message);
        }
    }

    return (
        <div className="UpdateForm">
            <form onSubmit={onSubmit}>
                <label htmlFor='name'> User name </label>
                <input type="text" name={'name'} className={'UpdateInfo'} placeholder={'New name'}/><br/>

                <label htmlFor='phoneNumber'> User phone </label>
                <input type="text" name={'phoneNumber'} className={'UpdateInfo'} placeholder={'+380'} value={'+380'}/><br/>

                <button className={'UpdateButton'}>Update</button>

                <div className={'Errors'}>{errors}</div>
            </form>
        </div>
    );
}