import { connect } from 'react-redux'
import auth from './../Actions/Auth'
import ProfileMenu from './../Components/nav/ProfileMenu'

const mapStateToProps = (state: any) => ({
    userName: state.user.userName,
    token: state.user.accessToken
});

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => {
        dispatch(auth.logout());
    }
});

const ProfileMenuConnector = connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
export default ProfileMenuConnector;
