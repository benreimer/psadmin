import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    //what we are defining here is an object
    //could define this as well
    //courses: courses
    //we are using es6 short hand property names here
    courses,  
    authors
});

export default rootReducer;