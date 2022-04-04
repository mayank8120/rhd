import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import img from '../../assets/img/marker.png'
import Maptile from './Maptile';
import L from 'leaflet'
import Loader from '../../containers/Loader';
const MultiplePointMap = ({ searchresultdata }) => {

    // console.log(searchresultdata);

    const [center, setcenter] = useState({ lat: 12.23423, lng: 23.23423 });
    const ZOOM_LEVEL = 9;
    const database = [
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 1,
            id_rating: 0,
            id_user: 1,
            lat: "63.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "Aasc Housasding I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: "https://i.picsum.photos/id/145/200/300.jpg?hmac=mIsOtHDzbaNzDdNRa6aQCd5CHCVewrkTO5B1D4aHMB8",
            dog: true
        },
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 2,
            id_rating: 0,
            id_user: 1,
            lat: "86.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "Aasasdc Housing I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: "",
            dog: ""
        },
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 3,
            id_rating: 0,
            id_user: 1,
            lat: "12.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "23Aasasdesfcweac Housing I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: ""
        },
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 4,
            id_rating: 0,
            id_user: 1,
            lat: "54.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "33Aasc Housing I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: "https://i.picsum.photos/id/145/200/300.jpg?hmac=mIsOtHDzbaNzDdNRa6aQCd5CHCVewrkTO5B1D4aHMB8"
        }
    ]
    // console.log(searchresultdata);
    const markerIcoon = new L.Icon(
        {
            iconUrl: img,
            iconSize: [40, 50]
        }
    )

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

            setlatcenter((parseFloat(lowerlat) + parseFloat(upperlat)) / 2);
            setlngcenter((parseFloat(lowerlng) + parseFloat(upperlng)) / 2);
        }

    }, [searchresultdata, upperlat]);

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
