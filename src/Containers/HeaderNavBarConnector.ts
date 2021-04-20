import { connect } from 'react-redux'
import auth, { ICredential } from './../Actions/Auth'
import HeaderNavBar from './../Components/nav/HeaderNavBar'

const mapStateToProps = (state: any) => ({
    userName: state.user.userName,
    token: state.user.accessToken
});

const mapDispatchToProps = (dispatch: any) => ({
    login: (credentials: ICredential) => {
        dispatch(auth.login(credentials));
    }
});

const HeaderNavBarConnector = connect(mapStateToProps, mapDispatchToProps)(HeaderNavBar);
export default HeaderNavBarConnector;

