import { combineReducers, createStore } from "redux"

export const initialState = {
    employeeList : [],
    newEmployee : null
}

const reducer = combineReducers({
    newEmployee: createEmployeeReducer,
})


function createEmployeeReducer(state = initialState, action) {
    if(action.type === "EMPLOYEE_INFO") {
        return {
            ...state,
            newEmployee: action.payload,
            employeeList: [...state.employeeList, action.payload ]
        }
    }
    return state
}

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


export const store = createStore(reducer, reduxDevtools)