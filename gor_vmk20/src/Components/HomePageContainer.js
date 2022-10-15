import React from 'react';
import Homepage from "./Homepage";
import {compose} from "redux";
import {connect} from "react-redux";
import {getLoading, getText} from "../Selectors/AppSelector";
import {setText} from "../Reducers/AppReducer";

const HomePageContainer = (props) => {
    return <Homepage {...props} />
};

const mapStateToProps = (state) => {
    return {
        Loading: getLoading(state),
        Text: getText(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setText
    })
)(HomePageContainer);