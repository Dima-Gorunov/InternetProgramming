import React from 'react';
import Progress from "./Progress";
import {connect} from "react-redux";
import Test from "./Test";
import {onPageChanged} from "../Reducers/TestReducer";
import style from "../TestContainer/Test.module.css"

const ProgressContainer = (props) => {
    return (
        <div>
            <Progress {...props} />
        </div>
    );
};
let mapStateToProps = (state) => {
    return {
        questions: state.Test.questions,
        activepage: state.Test.activepage
    }
}

export default connect(mapStateToProps, {onPageChanged})(ProgressContainer);