import { FETCH_PROPS } from '../constants/constants.js';
import axios from 'axios';

export const getPosts = (minlat, maxlat, minlng, maxlng) => async (dispatch) => {

    console.log(minlat, maxlat, minlng, maxlng);
    var config = {
        method: 'post',
        url: `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?maxlat=${maxlat}&minlat=${minlat}&minlan=${minlng}&maxlan=${maxlng}`,
        headers: {}
    };


    try {
        const { data } = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        dispatch({ type: FETCH_PROPS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
