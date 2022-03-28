import React from 'react';
import {connect} from "react-redux";
import ResultPage from "./ResultPage";
import style from "../TestContainer/Test.module.css"

const ResultPageContainer = (props) => {
    return (
        <div className={style.test_container}>
            <div>
                <ResultPage {...props} />
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        result: state.Test.result
    }
}
export default connect(mapStateToProps, {})(ResultPageContainer);