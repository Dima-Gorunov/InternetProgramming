import {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile, setUserId} from "../Reducers/ProfileReducer";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    let UserId = useParams().UserId
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/profile/${UserId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.setProfile(data)
            })
    }, [])

    return (
        <Profile {...props}/>
    );
}

let mapStateToProps = (state) => {
    return {
        Profile: state.ProfilePage.Profile,
    }
}

export default connect(mapStateToProps, {
    setProfile,
    setUserId
})(ProfileContainer)