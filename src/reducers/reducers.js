import {FETCH_PROPS} from '../constants/constants.js'

export const search_result = (posts = [], action) => {
    switch (action.type) {
        case FETCH_PROPS:
            return action.payload;
        default:
            return posts;
    }
};
