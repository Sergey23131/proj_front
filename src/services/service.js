const url = 'http://localhost:5000/';

const getUsers = () => {
    return fetch(url + 'users', {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const getUserByID = (user_id) => {
    return fetch(url + `users/${user_id}`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const postUser = (user) => {
    return fetch(url + 'users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
}

const deleteUser = (user_id) => {
    return fetch(url + `users/${user_id}`, {
        method: 'DELETE',

    })
        .then((response) => response.json())
}

const authUser = (info) => {
    return fetch(url + 'auth', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
}

const updateUser = (info, token) => {
    return fetch(url + 'auth/update', {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
            'Authorization': token,
            'Content-type': 'application/json; charset=UTF-8'
        },

    })
        .then((response) => response.json())
}

const logoutUser = (token) => {
    return fetch(url + 'auth/logout', {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        }
    })
        .then((response) => response.json())
}

const refreshToken = (token) => {
    return fetch(url + 'auth/refresh', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
}

const forgotPassword = (email) => {
    return fetch(url + 'auth/password/forgot', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
}

const setPassword = (password, token) => {
    return fetch(url + 'auth//password/forgot/set', {
        method: 'POST',
        body: JSON.stringify(password),
        headers: {
            'Authorization': token,
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
}

export {
    getUsers,
    getUserByID,
    postUser,
    deleteUser,
    updateUser,
    logoutUser,
    authUser,
    refreshToken,
    forgotPassword,
    setPassword
}