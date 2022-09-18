import { _get } from "../../helpers/api"
import store from "../store"
import { GET_DONE_TASKS, GET_INPROGRESS_TASKS, GET_PENDING_TASKS } from "./actionType"

export function getPendingTasks() {
    return dispatch => {
        const user = store.getState().auth.user

        _get(`tasks/${user.id}/pending`, resp => {
            // console.log(resp)
            if (resp && Array.isArray(resp)) {
                //   setInprogressTasks(resp)
                dispatch({ type: GET_PENDING_TASKS, payload: resp })
            }
        }, e => { console.log(e) })
    }
}

export function getInprogressTasks() {
    return dispatch => {
        const user = store.getState().auth.user

        _get(`tasks/${user.id}/in_progress`, resp => {
            // console.log(resp)
            if (resp && Array.isArray(resp)) {
                //   setInprogressTasks(resp)
                dispatch({ type: GET_INPROGRESS_TASKS, payload: resp })
            }
        }, e => { console.log(e) })
    }
}

export function getDoneTasks(user_id) {
    return dispatch => {

        _get(`tasks/${user_id}/completed`, resp => {
            // console.log(resp)
            if (resp && Array.isArray(resp)) {
                //   setInprogressTasks(resp)
                dispatch({ type: GET_DONE_TASKS, payload: resp })
            }
        }, e => { console.log(e) })
    }
}