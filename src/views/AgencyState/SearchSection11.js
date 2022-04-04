import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router";

import axios from 'axios'
const SearchSection = () => {

    const [searchdata, setSearchdata] = useState({ searchstring: '' });
    const [searchterm, setsearchterm] = useState("");
    const [showdropdown, setshowdropdown] = useState(false);
    const toggleshow = () => {
        if (showdropdown == false) {
            setshowdropdown(true)
        } else {
            setshowdropdown(false)
        }
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // dispatch(createPost(postData));
    //     console.log(searchdata);
    //     setSearchdata({ searchstring: '' });
    // }
    const style = {
        display: 'none'
    }
    const style1 = {

    }

    // const [searchdata, setSearchdata] = useState({ searchstring: '' });
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(searchdata);
        // setSearchdata({ searchstring: '' });\
        // window.location.href = "/agencyState";

        // history.push({ pathname: "/agencyState" });
        window.location.href = `${pathnameS}`;
        console.log(searchterm);
        setsearchterm("");
    }

    const [dropdowndata, setdropdowndata] = useState();
    const [cityname, setcityname] = useState("");
    const [statename, setstatename] = useState('')
    const [pathnameS, setpathnameS] = useState("");
    return (
        <div className="searchHousingBox responsive-15 mt-0 mb-0">
            <h4 className="colorBlue font-weight700">Search Housing Authority by City, State, or ZIP</h4>
            <div className="d-flex align-items-center searchInputBlock searchInputBlockk posRel mt-3">
                <form className="w-100 d-flex align-items-center" onSubmit={handleSubmit}>
                    <input type="text" className="form-control topSearch"
                        aria-describedby="emailHelp"
                        placeholder="Enter city, State or ZIP"
                        value={searchterm}
                        onChange={
                            e => {
                                setsearchterm(e.target.value);
                                console.log(searchterm);
                                const result = axios.post(`http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`)
                                    .then(res => {
                                        if (res.data[0].error == true) {
                                            setdropdowndata(res.data[0].message)
                                        } else {
                                            setdropdowndata(res.data[0].data);
                                        }
                                        // console.log(res);
                                    }).catch(error => {
                                        console.log('error', error);
                                    });
                            }
                        }
                        required />


                    <span className="searchBannerItem searchBannerItemagency"> <img src={require('../../assets/img/searchBanner.svg').default} /></span>
                    <ul className="serachDatadrop">
                        {/* {
                                                JSONDATA.filter((val) => {
                                                    if (searchterm == "") {
                                                        return ""
                                                    } else if (val.city_name.toLowerCase().includes(searchterm.toLowerCase())) {
                                                        return val
                                                    }
                                                }).map((val, key) => {
                                                    return (
                                                        <p style={!showdropdown ? style1 : style}
                                                            onClick={() => {
                                                                setsearchterm(val.city_name + ", " + val.state_abbr);
                                                                toggleshow();
                                                            }}>
                                                            {val.city_name}, {val.state_abbr}
                                                        </p>
                                                    );
                                                })


                                            } */}
                        {
                            searchterm == null || searchterm == undefined || searchterm == '' || dropdowndata === undefined || dropdowndata === null || dropdowndata == '' ? <></>

                                :
                                (

                                    dropdowndata == 'No Record Found' ?
                                        <p style={!showdropdown ? style1 : style}
                                        >
                                            No Record Found
                                        </p>
                                        :


                                        dropdowndata.map((val) => {
                                            return (
                                                <p style={!showdropdown ? style1 : style}
                                                    onClick={() => {
                                                        setsearchterm(val.city_name + ", " + val.state_abbr);
                                                        setcityname(val.city_name);
                                                        setstatename(val.state_abbr);
                                                        toggleshow();
                                                    }}>
                                                    {val.city_name}, {val.state_abbr}
                                                </p>
                                            );
                                        })
                                )
                        }
                    </ul>

                    <button type="submit" onClick={() => {
                        setpathnameS("/agencyState?city=" + cityname + "&state=" + statename);
                        console.log("search button clicked")
                    }}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchSection