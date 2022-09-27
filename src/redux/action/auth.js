import { SERVER_URL } from "../../helpers/api";
import {
  LOADING,
  LOGIN,
  ERROR,
  LOGOUT,
  CREATING_USER,
  ERROR_CREATING_USER,
} from "./actionType";
import { _postApi } from "./api";
const endpoint = "auth";

export function createUser(data = [], success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: CREATING_USER });
    _postApi(
      `/api/${endpoint}/sign-up`,
      data,
      (result) => {
        if (result.errors) {
          let err = Object.values(result.errors);
          error(err[0]);
          dispatch({ type: ERROR_CREATING_USER, payload: err[0] });
        } else {
          dispatch({ type: CREATING_USER });
          success();
        }
      },
      (err) => {
        dispatch({ type: ERROR_CREATING_USER, payload: err });
      }
    );
  };
}

export function loginUser({ username, password }, cb = (f) => f, error = (f) => f) {
  const dataFormat = `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
  return async (dispatch) => {
    fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(dataFormat),
    })
      .then((raw) => raw.json())
      .then((data) => {
        if (!data.access_token) {
          error(data.error);
          dispatch({ type: ERROR, payload: data.detail });
        } else {
          dispatch({ type: LOGIN, payload: data });
          localStorage.setItem("taskify", data.access_token);
          console.log(data.access_token)
          cb(data);
        }
      })
      .catch(() => {
        error("Password or Username is not correct ");
        dispatch({ type: ERROR, payload:  "Password or Username is not correct"});
      });
  };
}

export function authLoading() {
  return (dispatch) => {
    dispatch({ type: LOADING });
  };
}

export function logout(callback = (f) => f) {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("taskify");
    callback();
  };
}

export function initUser( callback = (f) => f) {
  return (dispatch) => {
    let access_token = localStorage.getItem("taskify");
    // alert(access_token, 'LLDLDLDLLDLDLDLDLDLDLD');

    if (access_token) {
      verifyToken(access_token)
        .then((data) => {
          console.log(data);
          dispatch({ type: LOGIN, payload: data });
          // alert(JSON.stringify(data), 'LLDLDLDLLDLDLDLDLDLDLD');
          callback();
        })
        .catch((err) => {
          callback();
          console.log("access_token expired");
          dispatch({ type: LOGOUT });
        });
    } else {
      callback();
    }
  };
}

async function verifyToken(access_token) {
  console.log(access_token)
  try {
    let response = await fetch(`${SERVER_URL}/verify/user`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${access_token}` },
    });
    let data = await response.json();
    // alert(JSON.stringify(data), 'LLDLDLDLLDLDLDLDLDLDLD');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log(error);
  }
}

export function signup(
  form,
  cb,
  error_cb = (f) => f,
  query_type = "new_admin"
) {
  return (dispatch) => {
    _postApi(
      `/api/auth/sign-up`,
      { ...form, query_type },
      (resp) => {
        if (resp.success) {
          let success_cb = (results) => {
            cb();
          };
          console.log("success------------------", resp);
          if (query_type === "new_admin") {
            dispatch(
              loginUser({ phone: form.phone, password: form.password }, success_cb)
            );
          }
        } else {
          if (resp.status === 200) {
            // _customNotify("Successfully Created");
            dispatch(loginUser({ phone: form.phone, password: form.password }, cb));
          } else {
            console.log("error", resp);
            //   _warningNotify(`Error: ${resp.msg}`);
            error_cb();
          }
        }
      },
      (err) => {
        console.log("err", err);
        alert("Error", "Unable to loginUser at this time");
        error_cb();
      }
    );
  };
}

export function createNewUser(form, cb, error_cb = (f) => f) {
  return (dispatch) => {
    console.log(form, "====================form");
    // dispatch({ type: SIGN_UP_LOADING })
    // let success =

    _postApi(
      `/api/auth/sign-up`,
      { ...form, query_type: "new_admin" },
      (resp) => {
        if (resp.success) {
          console.log("success------------------", resp);
          let success_cb = (results) => {
            console.log("loginUser success");
            // dispatch({ type: LOGINUser, payload: results })
            cb();
            // dispatch({ type: SIGN_UP_LOADING })
          };
          dispatch(
            loginUser({ phone: form.phone, password: form.password }, success_cb)
          );
        } else {
          console.log("error", resp);
          alert("Error", resp.msg);
          error_cb();
          // dispatch({ type: SIGN_UP_LOADING })
        }
      },
      (err) => {
        console.log("err", err);
        // dispatch({ type: SIGN_UP_LOADING })
        // dispatch({type: LOGIN_ERROR});
        alert("Error", "Unable to login at this time");
        error_cb();
      }
    );
  };
}
