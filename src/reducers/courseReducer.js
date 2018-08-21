//a reducer takes a state and actions and returns a new state
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
        //the below commented code shows the wrong way to write a reducer,         
        //state.push(action.course);
        //return state;
        //you should use the code below when writing a reducer 
        //it is the ES6 spread operator
        return [...state,
            Object.assign({}, action.course)
        ];       

        default: 
            return state;           
    }
}