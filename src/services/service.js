const basicConfig = (url) => {
    return fetch('http://localhost:5000/' + url, {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

const getUsers = () => {
    return basicConfig('/users')
        .then(response => response.json())
}

const getUserByID = (user_id) => {
    return basicConfig(`/users/${user_id}`)
        .then(response => response.json())
}

const postUser = (user) => {
    return basicConfig('/users', {
        method: 'POST',
        body: JSON.stringify(user)
    })
        .then(response => response.json())
}

const deleteUser = (user_id) => {
    return basicConfig(`/users/${user_id}`, {
        method: 'DELETE',

    })
        .then(response => response.json())
}

const authUser = (info) => {
    return basicConfig('/auth', {
        method: 'POST',
        body: JSON.stringify(info)

    })
        .then(response => response.json())
}

const updateUser = (info) => {
    return basicConfig('/auth/update', {
        method: 'PUT',
        body: JSON.stringify(info)

    })
        .then(response => response.json())
}

const logoutUser = (token) => {
    return basicConfig('/auth/logout', {
        method: 'DELETE',
        body: JSON.stringify(token)

    })
        .then(response => response.json())
}

const refreshToken = (token) => {
    return basicConfig('/auth/refresh', {
        method: 'POST',
        body: JSON.stringify(token)

    })
        .then(response => response.json())
}

const forgotPassword = (email) => {
    return basicConfig('/auth/password/forgot', {
        method: 'POST',
        body: JSON.stringify(email)

    })
        .then(response => response.json())
}

const setPassword = (info) => {
    return basicConfig('/auth//password/forgot/set', {
        method: 'POST',
        body: JSON.stringify(info)

    })
        .then(response => response.json())
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