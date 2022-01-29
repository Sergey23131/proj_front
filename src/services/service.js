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
    return basicConfig('/auth',{
        method:'POST',
        body: JSON.stringify(info)

    })
        .then(response => response.json())
}

export {getUsers, postUsers, getPosts}