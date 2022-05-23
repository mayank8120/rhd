import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
import img from '../../assets/img/marker.png'
import Maptile from './Maptile';
import L from 'leaflet'
import Loader from '../../containers/Loader';
import { useSelector } from 'react-redux';
import { Button } from 'bootstrap';
const MultiplePointMap = () => {

    // console.log(searchresultdata);

    // const [center, setcenter] = useState({ lat: 12.23423, lng: 23.23423 });
    // const ZOOM_LEVEL = 9;

    // const markerIcoon = new L.Icon(
    //     {
    //         iconUrl: img,
    //         iconSize: [40, 50]
    //     }
    // )



    const mapchange = useSelector(
        (state) => state.mapState
    );

    const [lowerlat, setlowerlat] = useState('');
    const [lowerlng, setlowerlng] = useState('');
    const [upperlng, setupperlng] = useState('');
    const [upperlat, setupperlat] = useState('');







    // earlier center finding code 




    const [searchresultdata, setsearchresultdata] = useState([]);

    let propResult = useSelector((state) => state.search_result);
    let searchApiUrl = `city=&state=&page=&feature=&minamtval=&maxamtval=&beds=&baths=}`


    useEffect(() => {

        // const fetchData = async () => {

        setsearchresultdata([]);
        setsearchresultdata(propResult.data);

        // };
        // fetchData();
    }, [searchApiUrl, propResult]);









    useEffect(() => {
        if (searchresultdata == undefined || searchresultdata.length == 0 || searchresultdata == 'No Record Found') {

        } else {

            if (mapchange == false) {

                let llat = +100, llng = +200, ulat = -100, ulng = -200;
                // if (searchresultdata == true) {
                //     console.log(searchresultdata);
                // }
                console.log(searchresultdata);
                searchresultdata.forEach(element => {
                    if (element.property.lat < llat) {
                        llat = element.property.lat;
                    }
                    if (element.property.lng < llng) {
                        llng = element.property.lng
                    }


                    if (element.property.lat > ulat) {
                        ulat = element.property.lat;
                    }
                    if (element.property.lng > ulng) {
                        ulng = element.property.lng;
                    }
                })
                setlowerlat(llat);
                setupperlat(ulat);
                setlowerlng(llng);
                setupperlng(ulng);

            }
        }

    }, [searchresultdata, mapchange]);




    let streetmap = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
    let darkmap = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png`;

    return (
        <>

            <div className="row">
                <div className="col">
                    {
                        searchresultdata == undefined || searchresultdata.length == 0 || searchresultdata == null ?

                            <Loader />
                            :
                            searchresultdata == 'No Record Found' ?

                                <h1>{searchresultdata}</h1>
                                :
                                (
                                    mapchange == false ?

                                        <>
                                            {
                                                lowerlat == '' || lowerlng == '' || upperlng == '' || upperlat == ''
                                                    ?
                                                    null
                                                    :
                                                    <MapContainer center={
                                                        [(parseFloat(lowerlat) + parseFloat(upperlat)) / 2, (parseFloat(lowerlng) + parseFloat(upperlng)) / 2]
                                                    } zoom={12} scrollWheelZoom={true}>
                                                        <TileLayer
                                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                            url={darkmap} />
                                                        <Maptile binamapkadata={searchresultdata} />
                                                    </MapContainer>

                                            }

                                        </>
                                        :
                                        <MapContainer center={[33.0, -117.0]} zoom={12} scrollWheelZoom={true}>
                                            <TileLayer
                                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url={darkmap} />


                                            <Maptile
                                            // searchresultdata={searchresultdata}
                                            />
                                        </MapContainer>
                                )
                    }



                </div>
            </div>
        </>
    )
}

export default MultiplePointMap
