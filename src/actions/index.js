import { FETCH_PROPS } from '../constants/constants.js';
import axios from 'axios';




let cancelTokens;


const arr = {
    "status": "success",
    "error": false,
    "type": "CITY",
    "data": [
        {
            "city": "LOS ANGELES",
            "listingcount": 53,
            "coordinate": {
                "lat": "34.0408027000000000",
                "lng": "-118.2905733000000000"
            }
        },
        {
            "city": "MAYWOOD",
            "listingcount": 2,
            "coordinate": {
                "lat": "33.9866987000000000",
                "lng": "-118.1817896000000000"
            }
        },
        {
            "city": "MONTEBELLO",
            "listingcount": 5,
            "coordinate": {
                "lat": "34.0181360000000000",
                "lng": "-118.1129270000000000"
            }
        },
        {
            "city": "COMMERCE",
            "listingcount": 5,
            "coordinate": {
                "lat": "33.9760410000000000",
                "lng": "-118.1395620000000000"
            }
        },
        {
            "city": "HUNTINGTON PARK",
            "listingcount": 1,
            "coordinate": {
                "lat": "33.9766283000000000",
                "lng": "-118.2223350000000000"
            }
        },
        {
            "city": "BELL",
            "listingcount": 2,
            "coordinate": {
                "lat": "33.9745810000000000",
                "lng": "-118.1864210000000000"
            }
        }
    ]
}


// export const searchOnMapMove = () => (dispatch) => {

// }


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
                console.log(response);
                return response.data;
            }).catch(function (error) {
                // console.log(error);
            });
            dispatch({ type: FETCH_PROPS, payload: data });
        } catch (error) {
            // console.log(error.message);
        }
    } else {

        try {
            const data = await axios(zoomInConfig).then(function (response) {
                console.log(response);
                return response.data;
            }).catch(function (error) {
                // console.log(error);
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
                console.log(res);
                // console.log(mainURL);
                return res;
            })
            .catch(error => console.log('error', error));
        dispatch({ type: FETCH_PROPS, payload: data });
    } catch (error) {
        // console.log(error.message);
    }
};








export const changeMapStateAction = () => {
    return {
        type: 'MAP_STATE'
    }
}