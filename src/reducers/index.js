import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    //what we are defining here is an object
    //could define this as well
    //courses: courses
    courses  //we are using es6 short hand property names here
});

export default rootReducer;