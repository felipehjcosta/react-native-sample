import {apiCall} from './items'

export const apiCallStarted = () => {
    return {type: "API_STARTED"}
};

export const apiCallSuccess = (response) => {
    return {type: "API_SUCCESS", response}
};

export const apiAction = () => {
    return function (dispatch) {
        dispatch(apiCallStarted());
        return apiCall()
            .then(response => dispatch(apiCallSuccess(response)));
    }
};