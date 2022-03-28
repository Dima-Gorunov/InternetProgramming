import React, {useEffect} from 'react';
import TestContainer from "../TestContainer/TestContainer";
import {getQuestionThunk} from "../Reducers/TestReducer";
import {connect} from "react-redux";
import style from "../TestContainer/Test.module.css"

const HomepageContainer = (props) => {
    useEffect(() => {
        props.getQuestionThunk(props.activepage)
    }, [])
    return (
        <div>
            <TestContainer/>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        activepage: state.Test.activepage
    }
}

export default connect(mapStateToProps, {getQuestionThunk})(HomepageContainer);