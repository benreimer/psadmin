import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }   

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
       // debugger;
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
                <CourseList courses = {courses} />                                
            </div>
        );
    }
}

CoursesPage.propTypes = {    
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
    // got the error 'createCourse' is missing in props validation until the line below was added
    //createCourse: PropTypes.func.isRequired    
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    //determines what actions are available in our component
    return {
        //before added import {bindActionCreators} from 'redux', used the line below
        //createCourse: course => dispatch(courseActions.createCourse(course))
        //using bindActionCreators, you can use the below code
        //this will go through the file specified(courseActions), find the actions and wrap them 
        //in a call to dispatch
        //all actions can now be accessed through 'this.props.actions'
        //an alternative would have been to use the following for each action
        //createCourse: bindActionCreators(courseActions.createCourse, dispatch)
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);