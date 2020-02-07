import {FETCH_DECODED_MESSAGE, FETCH_ENCODED_MESSAGE, GET_MESSAGE} from "./actions";


const initialState = {
    decoded: '',
    encoded: '',
    password: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                ...state,
                [action.name]: action.value
            };
        case FETCH_DECODED_MESSAGE:
            return {
                ...state,
                encoded: action.word,
                decoded: '',
                password: ''
            };
        case FETCH_ENCODED_MESSAGE:
            return {
                ...state,
                decoded: action.word,
                encoded: '',
                password: ''
            };
        default:
            return state;
    }
};

export default reducer;