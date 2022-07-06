import { FETCH_PROPS, FIRSTAPI, SECONDAPI, THIRDAPI, MAP_ZOOM } from '../constants/constants.js';
import axios from 'axios';

let cancelTokens;

export const getPropListAccordingToMap = (minlat, maxlat, minlng, maxlng, isItCityVISE) => async (dispatch) => {
    if (typeof (cancelTokens) != typeof (undefined)) {
        cancelTokens.cancel("Canceling the prev stacks");
    }
    cancelTokens = axios.CancelToken.source();
    let zoomInURL = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?maxlat=${maxlat}&minlat=${minlat}&minlan=${minlng}&maxlan=${maxlng}`;
    let zoomOutURL = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/groupbycity?maxlat=${maxlat}&minlat=${minlat}&minlan=${minlng}&maxlan=${maxlng}`
    var zoomInConfig = {
        method: 'post',
        url: zoomInURL,
        cancelToken: cancelTokens.token
    };
    var zoomOutConfig = {
        method: 'get',
        url: zoomOutURL,
        cancelToken: cancelTokens.token
    };
    if (isItCityVISE == true) {
        try {
            const data = await axios(zoomOutConfig).then(function (response) {
                // return response.data;
                let result = { ...response.data, type: THIRDAPI };
                console.log(result, "THIRD API CALL");
                return result;
            }).catch(function (error) {
                console.log(error);
            });
            dispatch({ type: FETCH_PROPS, payload: data });
        } catch (error) {
            console.log(error.message);
        }
    } else {
        try {
            const data = await axios(zoomInConfig).then(function (response) {
                let result = { ...response.data, type: SECONDAPI };
                console.log(result, "SECOND API CALL");
                return result;
                // return response.data;
            }).catch(function (error) {
                console.log(error);
            });
            dispatch({ type: FETCH_PROPS, payload: data });
        } catch (error) {
            // console.log(error.message);
        }
    }
};

export const getPropListAccordingToCityAndState = (mainURL) => async (dispatch) => {
    if (typeof (cancelTokens) != typeof (undefined)) {
        cancelTokens.cancel("Canceling the prev stacks");
    }
    cancelTokens = axios.CancelToken.source();
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    try {
        const data = await fetch(`${mainURL}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                console.log(mainURL);
                let result = { ...res, type: FIRSTAPI };
                console.log(result, "FIRST API CALL");
                return result;
            })
            .catch(error => console.log('error', error));
        dispatch({ type: FETCH_PROPS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const changeMapStateAction = () => {
    return {
        type: 'MAP_STATE'
    }
}


export const changeMapZoomLevel = (numb) => {
    return {
        type: MAP_ZOOM,
        payload: numb
    }
}


