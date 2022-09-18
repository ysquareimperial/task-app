// import { BUSINESS_TYPES } from "../../constants";
import { GET_DONE_TASKS, GET_INPROGRESS_TASKS, GET_PENDING_TASKS } from "../action/actionType";

const initialState = {
    pendingTasks: [],
    inprogressTasks: [],
    doneTasks: []
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PENDING_TASKS:
            return {
                ...state,
                pendingTasks: action.payload
            }
        case GET_INPROGRESS_TASKS:
            return {
                ...state,
                inprogressTasks: action.payload
            }
            case GET_DONE_TASKS:
                return{
                    ...state,
                    doneTasks: action.payload
                }
        default:
            return state;
    }
}
