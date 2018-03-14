import {initialise} from "../../reducers/actions";

export const mapDispatchToProps = (dispatch) => ({
    initialise: () => dispatch(initialise())
});

export const mapStateToProps = state => ({
     isLoading: Boolean(state.FormReducer.isLoading)
});
