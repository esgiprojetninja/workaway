import * as profileTypes from "./types/profile";

const fetchProfilesRequest = () => ({
    type: profileTypes.FETCH_PROFILES_REQUEST
});

const fetchProfilesSuccess = payload => ({
    type: profileTypes.FETCH_PROFILES_SUCCESS,
    payload
});

const fetchProfilesFailure = payload => ({
    type: profileTypes.FETCH_PROFILES_FAILURE,
    payload
});

export const fetchProfiles = () =>
    (dispatch, getState, API) => {
        dispatch(fetchProfilesRequest());
        return API.profileApi.fetchAll()
            .then(
                (res) => {
                    if (res.hasError) {
                        return dispatch(fetchProfilesFailure(res.message));
                    }
                    return dispatch(fetchProfilesSuccess(res));
                },
                error => console.log(error)
            );
    };


const saveProfileRequest = () => ({
    type: profileTypes.SAVE_PROFILE_REQUEST
});

const saveProfileSuccess = () => ({
    type: profileTypes.SAVE_PROFILE_SUCCESS
});

const saveProfileFailure = payload => ({
    type: profileTypes.SAVE_PROFILE_FAILURE,
    payload
});

export const saveProfile = () =>
    (dispatch, getState, API) => {
        dispatch(saveProfileRequest());
        return API.profileApi.createOrUpdate(getState().profile.current)
            .then(
                (res) => {
                    if (res.hasError) {
                        return dispatch(saveProfileFailure(res.message));
                    }
                    return dispatch(saveProfileSuccess());
                },
                error => console.log(error)
            );
    };

const deleteProfileRequest = () => ({
    type: profileTypes.DELETE_PROFILE_REQUEST
});

const deleteProfileSuccess = () => ({
    type: profileTypes.DELETE_PROFILE_SUCCESS
});

const deleteProfileFailure = payload => ({
    type: profileTypes.DELETE_PROFILE_FAILURE,
    payload
});

export const deleteProfile = id =>
    (dispatch, getState, API) => {
        dispatch(deleteProfileRequest());
        return API.profileApi.deleteItem(id).then((res) => {
            if (res.hasError) {
                return dispatch(deleteProfileFailure(res.message));
            }
            dispatch(deleteProfileSuccess());
            return dispatch(fetchProfiles());
        });
    };


const getMeRequest = () => ({
    type: profileTypes.GET_ME_REQUEST
});

const getMeSuccess = payload => ({
    type: profileTypes.GET_ME_SUCCESS,
    payload
});

const getMeFailure = payload => ({
    type: profileTypes.GET_ME_FAILURE,
    payload
});

export const getMe = id =>
    (dispatch, getState, API) => {
        dispatch(getMeRequest());
        return API.profileApi.getMe(id).then((res) => {
            if (res.hasError) {
                return dispatch(getMeFailure(res.message));
            }
            return dispatch(getMeSuccess(res));
        });
    };
