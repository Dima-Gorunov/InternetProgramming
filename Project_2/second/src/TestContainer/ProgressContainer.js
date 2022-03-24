import React from 'react';
import Progress from "./Progress";
import {connect} from "react-redux";
import Test from "./Test";
import {onPageChanged} from "../Reducers/TestReducer";

const ProgressContainer = (props) => {
    return (
        <Progress {...props} />
    );
};
let mapStateToProps = (state) => {
    return {
        questions: state.Test.questions,
        activepage:state.Test.activepage
    }
}

export default connect(mapStateToProps, {onPageChanged})(ProgressContainer);