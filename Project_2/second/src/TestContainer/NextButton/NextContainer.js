import React from 'react';
import {connect} from "react-redux";
import Next from "./Next";
import {getQuestionThunk, onPageChanged} from "../../Reducers/TestReducer";

const NextContainer = (props) => {
    return (
        <Next {...props}/>
    );
};

let mapStateToProps = (state) => {
    return {
        questions: state.Test.questions,
        nextPage: state.Test.nextPage,
        activepage: state.Test.activepage
    }
}

export default connect(mapStateToProps, {onPageChanged,getQuestionThunk})(NextContainer);