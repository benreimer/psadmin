import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        //you can also fix this bind function by using
        //  onChange = {this.onTitleChange} /> down in the input field
        // however this can cause performance issues because calling bind in a render beecause will
        // create a new function on render
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        //this line below is necessary if you do not include mapDispatchToProps as we have at the bottom of this file
        //this.props.dispatch(courseActions.createCourse(this.state.course));
        //since we have included mapDispatchToProps, we can use
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input 
                    type = "text"
                    onChange = {this.onTitleChange} />
                <input 
                    type = "submit"
                    value= "save"
                    onClick = {this.onClickSave} />
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