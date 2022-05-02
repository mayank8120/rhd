import React, { useState, useEffect } from 'react'
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm'
import Multiselect from 'multiselect-react-dropdown';
import Modal from "react-modal";
import { PropertySearchItem } from './PropertySearchItem';
// import { Scrollbar } from "react-scrollbars-custom";
import axios from 'axios'
import MultiRangeSlider from '../../containers/multiRangeSlider';
import { Trial } from '../Trial/Trial';
import MultiplePointMap from './MultiplePointMap';
// import ReactPaginate from 'react-paginate';
import Loader from '../../containers/Loader';
import Footer from '../../containers/Footer';

import { components } from "react-select";

import { default as ReactSelect } from "react-select";

import makeAnimated from "react-select/animated";

import MySelect from "./MySelect.js";
import { capitalise } from '../../containers/functions';
import { useSelector } from 'react-redux';



const apt_type = [
    { value: "Rental Deals", label: "Rental Deals" },
    { value: "Senior Housing", label: "Senior Housing" },
    { value: "Section 8", label: "Section 8" }
];
const numberofbeds = [
    { value: "Studio", label: "Studio" },
    { value: "1 Bed", label: "1 Bed" },
    { value: "2 Beds", label: "2 Beds" },
    { value: "3 Beds", label: "3 Beds" },
    { value: "4 Beds", label: "4 Beds" }
]

const numberofbaths = [
    { value: "1 Bath", label: "1 Bath" },
    { value: "1.5 Baths", label: "1.5 Baths" },
    { value: "2 Baths", label: "2 Baths" },
    { value: "3 Baths", label: "3 Baths" }
]
const Option = props => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const MultiValue = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);

const animatedComponents = makeAnimated();

const PropertySearch = ({ location }) => {

    const [fourpage, setfourpage] = useState(4);
    const [city, setcity] = useState("");
    const [statename, setstatename] = useState("");
    const [feature, setfeature] = useState("");
    const [totalcount, settotalcount] = useState();
    const [initialpage, setinitialpage] = useState(1);
    const [lastpage, setlastpage] = useState();
    const [currentpage, setcurrentpage] = useState(1);
    const [paginationopen, setpaginationopen] = useState(false);



    const [min_price, setmin_price] = useState(0);
    const [max_price, setmax_price] = useState(5000);





    const [isShown, setIsShown] = useState(false);

    const [currLat, setcurrLat] = useState();
    const [currLng, setcurrLng] = useState();



    let minprice = 0;
    let maxprice = 5000;




    // PAGINATION START 

    var paginationarray = [];
    for (var i = 1; i <= lastpage; i++) {
        paginationarray.push(i);
    }
    let tagarray;
    if (fourpage == undefined) {

    }
    else {
        tagarray = [
            <li className={`${currentpage == fourpage - 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage - 3)
                setsearchresultdata();
            }} >{fourpage - 3}</li>
            ,
            <li className={`${currentpage == (fourpage - 2) ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage - 2)
                setsearchresultdata();
            }}>{fourpage - 2}</li>
            ,
            <li className={`${currentpage == fourpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage - 1)
                setsearchresultdata();
            }}>{fourpage - 1}</li>
            ,
            <li className={`${currentpage == fourpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage)
                setsearchresultdata();
            }}>{fourpage}</li>
            ,
            <li className={`${currentpage == fourpage + 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage + 1)
                setsearchresultdata();
            }}>{fourpage + 1}</li>
            ,
            <li className={`${currentpage == fourpage + 2 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage + 2)
                setsearchresultdata();
            }}>{fourpage + 2}</li>
            ,
            <li className={`${currentpage == fourpage + 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage + 3)
                setsearchresultdata();
            }}>{fourpage + 3}</li>
        ];
    }

    useEffect(() => {
        if (currentpage >= lastpage - 2) {
            setfourpage(4);
        }
    }, [currentpage]);

    // PAGINATION END





    //  FETCHING URL PARAMS START
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        const city = params.get('city');
        const states = params.get('state');
        const feature = params.get('feature');
        setcity(city.toUpperCase());
        setstatename(states.toUpperCase());
        setfeature(feature);
    }, [params]);
    // FETCHING URL PARAMS END 








    const [isOpenFilter, setIsOpenFilter] = useState(false);
    function toggleModalFilter() {
        setIsOpenFilter(!isOpenFilter);
        setfiltermodalclick(true);
    }
    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
    }








    const [selectapartment, setselectapartment] = useState([]);

    let selectchange = (selected) => {
        setselectapartment(selected);
    }

    const [selectBeds, setselectBeds] = useState([]);

    let selectedBeds = (selected) => {
        setselectBeds(selected);
    }

    const [selectBaths, setselectBaths] = useState([]);

    let selectedBaths = (selected) => {
        setselectBaths(selected);
    }



    let bathstring = "";
    let bedstring = "";
    let apartmentstring = "";



    useEffect(() => {
        for (let i = 0; i < selectBaths.length; i++) {
            if (i < selectBaths.length - 1) {

                bathstring += '\'' + parseFloat(selectBaths[i].label) + '\',';
            } else {

                bathstring += '\'' + parseFloat(selectBaths[i].label) + '\'';
            }
        }
    }, [selectBaths])



    useEffect(() => {
        for (let i = 0; i < selectBeds.length; i++) {
            if (selectBeds[i].label == 'Studio' || selectBeds[i].label == 'Others') {
                bedstring += '\'' + selectBeds[i].label + '\',';
            } else {
                if (i < selectBeds.length - 1) {
                    bedstring += '\'' + parseFloat(selectBeds[i].label) + '\',';
                } else {

                    bedstring += '\'' + parseFloat(selectBeds[i].label) + '\'';
                }
            }
        }
    }, [selectBeds]);

    useEffect(() => {

        // console.log(bedstring);
    }, [selectBeds])





    if (selectapartment.length == 0) {

    } else {
        if (selectapartment.value == 'Senior Housing') {
            apartmentstring = 'senior';
        } if (selectapartment.value == 'Section 8 Housing') {
            apartmentstring = 'section';
        }
        if (selectapartment.value == 'Rental Deals') {
            apartmentstring = '';
        }
    }


    let removelastcomma = (str) => {
        let us;
        if (str.charAt(str.length - 1) == ',') {
            us = str.slice(0, -1);
        } else {
            us = str;
        }
        return us;
    }

    let changeLatLng = (lat, lng) => {
        setcurrLat(lat);
        setcurrLng(lng);

        localStorage.setItem('currLat', lat);
        localStorage.setItem('currLng', lng);
    }

    let clearLatlng = () => {
        setcurrLat();
        setcurrLng();

        localStorage.setItem('currLat', '');
        localStorage.setItem('currLng', '');
    }



    const [checked, setChecked] = useState(false);
    const [catsOK, setcatsOK] = useState('');

    const handleinput = () => {
        setChecked(!checked);
    };

    const handleChangecats = () => {
        if (checked) {
            setChecked(!checked);
            setcatsOK('');
        } else {
            setChecked(!checked);
            setcatsOK('catsOK');
        }
    };

    const petsection = [
        { name: 'Cats OK' },
        { name: 'Dogs OK' },
        { name: 'Pets OK' },
        { name: 'No Pets' }
    ]

    const [checkedStatepets, setCheckedStatepets] = useState(
        new Array(petsection.length).fill(false)
    );

    const [petsarray, setpetsarray] = useState([]);

    const handleOnChangepets = (position) => {
        const updatedCheckedStatepets = checkedStatepets.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedStatepets(updatedCheckedStatepets);


        const arrpets = [];

        const totalPrice = updatedCheckedStatepets.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    arrpets.push(petsection[index].name);
                    return sum + 1;
                }
                return sum;
            }
            ,
            0
        );


        setpetsarray(arrpets);
    };



    const amenitieslist = [
        { name: 'Air Conditioning' },
        { name: 'Assigned Parking' },
        { name: 'Assisted Living' },
        { name: 'Balcony, Patio, Deck' },
        { name: 'Business Center' },
        { name: 'Carpet' },
        { name: 'Central Heat' },
        { name: 'Community Center' },
        { name: 'Controlled Access' },
        { name: 'Dishwasher' },
        { name: 'Elevator' },
        { name: 'Fitness Center' },
        { name: 'Garage Parking' },
        { name: 'Gated Community' },
        { name: 'Hardwood Floor' },
        { name: 'High Ceilings' },
        { name: 'In Unit Washer & Driver' },
        { name: 'Laundry Room' },
        { name: 'Onsite Management' },
        { name: 'Playground' },
        { name: 'Pool' },
        { name: 'Section 8 Welcome' },
        { name: 'Storage' },
        { name: 'Walk In Closet' }
    ];

    const [indexforamenities, setindexforamenities] = useState(6);

    const [checkedStateamenities, setCheckedStateamenities] = useState(
        new Array(amenitieslist.length).fill(false)
    );

    const [amenitiesarray, setamenitiesarray] = useState([]);


    const handleOnChangeamenities = (position) => {
        const updatedCheckedStateamenities = checkedStateamenities.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedStateamenities(updatedCheckedStateamenities);

        const arramenities = [];

        const totalPrice = updatedCheckedStateamenities.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    arramenities.push(amenitieslist[index].name);
                    return sum + 1;
                }
                return sum;
            }
            ,
            0
        );


        setamenitiesarray(arramenities);
    };



    const [nearbycitiesdata, setnearbycitiesdata] = useState([]);

    const [indexforcities, setindexforcities] = useState(6);

    const [checkedStatecities, setCheckedStatecities] = useState([]);

    const [citiesarray, setcitiesarray] = useState([]);


    const [filtermodalclick, setfiltermodalclick] = useState(false);


    useEffect(() => {
        setnearbycitiesdata(JSON.parse(localStorage.getItem("nearbycitiesdata")))
        if (nearbycitiesdata.length == 0) {
        } else {
            setCheckedStatecities(new Array(nearbycitiesdata.length).fill(false));
        }
        // console.log(nearbycitiesdata);
    }, [filtermodalclick]);

    const handleOnChangecities = (position) => {
        if (nearbycitiesdata.length == 0) {

        } else {
            const updatedCheckedStatecities = checkedStatecities.map((item, index) =>
                index === position ? !item : item
            );
            setCheckedStatecities(updatedCheckedStatecities);
            const arrcities = [];
            const totalPrice = updatedCheckedStatecities.reduce(
                (sum, currentState, index) => {
                    if (currentState === true) {
                        arrcities.push(nearbycitiesdata[index].name);
                        return sum + 1;
                    }
                    return sum;
                }
                ,
                0
            );
            setcitiesarray(arrcities);
        }
    };



    const surl = 'http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?';

    let searchApiUrl = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=${apartmentstring}&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
    let searchsenior = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=senior&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
    let searchsection8 = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=section&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`


    useEffect(() => {
        searchApiUrl = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=${apartmentstring}&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`;
        searchsenior = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=senior&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
        searchsection8 = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=section&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
        // console.log(searchApiUrl);
        // console.log(bedstring);
    }, [selectBeds, selectBaths])



    const [searchresultdata, setsearchresultdata] = useState([]);




    let applyfilters = () => {
        // `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?city=${city}&state=${statename.toUpperCase()}&page=${currentpage}&feature=senior`
        // searchApiUrl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?city=${city}&state=${statename.toUpperCase()}&page=${currentpage}&minamtval=${min_price}&maxamtval=${max_price}`
        // console.log(searchApiUrl);
        setmin_price(minprice);
        setmax_price(maxprice);
        toggleModalFilter();
        console.log(minprice, maxprice);
    }
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };



    const propResult = useSelector((state) => state.search_result);

    // console.log(propResult);

    useEffect(() => {

        const fetchData = async () => {
            if (statename === 'undefined' || statename === '' || statename === null) {

            }
            else {



                setsearchresultdata([]);

                // setsearchresultdata(propResult);

                if (feature == 'senior') {

                    const result = await fetch(`${searchsenior}`, requestOptions)
                        .then(response => response.json())
                        .then(res => {
                            // console.log(res.error);
                            if (res.error === true) {
                                // console.log('5');
                                setsearchresultdata(res.message);
                                settotalcount(0);
                            } else {
                                // console.log('6');
                                setsearchresultdata(res.data);
                                settotalcount(res.count);
                                setlastpage((parseInt((res.count) / 25, 10) + 1));
                            }
                        })
                        .catch(error => console.log('error', error));

                } else if (feature == 'section') {
                    const result = await fetch(`${searchsection8}`, requestOptions)
                        .then(response => response.json())
                        .then(res => {
                            // console.log(res.error);
                            if (res.error === true) {
                                // console.log('5');
                                setsearchresultdata(res.message);
                                settotalcount(0);
                            } else {
                                // console.log('6');
                                setsearchresultdata(res.data);
                                settotalcount(res.count);
                                setlastpage((parseInt((res.count) / 25, 10) + 1));
                            }
                        })
                        .catch(error => console.log('error', error));

                }
                else {
                    const result = await fetch(`${searchApiUrl}`, requestOptions)
                        .then(response => response.json())
                        .then(res => {
                            // console.log(res.error);
                            if (res.error === true) {
                                console.log('5');
                                setsearchresultdata(res.message);
                                settotalcount(0);
                            } else {
                                // console.log('6');
                                setsearchresultdata(res.data);
                                settotalcount(res.count);
                                setlastpage((parseInt((res.count) / 25, 10) + 1));
                            }
                        })
                        .catch(error => console.log('error', error));
                }

            }
        };
        fetchData();
    }, [searchApiUrl, selectBeds, selectBaths, propResult]);

    return (
        <>
            <section className="listingPage secPad24 propertySearchPage premium">
                <div className="container2">
                    <div className="row">
                        <div
                            className="listting-search-left">

                            <div className="listingSection map-filter-section">
                                <div class="cst adjustment">
                                    <div className="itemWebsite">
                                        <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                            <ol className="breadcrumb font-weight500 mb-0">
                                                <li className="breadcrumb-item fontSize14"><a href="/" className=' purpleText' > Home</a></li>
                                                <li className="breadcrumb-item fontSize14 purpleText"><a href="/" className=' purpleText' >{feature == 'senior' ? 'Senior Housing' : (feature == 'section' ? 'Section 8 Housing' : 'Rentals')}</a></li>
                                                <li className="breadcrumb-item fontSize14 purpleText"><a href={`/propertySearch?city=&state=${statename}`} className={city == undefined || city == '' ? 'activeimp' : 'purpleText'} >{statename.toUpperCase()}</a></li>
                                                {city == undefined || city == '' ? null : <li className="breadcrumb-item fontSize14 active">{capitalise(city)}</li>}

                                            </ol>
                                        </nav>
                                    </div>
                                    <h3 className="font-weight400 mb-0">Apartments for rent in or near {city == undefined || city == '' ? null : `${capitalise(city)},`} {statename.toUpperCase()}</h3>
                                    <div className="tagList d-flex align-items-center">


                                        <div className="itemWebsite w-167 mr-1 apat">
                                            <MySelect
                                                placeholder={'Apartment Type'}
                                                options={apt_type}
                                                // !isMulti
                                                closeMenuOnSelect={false}
                                                hideSelectedOptions={false}
                                                components={{ Option, MultiValue, animatedComponents }}
                                                onChange={selectchange}
                                                allowSelectAll={false}
                                                value={selectapartment}
                                            />
                                        </div>

                                        <div className="itemWebsite w-130 mr-1 bedd">
                                            <MySelect
                                                placeholder={'Beds'}
                                                options={numberofbeds}
                                                isMulti
                                                closeMenuOnSelect={false}
                                                hideSelectedOptions={false}
                                                components={{ Option, MultiValue, animatedComponents }}
                                                onChange={selectedBeds}
                                                allowSelectAll={false}
                                                value={selectBeds}
                                            />
                                        </div>

                                        <div className="itemWebsite w-130 mr-1 bbaaths">
                                            <MySelect
                                                placeholder={'Baths'}
                                                options={numberofbaths}
                                                isMulti
                                                closeMenuOnSelect={false}
                                                hideSelectedOptions={false}
                                                components={{ Option, MultiValue, animatedComponents }}
                                                onChange={selectedBaths}
                                                allowSelectAll={false}
                                                value={selectBaths}
                                            />
                                        </div>

                                        <div className="dropdown">
                                            <ul className="noMarginPad listStyleNone clearfix">
                                                <li className="secondaryColor itemTag " onClick={toggleModalFilter}><span className="dot" ></span>Filters</li>
                                            </ul>
                                        </div>
                                        {/* if the filters are active below code 
                                        <div className="dropdown">
                                            <ul className="noMarginPad listStyleNone clearfix">
                                                <li className="secondaryColor itemTag active" onClick={toggleModalFilter}><span className="dot" ></span>Filters</li>
                                            </ul>
                                        </div> */}


                                        <div className="ml-auto itemWebsite">
                                            <h4 className="numProperty colorBlue fontSize16 font-weight700 mb-0">
                                                {searchresultdata == null || searchresultdata.length == 0 ? 0 : totalcount} Properties</h4>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className="brdrLine2"></div> */}
                            </div>

                            <div className="listingSection adjustment1">


                                <div className="propertyList propertyListScroll boxscroll4">

                                    <div className="wrapperScroll ">
                                        <ul className="noMarginPad listStyleNone">
                                            {

                                                searchresultdata === undefined || searchresultdata == '' || searchresultdata.length == 0 || searchresultdata === null ?
                                                    <>
                                                        <Loader />
                                                    </>
                                                    :
                                                    searchresultdata == 'No Record Found'
                                                        ?
                                                        window.location.replace("/error404")
                                                        :
                                                        searchresultdata.map(
                                                            (post) => (
                                                                <li className="listingBlock2 responsive-15"
                                                                    onMouseEnter={() => changeLatLng(post.property.lat, post.property.lng)}
                                                                    onMouseLeave={() => clearLatlng()}
                                                                >
                                                                    <PropertySearchItem post={post} />
                                                                </li>
                                                            )
                                                        )
                                            }
                                        </ul>
                                    </div>
                                </div>

                                {
                                    lastpage == undefined || lastpage == 0 || lastpage == '' || totalcount < 26 ? null :
                                        <div className="pagination">
                                            <ul className="noMarginPad listStyleNone">

                                                {
                                                    currentpage == 1
                                                        ?
                                                        null
                                                        :
                                                        <li className="paginationNum arrowRight" onClick={() => {
                                                            if (currentpage <= 4) {
                                                                setcurrentpage(currentpage - 1);
                                                                setsearchresultdata();
                                                            }
                                                            else {
                                                                setfourpage(currentpage - 1);
                                                                setcurrentpage(currentpage - 1);
                                                                setsearchresultdata();
                                                            }
                                                        }}>
                                                            <img src={require('../../assets/img/checvronpl.png').default} />
                                                        </li>
                                                }




                                                {

                                                    <>
                                                        {
                                                            lastpage < 8
                                                                ?

                                                                (tagarray.slice(0, lastpage).map((data) => {
                                                                    return (
                                                                        data
                                                                    );
                                                                }))
                                                                :
                                                                <>
                                                                    <li className={`${currentpage == fourpage - 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                        setcurrentpage(fourpage - 3)
                                                                        setsearchresultdata();
                                                                    }} >{fourpage - 3}</li>

                                                                    <li className={`${currentpage == (fourpage - 2) ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                        setcurrentpage(fourpage - 2)
                                                                        setsearchresultdata();
                                                                    }}>{fourpage - 2}</li>

                                                                    <li className={`${currentpage == fourpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                        setcurrentpage(fourpage - 1)
                                                                        setsearchresultdata();
                                                                    }}>{fourpage - 1}</li>

                                                                    <li className={`${currentpage == fourpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                        setcurrentpage(fourpage)
                                                                        setsearchresultdata();
                                                                    }}>{fourpage}</li>
                                                                </>
                                                        }






                                                        {
                                                            lastpage > 7
                                                                ?
                                                                <>
                                                                    <li className="dotsBlock">...</li>

                                                                    <li className={`${currentpage == lastpage - 2 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                        setcurrentpage(lastpage - 2)
                                                                        setsearchresultdata();
                                                                    }}>{lastpage - 2}</li>

                                                                    <li className={`${currentpage == lastpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                        setcurrentpage(lastpage - 1)
                                                                        setsearchresultdata();
                                                                    }}>{lastpage - 1}</li>

                                                                    <li className={`${currentpage == lastpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                        setcurrentpage(lastpage)
                                                                        setsearchresultdata();
                                                                    }}>{lastpage}</li>
                                                                </>
                                                                :
                                                                null
                                                        }


                                                    </>
                                                }

                                                {
                                                    currentpage == lastpage
                                                        ?
                                                        null
                                                        :
                                                        <li className="paginationNum arrowRight" onClick={() => {
                                                            if (currentpage >= 4) {
                                                                setfourpage(currentpage + 1);
                                                                setcurrentpage(currentpage + 1);
                                                                setsearchresultdata();
                                                            }
                                                            else {
                                                                setcurrentpage(currentpage + 1);
                                                                setsearchresultdata();
                                                            }
                                                        }}>

                                                            <img src={require('../../assets/img/checvronpr.png').default} />
                                                        </li>
                                                }


                                            </ul>
                                            <p className="mb-0 fontSize14 font-weight400 text-center mt-1 secondaryColor">Showing&nbsp;

                                                {
                                                    lastpage == 1 ?
                                                        <>{1}-{totalcount} of&nbsp;{totalcount}</>
                                                        :
                                                        <>
                                                            {
                                                                currentpage == lastpage ?
                                                                    <>{currentpage * 25 - 24}-{totalcount} of&nbsp;{totalcount}</>
                                                                    :
                                                                    <>{currentpage * 25 - 24}-{currentpage * 25} of&nbsp;{totalcount}</>
                                                            }
                                                        </>

                                                }


                                                &nbsp;Results</p>
                                        </div>
                                }


                            </div>



                            <Footer />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 pl-0">
                            <div className="map-fixed">
                                <div className="itemWebsite">
                                    <img className="h-94" src={require('../../assets/img/advertisement1.png').default} />
                                </div>
                                <div className="row mapSectionArea widthBlock100">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mapRight0 widthBlock70">
                                        <div className="posRel">

                                            {
                                                <MultiplePointMap className="map" searchresultdata={searchresultdata} />
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

















                <Modal isOpen={isOpenFilter}
                    onRequestClose={toggleModalFilter} className="morefilter">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center font-weight700"
                            id="exampleModalLabel">More Filters</h5>
                        <button type="button" className="close" onClick={toggleModalFilter} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Price Range</h4>
                            <MultiRangeSlider
                                min={0}
                                max={5000}
                                onChange={({ min, max }) => {
                                    // console.log(min, max);
                                    // setmin_price(min);
                                    // setmax_price(max);
                                    minprice = min;
                                    maxprice = max;
                                }}
                            />
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Features</h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Good Deals
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Income Based
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Utilities Included
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Handicap Accessible
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Move-In Specials
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Waiting List
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">Pets
                            </h4>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="checkboxList row">
                                        <div className="checkboxItem">
                                            {/* <label className="checkboxBlock">Cats OK
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={handleinput}
                                                />

                                                <span className="checkmark"></span>

                                            </label> */}

                                            {/* <Checkbox
                                                label={'Cats OK'}
                                                value={checked}
                                                onChange={handleChangecats} /> */}

                                        </div>


                                        {
                                            petsection.map(({ name, price }, index) => {
                                                return (
                                                    <>
                                                        <div className="checkboxItem col-sm-6">
                                                            <label key={index} className="checkboxBlock" htmlFor={`custom-checkbox-${index}`}>
                                                                {name}
                                                                <input
                                                                    type="checkbox"
                                                                    id={`custom-checkbox-${index}`}
                                                                    name={name}
                                                                    value={name}
                                                                    checked={checkedStatepets[index]}
                                                                    onChange={() => handleOnChangepets(index)}
                                                                    disabled
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>

                                                    </>
                                                );
                                            })
                                        }



                                        {/* </div> */}


                                        {/* <div className="checkboxItem">
                                            <label className="checkboxBlock">Dogs OK
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Pets OK
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">No Pets
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Amenities</h4>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="checkboxList row">
                                        {
                                            amenitieslist.slice(0, indexforamenities).map(({ name, price }, index) => {
                                                return (
                                                    <>
                                                        <div className="checkboxItem col-sm-6">
                                                            <label key={index} className="checkboxBlock" htmlFor={`custom-checkbox-amenities-${index}`}>
                                                                {name}
                                                                <input
                                                                    type="checkbox"
                                                                    id={`custom-checkbox-amenities-${index}`}
                                                                    name={name}
                                                                    value={name}
                                                                    checked={checkedStateamenities[index]}
                                                                    onChange={() => handleOnChangeamenities(index)}
                                                                    disabled
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>

                                                    </>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pupleLineBtn amenityTop">
                            <span className="w-100 transition font-weight500" onClick={() => {
                                if (indexforamenities == 6) {
                                    setindexforamenities(amenitieslist.length);
                                } else {
                                    setindexforamenities(6);
                                }

                            }}>Show {indexforamenities == 6 ? 'more' : 'less'} amenities</span>
                        </div>



                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Neighborhoods</h4>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="checkboxList row">
                                        {/* <div className="checkboxItem">
                                            <label className="checkboxBlock">Alhambra
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Pasadena
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">San Marino
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div> */}
                                        {
                                            nearbycitiesdata == null || nearbycitiesdata == '' || nearbycitiesdata.length == 0 ?
                                                null
                                                :
                                                nearbycitiesdata.slice(0, indexforcities).map(({ property_city, price }, index) => {
                                                    return (
                                                        <>
                                                            <div className="checkboxItem col-sm-6">
                                                                <label key={index} className="checkboxBlock" htmlFor={`custom-checkbox-cities-${index}`}>
                                                                    {property_city}
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`custom-checkbox-cities-${index}`}
                                                                        name={property_city}
                                                                        value={property_city}
                                                                        checked={checkedStatecities[index]}
                                                                        onChange={() => handleOnChangecities(index)}
                                                                        disabled
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </>
                                                    );
                                                })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pupleLineBtn amenityTop">
                            <span className="w-100 transition font-weight500"
                                onClick={() => {
                                    if (indexforcities == 6) {
                                        setindexforcities(12);
                                    } else {
                                        setindexforcities(6);
                                    }

                                }}>Show {indexforcities == 6 ? 'more' : 'less'} neighborhoods</span>
                        </div>
                    </div>
                    <div className="RentalFooter">
                        <div className="d-flex align-items-center">
                            <div className="w-50 font-weight500 clearAll">
                                <u>Clear All</u>
                            </div>
                            <div className="w-50">
                                <button type="button" onClick={applyfilters}
                                    className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite"  >Apply
                                    Filters</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </section>


            {/* <Footer /> */}
        </>
    )
}


// const Checkbox = ({ label, value, onChange }) => {
//     return (
//         <>
//             <label className="checkboxBlock">
//                 {label}
//                 <input
//                     type="checkbox"
//                     checked={value}
//                     onChange={onChange}
//                 />

//                 <span className="checkmark"></span>

//             </label>
//         </>
//     );
// };



export default PropertySearch