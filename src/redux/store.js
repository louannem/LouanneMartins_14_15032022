import { combineReducers, createStore } from "redux"

export const initialState = {
    employeeList : [],
    newEmployee : null
}

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('employees')
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    }
    catch(error) {
        return undefined
    }
}


export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('employees', serializedState)
    }
    catch(error) {
        //Ignore errors
    }
}

const peristedState = loadState()

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



export const store = createStore(reducer, peristedState, reduxDevtools)

store.subscribe(() => {
    saveState(store.getState())
})
