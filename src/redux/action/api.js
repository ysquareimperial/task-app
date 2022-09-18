  import store from "../store";

const localEndpoint = "http://localhost:49555/api";
const remoteEndpoint = 'https://yge.wvi.mybluehost.me/new_mylikita_server/api'
export const apiURL =
  process.env.NODE_ENV === 'production' ? remoteEndpoint : localEndpoint

const token = localStorage.getItem("@@__token_mylikita");

const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  //   const facilityId = store.getState().auth.activeBusiness.id

  //   data.facilityId = facilityId
  // console.log(data)
  fetch(`${apiURL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //  authorization: token
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.status >= 400) {
        error(response);
      } else success(response);
    })
    .catch((err) => error(err));
};

const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  fetch(`${apiURL}${url}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: token },
  })
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      error(err);
    });
};

const _deleteApi = (
  route,
  data = {},
  callback = (f) => f,
  err_cb = (f) => f
) => {
  // const { facilityId, username } = store.getState().auth.user;
  // data.facilityId = facilityId;
  // data.userId = username;

  fetch(route, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : null,
  })
    .then(function (response) {
      // if the status of the response is greater than 400, then error is returned
      if (response.status >= 400) {
        if (err_cb) err_cb();
      }
      if (callback) callback();
    })
    .catch(function (err) {
      return err_cb(err);
    });
};
export { _postApi, _fetchApi, _deleteApi };
