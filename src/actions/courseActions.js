import * as types from './actionTypes';

export function createCourse(course) {
    //return {type: 'CREATE_COURSE', course: course}  //these two lines are equivalent.  
    // in es6 you don't have to duplicate the left and right side if they are the same thing
    return {type: types.CREATE_COURSE, course};
}