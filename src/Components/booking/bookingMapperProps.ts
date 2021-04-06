import {IState} from '../../Store/IState'

export const mapStateToProps = (state: IState) => 
({
    successFullyBoked: state.successfullyBooked
})