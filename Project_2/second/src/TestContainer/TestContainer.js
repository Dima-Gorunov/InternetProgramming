import React, {useEffect} from 'react';
import Test from "./Test";
import {connect} from "react-redux";
import style from "./Test.module.css"
import {getQuestionThunk, onPageChanged, setOnClickedThunk} from "../Reducers/TestReducer";

const TestContainer = (props) => {
    useEffect(() => {
        props.getQuestionThunk(props.activepage);
    }, [props.activepage])
    return (
        <div className={style.test_container}>
            <Test {...props}/>
        </div>
    );
};
let mapStateToProps = (state) => {
    return {
        activequestion: state.Test.activequestion,
        activepage: state.Test.activepage,
        cardonclicked: state.Test.cardonclicked,
        result: state.Test.result,
        nextPage: state.Test.nextPage,
        questions: state.Test.questions
    }
}

export default connect(mapStateToProps, {getQuestionThunk, setOnClickedThunk, onPageChanged})(TestContainer);