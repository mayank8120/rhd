import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import img from '../../assets/img/marker.png'
import Maptile from './Maptile';
import L from 'leaflet'
import Loader from '../../containers/Loader';
const MultiplePointMap = ({ searchresultdata }) => {

    // console.log(searchresultdata);

    // const [center, setcenter] = useState({ lat: 12.23423, lng: 23.23423 });
    // const ZOOM_LEVEL = 9;

    // const markerIcoon = new L.Icon(
    //     {
    //         iconUrl: img,
    //         iconSize: [40, 50]
    //     }
    // )

    const [lowerlat, setlowerlat] = useState('');
    const [lowerlng, setlowerlng] = useState('');
    const [upperlng, setupperlng] = useState('');
    const [upperlat, setupperlat] = useState('');


    const [latcenter, setlatcenter] = useState(0);
    const [lngcenter, setlngcenter] = useState(0);




    useEffect(() => {
        if (searchresultdata == undefined || searchresultdata.length == 0 || searchresultdata == 'No Record Found') {

        } else {
            let llat = +100, llng = +200, ulat = -100, ulng = -200;
            // if (searchresultdata == true) {
            //     console.log(searchresultdata);
            // }
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



            // console.log(llat, "LLAT", ulat, "ULAT", llng, "LLNG", ulng, "ULNG");




            // setlatcenter((parseFloat(lowerlat) + parseFloat(upperlat)) / 2);
            // setlngcenter((parseFloat(lowerlng) + parseFloat(upperlng)) / 2);
        }

    }, [searchresultdata, upperlat, upperlng]);

    // console.log(latcenter, lngcenter);

    // console.log((parseFloat(lowerlat) + parseFloat(upperlat)) / 2);
    // console.log((parseFloat(lowerlng) + parseFloat(upperlng)) / 2);

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
                                    lowerlat == '' || lowerlng == '' || upperlng == '' || upperlat == '' ?
                                        <h1>No Record Found</h1>
                                        :
                                        <MapContainer center={
                                            [(parseFloat(lowerlat) + parseFloat(upperlat)) / 2, (parseFloat(lowerlng) + parseFloat(upperlng)) / 2]
                                        } zoom={12} scrollWheelZoom={true}>
                                            <TileLayer
                                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                            <Maptile searchresultdata={searchresultdata} />
                                        </MapContainer>
                                )
                    }



                </div>
            </div>
        </>
    )
}

export default MultiplePointMap
