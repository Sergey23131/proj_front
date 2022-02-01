import {Link} from "react-router-dom";

import './user.css'

export function User({info}) {
    return (
        <Link to={{pathname: `/user/${info.id}`, state: info.id}}>
            <div className="User">
                <div className={'User-info'}>
                    <p>-name: {info.name}</p>
                    <p> -nickName: {info.nickName}</p>
                    <p> -age:{info.age}</p>
                    <p> -role: {info.role}</p>
                </div>
            </div>
        </Link>
    );
}
