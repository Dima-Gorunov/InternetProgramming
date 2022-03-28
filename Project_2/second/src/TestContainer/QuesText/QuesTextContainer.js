import React from 'react';
import {connect} from "react-redux";
import QuesText from "./QuesText";

const QuesTextContainer = (props) => {
    return (
        <QuesText {...props} />
    );
};
let mapStateToProps = (state) => {
    return {
        quesText:state.Test.activequestion.text,
        nextPage: state.Test.nextPage,
        result:state.Test.result
    }
}

export default connect(mapStateToProps, {})(QuesTextContainer);