import store from "../redux/store";

// export const SERVER_URL = 'http://localhost:8001'
export const SERVER_URL = 'http://bit-taskify.herokuapp.com'
// const token = localStorage.getItem('token')

export const _post = (url, data, success = f => (f), error = f => (f)) => {

    const user = store.getState().auth.user
    fetch(
        `${SERVER_URL}/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${user.access_token}` },
        body: JSON.stringify(data),
    })
        .then(raw => raw.json())
        .then(result => {
            success(result)
        })
        .catch((err) => {
            error(err);
        });





    // fetch(`${SERVER_URL}/create/project`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(CreateProject)
    // })
    //     .then(raw => raw.json())
    //     .then(resp => {
    //         console.log(resp)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //     })
}

export const _put = (url, data, success = f => (f), error = f => (f)) => {

    let access_token = localStorage.getItem("taskify");

    fetch(
        `${SERVER_URL}/${url}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${access_token}` },
        body: JSON.stringify(data),
    })
        .then(raw => raw.json())
        .then(result => {
            success(result)
        })
        .catch((err) => {
            error(err);
        });
}

export const _get = (url, success = f => (f), error = f => (f)) => {
    let access_token = localStorage.getItem("taskify");
    // alert(JSON.stringify(user, "FKKFKFKFKFK"))
    fetch(
        `${SERVER_URL}/${url}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${access_token}` },
    })
        .then(raw => raw.json())
        .then(result => {
            success(result)
        })
        .catch((err) => {
            error(err);
        });

    // fetch(`${SERVER_URL}/getprojects`, {
    //     headers: {
    //         'authorization': `Bearer ${token}`
    //     }
    // })
    //     .then(raw => raw.json())
    //     .then(resp => {
    //         console.log(resp)
    //         setGetProjects(resp)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //     })  
}

export const _delete = (url, data, success = f => (f), error = f => (f)) => {

    const user = store.getState().auth.user
    fetch(
        `${SERVER_URL}/${url}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${user.access_token}` },
        body: JSON.stringify(data),
    })
        .then(raw => raw.json())
        .then(result => {
            success(result)
        })
        .catch((err) => {
            error(err);
        });
    }