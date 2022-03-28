import React from 'react';
import {connect} from "react-redux";
import ActiveTest from "./ActiveTest";
import {setOnClickedThunk} from "../Reducers/TestReducer";

const ActiveTestContainer = (props) => {
    return (
        <ActiveTest {...props}/>
    );
};
let mapStateToProps = (state) => {
    return {
        variables: state.Test.activequestion.variables
    }
}

export default connect(mapStateToProps, {setOnClickedThunk})(ActiveTestContainer);