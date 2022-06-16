import React, { useState, useEffect } from 'react'
import Searchbox from './Searchbox'
import ResearchYourApt from '../../containers/ResearchYourApt'
import PropertiesNearby from '../Index/PropertiesNearby'
import FeaturedRentalsInCity from '../../containers/FeaturedRentalsInCity'
import ProudPartners from '../../containers/ProudPartners'
import EmailSubs from '../../containers/EmailSubs'
import PopularCities from '../../containers/PopularCities'
import AffordableHousingByRegions from '../Index/AffordableHousingByRegions'
import Footer from '../../containers/Footer'
import axios from 'axios';

const Seniorhousing = () => {
    { document.title = "Senior Housing - Rental Housing Deals" }

    let latlngdata = {
        as: "AS55836 Reliance Jio Infocomm Limited",
        city: "Los Angeles",
        country: "India",
        countryCode: "IN",
        isp: "Reliance Jio Infocomm Limited",
        lat: 19.0748,
        lon: 72.8856,
        org: "JIO FTTX SUBSCRIBER",
        query: "49.36.29.96",
        region: "CA",
        regionName: "Maharashtra",
        status: "success",
        timezone: "Asia/Kolkata",
        zip: "400070"
    }

    // const [latlngdata, setlatlngdata] = useState();

    // let latlngurl = 'http://ip-api.com/json';

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios.post(latlngurl)
    //             .then(res => {
    //                 setlatlngdata(res.data)
    //             }).catch(error => {
    //                 console.log('error', error);
    //             });
    //     };
    //     fetchData();
    // }, [latlngurl]);


    let nearbypropurl;
    const [nearbypropdata, setnearbypropdata] = useState([]);
    if (latlngdata === undefined || latlngdata === [] || latlngdata === null) {
        nearbypropurl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=&city=`;
    }
    else {
        nearbypropurl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=${latlngdata.region}&city=${latlngdata.city}`;
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(nearbypropurl)
                .then(res => {
                    setnearbypropdata(res.data.data);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [nearbypropurl]);

    return (
        <>

            <Searchbox latlngdata={latlngdata} />

            <ResearchYourApt />

            <PropertiesNearby propertynearby={nearbypropdata} titletext={"Economic Properties For Seniors Near You"} />
            <PopularCities titletext={"Find Low Income Affordable Properties in Popular Cities"} />

            <FeaturedRentalsInCity latlngdata={latlngdata} page={2} />
            {/* <FeaturedRentalsInCity /> */}
            <AffordableHousingByRegions page={2} />

            <ProudPartners />
            <EmailSubs />

            <Footer />

        </>
    )
}
export default Seniorhousing