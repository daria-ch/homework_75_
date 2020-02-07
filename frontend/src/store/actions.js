import axiosApi from "../axios-api";

export const FETCH_DECODED_MESSAGE = 'DECODED_MESSAGE';
export const FETCH_ENCODED_MESSAGE = 'ENCODED_MESSAGE';
export const GET_MESSAGE = 'GET_MESSAGE';


export const fetchEncodedMessage = (word) => ({type: FETCH_ENCODED_MESSAGE, word});
export const fetchDecodedMessage = (word) => ({type: FETCH_DECODED_MESSAGE, word});
export const getMessage = (name, value) => ({type: GET_MESSAGE, name, value});


export const decodeMessage = (event, message) => {
    event.preventDefault();
    return async dispatch => {
        const response = await axiosApi.post('/decode', message);
        dispatch(fetchEncodedMessage(response.data.decoded));
    }
};

export const encodeMessage = (event, message) => {
    event.preventDefault();
    return async dispatch => {
        const response = await axiosApi.post('/encode', message);
        dispatch(fetchDecodedMessage(response.data.encoded));
    }
};



