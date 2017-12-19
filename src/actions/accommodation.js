import {
    fetchAll
} from "../api/accommodationApi";

export const FETCH_ACCOMMODATIONS_REQUEST = "FETCH_ACCOMMODATIONS_REQUEST";
export const FETCH_ACCOMMODATIONS_SUCCESS = "FETCH_ACCOMMODATIONS_SUCCESS";
export const FETCH_ACCOMMODATIONS_FAILURE = "FETCH_ACCOMMODATIONS_FAILURE";
export const FETCH_ACCOMMODATION_REQUEST = "FETCH_ACCOMMODATION_REQUEST";
export const FETCH_ACCOMMODATION_SUCCESS = "FETCH_ACCOMMODATION_SUCCESS";
export const FETCH_ACCOMMODATION_FAILURE = "FETCH_ACCOMMODATION_FAILURE";

const fetchAccommodationsRequest = () => ({
    type: FETCH_ACCOMMODATIONS_REQUEST
});

const fetchAccommodationsSuccess = data => ({
    type: FETCH_ACCOMMODATIONS_SUCCESS,
    payload: data
});

const fetchAccommodationsFailure = error => ({
    type: FETCH_ACCOMMODATIONS_FAILURE,
    payload: error
});

export function fetchAccommodations() {
    return (dispatch) => {
        dispatch(fetchAccommodationsRequest());
        return fetchAll()
            .then(
                (res) => {
                    if (res.code) {
                        return dispatch(fetchAccommodationsFailure(res.message));
                    }
                    return dispatch(fetchAccommodationsSuccess(res));
                },
                error => console.log(error)
            );
    };
}
