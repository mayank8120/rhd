import React, { useState, useEffect } from 'react'

import Modal from "react-modal";
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm';
import Emailsubs2 from '../../containers/Emailsubs2';
import PopularCities from '../../containers/PopularCities'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal';
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts';
import { IncomeLimitsAccordion } from '../GeneralProperty/IncomeLimitsAccordion';
import { ManagementCompanyAccordion } from '../GeneralProperty/ManagementCompanyAccordion';

import PropertiesNearby from '../Index/PropertiesNearby';
import ImageSliderCarousel from './ImageSliderCarousel';

import Starratingstatic from '../../containers/Starratingstatic';

import SinglePointMap from '../../containers/SinglePointMap.js';
import SchoolItem from './SchoolItem';
import Amenities from './Amenities';


// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {
    buildStyles
} from "react-circular-progressbar";
import { Carousel, CarouselItem } from 'react-bootstrap';


const PropertyDetailPage = ({ post }) => {

    // document.title = "Blessed Rock Apartments - Rental Housing Deals"
    document.title = `${post.property.property_title} - Rental Housing Deals`
    // console.log(propdata.property_title);

    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
    }

    const [isOpenQualify, setIsOpenQualify] = useState(false);
    function toggleModalQualify() {
        setIsOpenQualify(!isOpenQualify);
    }

    const [isOpenImage, setIsOpenImage] = useState(false);
    function toggleModalImage() {
        setIsOpenImage(!isOpenImage);
    }

    const [formData, setformData] = useState({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        console.log(formData);
        // toggleModal();
        setformData({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    }

    let onValChange = (e) => {
        setformData({ ...formData, voucher: e.target.value })
    }
    const propdata = post.property;
    const propdetails = post.details;
    // const propamenities = post.amenities;
    const propimages = post.slider_images;
    const propfloor = post.floor_plan;
    const proputility = post.utility_allowance;
    const propcontact = post.contact;
    const proprating = post.rating;
    const proprent = post.Fair_Market_Rents;
    const propincome = post.Quick_facts;
    const propmancom = post.msgcompanylist;
    const schoolnearby = post.nearByschool;
    const propertynearby = post.nearbyProperty;
    // const propamenities=post.amenities.unit_amenities;
    const propamenities = post.amenities;
    const propwalkscore = post.walk_score;

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src="https://www.rentalhousingdeals.com/uploaded/prop_1616187412_1.jpg"
                        alt="First slide"
                    />
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src="https://www.rentalhousingdeals.com/uploaded/prop_1616187477_4.jpg"
                        alt="Second slide"
                    />
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src="https://www.rentalhousingdeals.com/uploaded/prop_1616187654_5.jpg"
                        alt="Third slide"
                    />
                </CarouselItem>
            </Carousel> */}


            <section className="detailPage secPad24 propertydetail-page propertydetail-page-new">
                <div className="container4">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item fontSize14"><a href="/" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item fontSize14 purpleText">{propdata.property_state}</li>
                                    <li className="breadcrumb-item fontSize14 purpleText">{propdata.property_city}</li>
                                    <li className="breadcrumb-item fontSize14 active purpleText" aria-current="page">{propdata.property_title}</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-12">
                            <div className="d-flex detailHeadSec align-items-end">
                                <h3 className="font-weight700 mb-0">

                                    {propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;

                                    {
                                        propdetails.length === 0 ? "" : ` ${propdetails.min_bed} Br. ${propdetails.min_bath} Ba $${propdetails.min_rent}`
                                    }

                                    {propdata.phone}
                                </h3>
                                <div class="ml-auto responsiveMarLeft">
                                    <ul class="noMarginPad listStyleNone sideActionIcon">
                                        <li class="brdrRadius4 itemWebsite">
                                            <img src={require('../../assets/img/redHeart.png').default} />

                                        </li>
                                        <li class="brdrRadius4 itemWebsite">
                                            <img src={require('../../assets/img/share.svg').default} />

                                        </li>
                                        <li class="brdrRadius4 arrowBlock d-flex align-items-center">
                                            <img src={require('../../assets/img/leftArrow.png').default} />
                                            <img className="ml-auto" src={require('../../assets/img/rightArrow.png').default} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 responsive0">
                            <div className="detailLeftSec">

                                <div className="imageSec sliderImageBlock owl-carousel owl-theme propertyDetailSlider">
                                    <div className="item posRel">



                                        <ImageSliderCarousel propimages={propimages} />

                                        <span className="viewPhoto" onClick={toggleModalImage}>
                                            <i className="far fa-image font-weight500"></i>
                                            {propimages.length === 0 ? `No photos available` : `All ${propimages.length} Photos`}
                                        </span>

                                    </div>
                                </div>


                                <div className="modal fade rentalModal availabilityModal" id="exampleModalPhoto" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModalProperty" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center posRel">
                                                <button type="button" className="close closeModl" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22" id="exampleModalLongTitle">
                                                    {propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;

                                                    {
                                                        propdetails.length === 0 ? "" : ` ${propdetails.min_bed} Br. ${propdetails.min_bath} Ba $${propdetails.min_rent}`
                                                    }
                                                    {propdata.phone}
                                                </h5>
                                                <div className="ml-auto d-flex align-items-center mr-5">
                                                    <a href="" className="modalCheck colorWhite">Check Availability</a>
                                                    <ul className="noMarginPad listStyleNone sideActionIcon">
                                                        <li className="brdrRadius4 itemWebsite">
                                                            <img src={require('../../assets/img/redHeart.png').default} />
                                                        </li>
                                                        <li className="brdrRadius4 itemWebsite mr-0">
                                                            <img src={require('../../assets/img/share.svg').default} />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <div className="modal-body rentalForm availBodyBlock propertyDetlModal">
                                                <div className="">
                                                    <div className="boxscroll4 scrollBodyPopUp">
                                                        <div className="wrapperScroll">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="modalPop">
                                                                        <div className="modalListImage">
                                                                            <img
                                                                                src={require('../../assets/img/propertyDetailModalPhoto.png').default} />
                                                                        </div>
                                                                        <div className="modalListImage">
                                                                            <img
                                                                                src={require('../../assets/img/propertyDetailModalPhoto2.png').default} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="modalLeft">
                                                                        <img src={require('../../assets/img/modalSidePopup.png').default} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="sideFormBlock">
                                                                        <div
                                                                            className="SectionBlock responsive15 availabilitySection">
                                                                            <div className="d-flex align-items-center">
                                                                                <h2 className="colorBlue font-weight700 fontSize18">
                                                                                    Check Availability</h2>
                                                                                <div className="ml-auto">
                                                                                    <p
                                                                                        className="purpleText font-weight700 fontSize18 itemWebsite">
                                                                                        <img
                                                                                            src={require('../../assets/img/phoneColored.svg').default} />(626)
                                                                                        448-2699
                                                                                    </p>

                                                                                </div>
                                                                            </div>

                                                                            <CheckAvailibilityForm />

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>


                                <div className="detailTextSec itemWebsite">
                                    <div className="d-flex align-items-center topHeadSec">
                                        <div className="d-flex align-items-center">
                                            <h2 className="font-weight700 colorBlue mt-0 mb-0">
                                                {/* Blessed Rock Apartments */}
                                                {propdata.property_title}
                                            </h2>
                                            <ul className="noMarginPad listStyleNone">

                                                {
                                                    proprating.length == 0 ? null : <Starratingstatic rating={proprating[0].vote_avg} />
                                                }


                                            </ul>
                                        </div>
                                        <div className="ml-auto priceTagDet">
                                            <h2 className="font-weight700 colorBlue">${propdetails.min_rent} - ${propdetails.max_rent}</h2>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="leftTopParaSec">
                                            <p className="mb-0 secondaryColor">
                                                {propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip}
                                            </p>
                                            <div className="d-flex flex-wrap align-items-center detailTags detailTagList">
                                                <div className="row">

                                                    {
                                                        propdetails.length !== 0 && propdetails.pet_allowed === 'Yes' ?
                                                            <div className="col-md-4">
                                                                <span className="brownTag">
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                        <p className="mb-0">Pets OK</p>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                            :
                                                            null
                                                    }

                                                    {/* <span className="brownTag">


                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                <p className="mb-0">Pets OK</p>
                                                            </div>

                                                        </span> */}





                                                    {
                                                        propdetails.length !== 0 && propdetails.handicap == "Yes" ?

                                                            <div className="col-md-8">
                                                                <span className="blueTag mt-0">
                                                                    <span className="">
                                                                        <div className="d-flex align-items-center">
                                                                            <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                            <p className="mb-0">Handicap Accessible</p>
                                                                        </div>
                                                                    </span>
                                                                </span>
                                                            </div> :
                                                            null

                                                    }




                                                    {
                                                        propdetails.length !== 0 && propdetails.seniorpropval == '62' ?
                                                            <div className="col-md-4">
                                                                <span className="orangeTag">
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                        <p className="mb-0">Seniors 62+</p>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                            : null

                                                    }


                                                    {
                                                        propdetails.length !== 0 && propdetails.seniorpropval == '55' ?
                                                            <div className="col-md-4">
                                                                <span className="greenTag">
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={require('../../assets/img/detailImage5.svg').default} />
                                                                        <p className="mb-0">Seniors 55+</p>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                            : null

                                                    }


                                                    {
                                                        propdetails.length !== 0 && propdetails.section8 == 'Yes' ?

                                                            <div className="col-md-4">
                                                                <span className="greenTag">
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                        <p className="mb-0">Section 8</p>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                            : null

                                                    }



                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-auto rightOtherDetail">
                                            <ul className="noMarginPad listStyleNone">


                                                {
                                                    propdetails.min_bed && propdetails.max_bed ?
                                                        <li className="d-flex aligm-items-center">
                                                            <span className="imgBox">
                                                                <img src={require('../../assets/img/Union.svg').default} />
                                                            </span>
                                                            <p className="mb-0 secondaryColor">
                                                                <span className="colorBlue">
                                                                    {propdetails.min_bed}-{propdetails.max_bed}
                                                                </span> Beds
                                                            </p>
                                                        </li>
                                                        :
                                                        propdetails.min_bed || propdetails.max_bed ?
                                                            <li className="d-flex aligm-items-center">
                                                                <span className="imgBox">
                                                                    <img src={require('../../assets/img/Union.svg').default} />
                                                                </span>
                                                                <p className="mb-0 secondaryColor">
                                                                    <span className="colorBlue">
                                                                        {propdetails.min_bed || propdetails.max_bed}
                                                                    </span> Beds
                                                                </p>
                                                            </li>
                                                            : null
                                                }


                                                {/* <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/Union.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">
                                                            {
                                                                propdetails.min_bed && propdetails.max_bed ?
                                                                    propdetails.min_bed - propdetails.max_bed
                                                                    :


                                                                    propdetails.min_bed ||
                                                                    propdetails.max_bed
                                                            }
                                                        </span> Beds


                                                    </p>
                                                </li> */}


                                                {
                                                    propdetails.min_bath && propdetails.max_bath ?


                                                        <li className="d-flex aligm-items-center">
                                                            <span className="imgBox">
                                                                <img src={require('../../assets/img/shower.svg').default} />
                                                            </span>
                                                            <p className="mb-0 secondaryColor">
                                                                <span className="colorBlue">{propdetails.min_bath} - {propdetails.max_bath}</span> Baths
                                                            </p>
                                                        </li>


                                                        :
                                                        propdetails.min_bath || propdetails.max_bath ?
                                                            <li className="d-flex aligm-items-center">
                                                                <span className="imgBox">
                                                                    <img src={require('../../assets/img/shower.svg').default} />
                                                                </span>
                                                                <p className="mb-0 secondaryColor">
                                                                    <span className="colorBlue">{propdetails.min_bath || propdetails.max_bath}</span> Baths
                                                                </p>
                                                            </li>
                                                            : null
                                                }





                                                {/* <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/shower.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">{propdetails.min_bath} - {propdetails.max_bath}</span> Baths
                                                    </p>
                                                </li> */}


                                                {
                                                    propfloor.length == 0 ? null :

                                                        propfloor[0].square_feet_from == propfloor[propfloor.length - 1].square_feet_to ?
                                                            // propfloor[0].square_feet_from
                                                            <li className="d-flex aligm-items-center">
                                                                <span className="imgBox">
                                                                    <img src={require('../../assets/img/area.svg').default} />
                                                                </span>
                                                                <p className="mb-0 secondaryColor">
                                                                    <span className="colorBlue">
                                                                        {propfloor[0].square_feet_from}
                                                                    </span> Sq.Ft
                                                                </p>
                                                            </li>

                                                            :
                                                            <li className="d-flex aligm-items-center">
                                                                <span className="imgBox">
                                                                    <img src={require('../../assets/img/area.svg').default} />
                                                                </span>
                                                                <p className="mb-0 secondaryColor">
                                                                    <span className="colorBlue">

                                                                        {propfloor[0].square_feet_from} - {propfloor[propfloor.length - 1].square_feet_to}


                                                                    </span> Sq.Ft
                                                                </p>
                                                            </li>
                                                }
                                                {/* <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/area.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">
                                                            {
                                                                propfloor.length == 0 ? null :

                                                                    propfloor[0].square_feet_from == propfloor[propfloor.length - 1].square_feet_to ?
                                                                        propfloor[0].square_feet_from
                                                                        :

                                                                        `${propfloor[0].square_feet_from} - ${propfloor[propfloor.length - 1].square_feet_to}`

                                                            }

                                                        </span> Sq.Ft
                                                    </p>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center btnSection">
                                        <a href=""
                                            className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center">
                                            <img src={require('../../assets/img/phoneIcon.svg').default} />{propdata.phone}
                                        </a>
                                        <span
                                            className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center"
                                        >
                                            <img src={require('../../assets/img/qualifyIcon.png').default} /><button onClick={toggleModalQualify}>Qualify Now</button>
                                        </span>

                                        <div className="modal fade rentalModal preRentalModal" id="exampleModal" tabindex="-1"
                                            role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog boxscroll4" role="document">
                                                <div className="wrapperScroll">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title w-100 text-center font-weight700"
                                                                id="exampleModalLabel">Pre-Rental Qualify</h5>
                                                            <button type="button" className="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label for="exampleInputEmail1">Full Name <span
                                                                                className="labelMark">*</span></label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Enter email" value="Jonath" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label for="exampleInputEmail1">Address </label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp" placeholder=""
                                                                                value="4353 Norman Street" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label for="">City</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Enter email" value="Los Angeles" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        for="exampleFormControlSelect1">State</label>
                                                                                    <select className="form-control"
                                                                                        id="exampleFormControlSelect1">
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label for="">ZIP</label>
                                                                                    <input type="email" className="form-control"
                                                                                        id="" aria-describedby="emailHelp"
                                                                                        placeholder="Enter email" value="90022" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label for="">Email Address <span
                                                                                className="labelMark">*</span></label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Enter email"
                                                                                value="Jonathan@gmail.com" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label for="">Phone Number <span
                                                                                className="labelMark">*</span></label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Enter email" value="6261234123" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label for="">Move-In Date</label>
                                                                            <div className="posRel calnderIcon">
                                                                                <input type="email" className="form-control" id=""
                                                                                    aria-describedby="emailHelp"
                                                                                    placeholder="Move-In Date" value="" />
                                                                                <span><img src={require('../../assets/img/calander.png').default} /></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label for="">Occupants</label>
                                                                                    <div className="posRel calnderIcon">
                                                                                        <input type="number" min="1" max="5"
                                                                                            className="form-control" id=""
                                                                                            aria-describedby="emailHelp"
                                                                                            placeholder="" value="1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label for="">Monthly Income</label>
                                                                                    <input type="email" className="form-control"
                                                                                        id="" aria-describedby="emailHelp"
                                                                                        placeholder="" value="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="radioSec">
                                                                            <div className="form-group mb-0">
                                                                                <label>Do you have a voucher?</label>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div>
                                                                                        <input type="radio" id="test1"
                                                                                            name="radio-group" checked />
                                                                                        <label for="test1">Yes</label>
                                                                                    </div>
                                                                                    <div>
                                                                                        <input type="radio" id="test2"
                                                                                            name="radio-group" checked />
                                                                                        <label for="test2">No</label>
                                                                                    </div>
                                                                                    <div>
                                                                                        <input type="radio" id="test3"
                                                                                            name="radio-group" checked />
                                                                                        <label for="test3">On Waiting
                                                                                            List</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="brdrLine marLftRgt"></div>
                                                            <div>
                                                                <h5 className="fontSize14 font-weight700">Disclaimer/Terms of
                                                                    Conditions:</h5>
                                                                <div className="form-group">
                                                                    <textarea className="form-control"
                                                                        id="exampleFormControlTextarea1" rows="3"
                                                                        placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button"
                                                                className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detailTextSec itemMobile responsive15">
                                    <div className="topHeadSec leftTopParaSec">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h2 className="font-weight700 colorBlue mt-0 mb-0">{propdata.property_title}</h2>
                                                <p className="mb-0 secondaryColor">{propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip}</p>
                                            </div>
                                            <div className="ml-auto">
                                                <ul className="noMarginPad listStyleNone sideActionIcon">
                                                    <li className="brdrRadius4">
                                                        <img src={require('../../assets/img/like.png').default} />
                                                    </li>
                                                    <li className="brdrRadius4 mr-0">
                                                        <img src={require('../../assets/img/share.svg').default} />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            {/* <ul className="noMarginPad listStyleNone">
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                            </ul> */}

                                            {
                                                proprating.length == 0 ? null : <Starratingstatic rating={proprating[0].vote_avg} />
                                            }
                                            {/* <Starratingstatic rating={proprating.vote_avg} /> */}
                                        </div>
                                        <div className="d-flex align-items-center rightOtherDetail">
                                            <ul className="noMarginPad listStyleNone resRightList20">
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/Union.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">
                                                            {propdetails.min_bed}-{propdetails.max_bed}
                                                        </span>
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/shower.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">{propdetails.min_bath} - {propdetails.max_bath}</span> Baths
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/area.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">
                                                            {
                                                                propfloor.length == 0 ? null :
                                                                    propfloor[0].square_feet_from - propfloor[propfloor.length - 1].square_feet_to
                                                            }
                                                        </span> Sq.Ft
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex align-items-center callSec">
                                            <ul className="noMarginPad listStyleNone mt-0">
                                                <li>
                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                </li>
                                            </ul>
                                            <div className="ml-auto itemwebsite mba">
                                                <a href="" className="lineBtn brdrRadius4 font-weight700 purpleText">
                                                    <img src={require('../../assets/img/phoneColored.svg').default} />{propdata.phone}
                                                </a>
                                            </div>
                                            <div className="ml-auto itemwebsite mbab">
                                                <a href="" className="lineBtn brdrRadius4 font-weight700 purpleText">
                                                    <img src={require('../../assets/img/phoneColored.svg').default} />Call
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="SectionBlock responsive15">
                                    <h3 className="font-weight700 colorBlue">About</h3>
                                    <div className="truncate">
                                        <p>

                                            {/* {propdata.description} */}
                                            {/* This 25-story apartment community is a visual extension of Piedmont Park in Midtown.
                                            Designed by internationally-acclaimed YOO Design Studio, YOO on the Park sits at the
                                            intersection of fashion, function and design. Whimsical exper Consciousness,
                                            explorations from which we spring star stuff harvesting star light shores of the
                                            cosmic ocean Apollonius of Perga permanence of the stars, Tunguska event paroxysm of
                                            global death white dwarf the carbon in our apple pies tendrils of gossamer clouds
                                            white dwarf not a sunrise but a galaxyrise. Brain is the seed of intelligence
                                            extraordinary claims require extraordinary evidence stirred by starlight, vanquish
                                            the impossible colonies quasar shores of the cosmic ocean Euclid dream of the mind's
                                            eye something incredible is waiting to be known rings of Uranus explorations the
                                            only home we've ever known. */}



                                            {
                                                propdata.description == '' || propdata.description == null ?

                                                    propdetails.min_bed && propdetails.max_bed ?

                                                        `${propdata.property_title} apartments is an affordable rental housing community located in ${propdata.property_city}, ${propdata.property_state}.
                                                         ${propdata.property_title} apartments is an affordable housing community 
                                                         with ${propdetails.max_bed} Bed apartments units.
                                                         Income restrictions may apply, please contact Harc apartments for rates,
                                                         availability and more information or compare to other apartments in ${propdata.property_city} from the results below.`

                                                        :


                                                        propdetails.min_bed || propdetails.max_bed ?
                                                            `${propdata.property_title} apartments is an affordable rental housing community located in ${propdata.property_city}, ${propdata.property_state}.
                                                    ${propdata.property_title} apartments is an affordable housing community 
                                                    with ${propdetails.min_bed} ${propdetails.max_bed}  Bed apartments units.
                                                    Income restrictions may apply, please contact Harc apartments for rates,
                                                    availability and more information or compare to other apartments in ${propdata.property_city} from the results below.`

                                                            : null
                                                    :
                                                    propdata.description









                                                //             (propdetails.min_bed && propdetails.max_bed ?

                                                //                 (
                                                //                     `${propdata.property_title} apartments is an affordable rental housing community located in ${propdata.property_city}, ${propdata.property_state}.
                                                //              ${propdata.property_title} apartments is an affordable housing community
                                                //              with ${propdetails.max_bed} Bed apartments units.
                                                //              Income restrictions may apply, please contact Harc apartments for rates,
                                                //              availability and more information or compare to other apartments in ${propdata.property_city} from the results below.`
                                                //             :
                                                //                 (propdetails.min_bed || propdetails.max_bed ?
                                                //                     (`${propdata.property_title} apartments is an affordable rental housing community located in ${propdata.property_city}, ${propdata.property_state}.
                                                //             ${propdata.property_title} apartments is an affordable housing community
                                                //             with ${propdetails.min_bed} ${propdetails.max_bed} Bed apartments units.
                                                //             Income restrictions may apply, please contact Harc apartments for rates,
                                                //             availability and more information or compare to other apartments in ${propdata.property_city} from the results below.`
                                                //                     ) :

                                                //                     null)) : null):
                                                // propdata.description
                                            }








                                        </p>
                                    </div>
                                    <div className="about_bottm_section">
                                        <ul>
                                            <li><a className="purpleText fontSize16 font-weight700">Save Listing |</a></li>
                                            <li> <a className="purpleText fontSize16 font-weight700">Share |</a></li>
                                            <li><a className="purpleText fontSize16 font-weight700">Rental Assistance Nearby Los Angeles CA</a></li>
                                        </ul>
                                        <div class="media rewards mt-4">
                                            <img class=""
                                                src={require('../../assets/img/rewards.png').default}
                                                alt="Image" />
                                            <div class="media-body ml-3" >
                                                <div class="d-flex align-items-top">
                                                    <div class="headingSec">
                                                        <h5 class="mt-0 mb-0 fontSize18 text-left font-weight700 colorBlue">Build your credit and earn rewards</h5>
                                                        <p class="mb-0 mt-2 colorBlue text-left fontSize18 font-weight400">Landlords often favor applicants with a high credit score.We have provided an opportunity that over 100,000 members are using to help build their credit - A debit card that builds credit and earn rewards.No credit checks.Keep your bank!
                                                        </p>
                                                        <button class="font-weight700 fontSize14 colorWhite transition brdrRadius4">Check it out</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="brdrLine"></div>



                                {propfloor == null || propfloor.length == 0 ?


                                    null :


                                    <div className="SectionBlock responsive15">
                                        <h3 className="font-weight700 colorBlue">Floorplans</h3>
                                        <ul className="noMarginPad listStyleNone floorplanList">

                                            {propfloor.map((data) => {
                                                return (
                                                    <li className="d-flex align-items-center justify-content-between floorPlanListing">
                                                        <div className="imageLeft floorplanHead d-flex align-items-center">
                                                            <img src={require('../../assets/img/floorplan.svg').default} />
                                                            <div className="headingList">
                                                                <h4 className="font-weight500 colorBlue mb-0">{data.floor_plan_name}</h4>
                                                                <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                                                    <li className="secondaryColor">
                                                                        <span className="colorBlue">{data.beds}</span> Bd
                                                                    </li>
                                                                    <li className="secondaryColor ml-16">
                                                                        <span className="colorBlue">{data.baths}</span> Ba
                                                                    </li>
                                                                    <li className="secondaryColor ml-24">
                                                                        <span className="colorBlue">{data.square_feet_to}</span> Sq.ft
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="itemWebsite w-100">
                                                            <div className="d-flex justify-content-center flex1">
                                                                <ul className="noMarginPad listStyleNone floatLeftList">
                                                                    <li className="secondaryColor">
                                                                        <span className="colorBlue">{data.beds}</span> Bedroom
                                                                    </li>
                                                                    <li className="secondaryColor ml-35">
                                                                        <span className="colorBlue">{data.baths}</span> Bathroom
                                                                    </li>
                                                                    <li className="secondaryColor ml-40">
                                                                        <span className="colorBlue">{data.square_feet_to}</span> Sq.ft
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="ml-auto formHead">
                                                            <h3 className="colorBlue">${data.rent_from}</h3>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                }


                                {/* <div className="SectionBlock responsive15">
                                    <h3 className="font-weight700 colorBlue">Floorplans</h3>
                                    <ul className="noMarginPad listStyleNone floorplanList">

                                        {propfloor.map((data) => {
                                            return (
                                                <li className="d-flex align-items-center justify-content-between floorPlanListing">
                                                    <div className="imageLeft floorplanHead d-flex align-items-center">
                                                        <img src={require('../../assets/img/floorplan.svg').default} />
                                                        <div className="headingList">
                                                            <h4 className="font-weight500 colorBlue mb-0">{data.floor_plan_name}</h4>
                                                            <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                                                <li className="secondaryColor">
                                                                    <span className="colorBlue">{data.beds}</span> Bd
                                                                </li>
                                                                <li className="secondaryColor ml-16">
                                                                    <span className="colorBlue">{data.baths}</span> Ba
                                                                </li>
                                                                <li className="secondaryColor ml-24">
                                                                    <span className="colorBlue">{data.square_feet_to}</span> Sq.ft
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="itemWebsite w-100">
                                                        <div className="d-flex justify-content-center flex1">
                                                            <ul className="noMarginPad listStyleNone floatLeftList">
                                                                <li className="secondaryColor">
                                                                    <span className="colorBlue">{data.beds}</span> Bedroom
                                                                </li>
                                                                <li className="secondaryColor ml-35">
                                                                    <span className="colorBlue">{data.baths}</span> Bathroom
                                                                </li>
                                                                <li className="secondaryColor ml-40">
                                                                    <span className="colorBlue">{data.square_feet_to}</span> Sq.ft
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto formHead">
                                                        <h3 className="colorBlue">${data.rent_from}</h3>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div> */}




                                <div className="d-flex align-items-center availSec responsive15 flex-wrap">
                                    <div>
                                        <p className="mb-0">Last updated: <span className="colorBlue font-weight700">Wed, 28 August
                                            2020</span></p>
                                    </div>
                                    <div className="ml-auto Resnoauto">
                                        <button className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center" onClick={toggleModalAvailability}><img src={require('../../assets/img/mail.svg').default} /><span>Check
                                            Availability</span></button>
                                    </div>
                                </div>

                                <div className="modal fade rentalModal availabilityModal" id="exampleModal1" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
                                                    Nr. 1 Ba $1,200 (626) 357-1855</h5>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="modalLeft">
                                                            <div className="imageSecleftModal posRel">
                                                                <img className="w-100" src={require('../../assets/img/modalLeft.png').default} />
                                                                <div
                                                                    className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                    Affordable Housing</div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="lefttitle">
                                                                    <h5 className="mb-0 fontSize18 font-weight700 colorBlue">Blessed
                                                                        Rock Apartments</h5>
                                                                    <p className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                                        2882 Tyler St El Monte, CA 91157</p>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <img src={require('../../assets/img/goodDeal.svg').default} />
                                                                </div>
                                                            </div>
                                                            <div className="sliderListing">
                                                                <ul className="clearfix d-flex align-items-center">
                                                                    <li className="fontSize17"><b>1</b>Bd</li>
                                                                    <li className="fontSize17"><b>1</b>Ba</li>
                                                                    <li className="fontSize17"><b>880</b>Sq.Ft</li>
                                                                    <li className="ml-auto boldTag greenText fontSize24">$1,200</li>
                                                                </ul>
                                                            </div>
                                                            <p className="para fontSize14 font-weight400 secondaryColor">Blessed
                                                                Rock Apartment is an affordable apartment community for 62 years
                                                                of age or older in El Monte, CA.We currently have a waiting
                                                                list. Please call today to find out how to get an application
                                                                for this community or to verify income requirements</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="sideFormBlock">
                                                            <div className="SectionBlock responsive15 availabilitySection">
                                                                <div className="d-flex align-items-center">
                                                                    <h2 className="colorBlue font-weight700 fontSize18">Check
                                                                        Availability</h2>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <p className="purpleText font-weight700 fontSize18"><img
                                                                        src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
                                                                </div>



                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="modal fade rentalModal availabilityModal" id="exampleModal2" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle">Check Availability at These Popular Apartments
                                                    Below</h5>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock scrollModalList">
                                                <div className="custom-radios">
                                                    <div className="labelRadio propertyList active">
                                                        <label for="color-1">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                <div className="rightText flex1 borderRightBlock">
                                                                    <div className="d-flex align-items-center propertyTitle">
                                                                        <a href="propertyDetail">
                                                                            <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                                Rock Apartments</h5>
                                                                        </a>
                                                                        <div className="topHeadSec mt-0">
                                                                            <ul className="noMarginPad listStyleNone">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                        Monte, CA 91157</p>
                                                                    <div className="priceRange itemWebsite">
                                                                        <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                            $1,200-$1,800</h4>
                                                                    </div>
                                                                    <div className="itemMobile priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                            </h4>
                                                                            <span className="font-weight700"><img
                                                                                src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                Deal</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center listingBlockLine">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Beds
                                                                            </li>
                                                                            <li className="d-flex align-items-center ml-12">
                                                                                <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Baths
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="noMarginPad listStyleNone listIcon ml-18">
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <p className="descriptionProperty mb-0 fontSize12"><img className=""
                                                                        src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                        Seniors - 2882 Tyler St...<a href=""
                                                                            className="purpleText">More</a></p>
                                                                </div>
                                                                <div className="widthRadio">
                                                                    <div className="text-center">
                                                                        <a href=""
                                                                            className="fontSize16 font-weight700 text-center requestTag">Request
                                                                            for<br />
                                                                            more info</a>
                                                                        <input type="radio" id="color-1" name="color"
                                                                            value="color-1" checked />
                                                                        <span>
                                                                            <div>
                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                    alt="Checked Icon" />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="labelRadio propertyList">
                                                        <label for="color-2">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                <div className="rightText flex1 borderRightBlock">
                                                                    <div className="d-flex align-items-center propertyTitle">
                                                                        <a href="propertyDetail">
                                                                            <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                                Rock Apartments</h5>
                                                                        </a>
                                                                        <div className="topHeadSec mt-0">
                                                                            <ul className="noMarginPad listStyleNone">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                        Monte, CA 91157</p>
                                                                    <div className="priceRange itemWebsite">
                                                                        <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                            $1,200-$1,800</h4>
                                                                    </div>
                                                                    <div className="itemMobile priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                            </h4>
                                                                            <span className="font-weight700"><img
                                                                                src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                Deal</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center listingBlockLine">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Beds
                                                                            </li>
                                                                            <li className="d-flex align-items-center ml-12">
                                                                                <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Baths
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="noMarginPad listStyleNone listIcon ml-18">
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <p className="descriptionProperty mb-0 fontSize12"><img className=""
                                                                        src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                        Seniors - 2882 Tyler St...<a href=""
                                                                            className="purpleText">More</a></p>
                                                                </div>
                                                                <div className="widthRadio">
                                                                    <div className="text-center">
                                                                        <a href=""
                                                                            className="fontSize16 font-weight700 text-center">Request
                                                                            for<br />
                                                                            more info</a>
                                                                        <input type="radio" id="color-2" name="color"
                                                                            value="color-2" checked />
                                                                        <span>
                                                                            <div>
                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                    alt="Checked Icon" />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="labelRadio propertyList">
                                                        <label for="color-3">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                <div className="rightText flex1 borderRightBlock">
                                                                    <div className="d-flex align-items-center propertyTitle">
                                                                        <a href="propertyDetail">
                                                                            <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                                Rock Apartments</h5>
                                                                        </a>
                                                                        <div className="topHeadSec mt-0">
                                                                            <ul className="noMarginPad listStyleNone">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                        Monte, CA 91157</p>
                                                                    <div className="priceRange itemWebsite">
                                                                        <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                            $1,200-$1,800</h4>
                                                                    </div>
                                                                    <div className="itemMobile priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                            </h4>
                                                                            <span className="font-weight700"><img
                                                                                src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                Deal</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center listingBlockLine">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Beds
                                                                            </li>
                                                                            <li className="d-flex align-items-center ml-12">
                                                                                <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Baths
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="noMarginPad listStyleNone listIcon ml-18">
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                            </li>
                                                                            <li>
                                                                                <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <p className="descriptionProperty mb-0 fontSize12"><img className=""
                                                                        src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                        Seniors - 2882 Tyler St...<a href=""
                                                                            className="purpleText">More</a></p>
                                                                </div>
                                                                <div className="widthRadio">
                                                                    <div className="text-center">
                                                                        <a href=""
                                                                            className="fontSize16 font-weight700 text-center">Request
                                                                            for<br />
                                                                            more info</a>
                                                                        <input type="radio" id="color-3" name="color"
                                                                            value="color-3" checked />
                                                                        <span>
                                                                            <div>
                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                    alt="Checked Icon" />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottomFooter d-flex align-items-center">
                                                <h3>2 properties Selected</h3>
                                                <div className="ml-auto">
                                                    <a href="" className="checkBtnModall" data-toggle="modal"
                                                        data-target="#exampleModal3" data-dismiss="modal"
                                                        aria-label="Close">Check Availability</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal fade rentalModal availabilityModal" id="exampleModal3" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle" style={{ color: "#fff" }}>Title</h5>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock">
                                                <div className="thankyouBlock text-center">
                                                    <img src={require('../../assets/img/thankYou.png').default} />
                                                    <h1 className="font-weight700 colorBlue">Thank You</h1>
                                                    <p className="fontSize18 font-weight400 secondaryColor">Your request has been
                                                        submitted successfully</p>
                                                    <a href="" className="doneBtn brdrRadius4">Done</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="brdrLine"></div>

                                {
                                    propamenities.unit_amenities == 0 && propamenities.property_amenities == 0 ?
                                        null :
                                        <>
                                            <Amenities propamenities={propamenities} />
                                            <div className="brdrLine"></div>

                                        </>
                                }

                                {/* <Amenities propamenities={propamenities} /> */}

                                {/* <div className="amenitiesListing respo nsive15">
                                    <div className="row">
                                        <div className="col-md-6 itemWebsite">
                                            <div className="">
                                                <h3 className="font-weight700 colorBlue">Unit Amenities</h3>
                                                <ul className="noMarginPad listStyleNone detailListing">
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities1.png').default} />
                                                        </span>
                                                        <p className="mb-0">Air Conditioning</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities2.png').default} />
                                                        </span>
                                                        <p className="mb-0">Carpet</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities3.png').default} />
                                                        </span>
                                                        <p className="mb-0">Cable Ready</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities4.png').default} />
                                                        </span>
                                                        <p className="mb-0">Refrigerator/Stove</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities5.png').default} />
                                                        </span>
                                                        <p className="mb-0">Water Trash and Sewer Included</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities6.png').default} />
                                                        </span>
                                                        <p className="mb-0">Window Covering</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 itemWebsite">
                                            <div>
                                                <h3 className="font-weight700 colorBlue">Property Amenities</h3>
                                                <ul className="noMarginPad listStyleNone detailListing">
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property1.png').default} />
                                                        </span>
                                                        <p className="mb-0">2 Community Rooms -<br />
                                                            Large Screen TV</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property2.png').default} />
                                                        </span>
                                                        <p className="mb-0">3 Laundry Rooms</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property3.png').default} />
                                                        </span>
                                                        <p className="mb-0">Courtyard</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property4.png').default} />
                                                        </span>
                                                        <p className="mb-0">24 hr Emergency Maintenance</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property5.png').default} />
                                                        </span>
                                                        <p className="mb-0">Near Public Transportation</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property6.png').default} />
                                                        </span>
                                                        <p className="mb-0">Close to Shopping</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 itemMobile">
                                            <div className="responsive15">
                                                <h3 className="font-weight700 colorBlue">Amenities</h3>
                                                <ul className="noMarginPad listStyleNone detailListing">
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities1.png').default} />
                                                        </span>
                                                        <p className="mb-0">Air Conditioning</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities2.png').default} />
                                                        </span>
                                                        <p className="mb-0">Carpet</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities3.png').default} />
                                                        </span>
                                                        <p className="mb-0">Cable Ready</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/amenities4.png').default} />
                                                        </span>
                                                        <p className="mb-0">Refrigerator/Stove</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property2.png').default} />
                                                        </span>
                                                        <p className="mb-0">3 Laundry Rooms</p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <span className="brdrRadius4">
                                                            <img src={require('../../assets/img/property3.png').default} />
                                                        </span>
                                                        <p className="mb-0">Courtyard</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="pupleLineBtn responsive15">
                                                <a href="" className="w-100 transition font-weight500">Show all 40 amenities</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="brdrLine"></div> */}



                                {
                                    proputility == null || proputility.length == 0 ?

                                        null :

                                        <>
                                            <div className="amenitiesListing responsive15">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h3 className="font-weight700 colorBlue">Utility Allowances</h3>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="row d-flex">
                                                            <div className="col-lg-6 w-50">
                                                                <div>
                                                                    <p className="font-weight500 paraHeading">PAID BY TENANT</p>
                                                                    <ul className="noMarginPad listStyleNone detailListing">
                                                                        {
                                                                            proputility.length !== 0 ?
                                                                                (proputility[0].electric == 'tenant' ?
                                                                                    <li className="d-flex align-items-center">
                                                                                        <span className="brdrRadius4">
                                                                                            <img src={require('../../assets/img/tenant1.png').default} />
                                                                                        </span>
                                                                                        <p className="mb-0">Electric</p>
                                                                                    </li> :
                                                                                    null)
                                                                                :
                                                                                null
                                                                        }

                                                                        {
                                                                            proputility.length !== 0 ?
                                                                                (
                                                                                    proputility[0].water == 'tenant' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/manager1.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Water</p>
                                                                                        </li> :
                                                                                        null) : null
                                                                        }

                                                                        {
                                                                            proputility.length !== 0 ?
                                                                                (
                                                                                    proputility[0].sewer == 'tenant' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/tenant2.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Sewer</p>
                                                                                        </li> :
                                                                                        null) : null
                                                                        }

                                                                        {
                                                                            proputility.length !== 0 ?
                                                                                (
                                                                                    proputility[0].hot_water == 'tenant' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/manager2.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Hot Water</p>
                                                                                        </li> :
                                                                                        null) : null
                                                                        }

                                                                        {proputility.length !== 0 ?
                                                                            (
                                                                                proputility[0].cooling == 'tenant' ?
                                                                                    <li className="d-flex align-items-center">
                                                                                        <span className="brdrRadius4">
                                                                                            <img src={require('../../assets/img/tenant3.png').default} />
                                                                                        </span>
                                                                                        <p className="mb-0">Cooling</p>
                                                                                    </li> :
                                                                                    null) : null
                                                                        }
                                                                        {
                                                                            proputility.length !== 0 ?
                                                                                (
                                                                                    proputility[0].cooking == 'tenant' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/tenant4.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Cooking</p>
                                                                                        </li> : null) : null
                                                                        }
                                                                        {
                                                                            proputility.length !== 0 ?
                                                                                (
                                                                                    proputility[0].heat == 'tenant' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/tenant5.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Heat</p>
                                                                                        </li> :
                                                                                        null) : null
                                                                        }




                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 w-50">
                                                                <div>
                                                                    <p className="font-weight500 paraHeading">PAID BY MANAGER</p>
                                                                    <ul className="noMarginPad listStyleNone detailListing">
                                                                        {
                                                                            proputility.length !== 0 ?


                                                                                (
                                                                                    proputility[0].electric == 'manager' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/tenant1.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Electric</p>
                                                                                        </li> :
                                                                                        null) : null
                                                                        }

                                                                        {proputility.length !== 0 ?


                                                                            (
                                                                                proputility[0].water == 'manager' ?
                                                                                    <li className="d-flex align-items-center">
                                                                                        <span className="brdrRadius4">
                                                                                            <img src={require('../../assets/img/manager1.png').default} />
                                                                                        </span>
                                                                                        <p className="mb-0">Water</p>
                                                                                    </li> :
                                                                                    null) : null
                                                                        }

                                                                        {proputility.length !== 0 ?


                                                                            (
                                                                                proputility[0].sewer == 'manager' ?
                                                                                    <li className="d-flex align-items-center">
                                                                                        <span className="brdrRadius4">
                                                                                            <img src={require('../../assets/img/tenant2.png').default} />
                                                                                        </span>
                                                                                        <p className="mb-0">Sewer</p>
                                                                                    </li> :
                                                                                    null) : null
                                                                        }

                                                                        {proputility.length !== 0 ?


                                                                            (
                                                                                proputility[0].hot_water == 'manager' ?
                                                                                    <li className="d-flex align-items-center">
                                                                                        <span className="brdrRadius4">
                                                                                            <img src={require('../../assets/img/manager2.png').default} />
                                                                                        </span>
                                                                                        <p className="mb-0">Hot Water</p>
                                                                                    </li> :
                                                                                    null) : null
                                                                        }

                                                                        {
                                                                            proputility.length !== 0 ?


                                                                                (
                                                                                    proputility[0].cooling == 'manager' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/tenant3.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Cooling</p>
                                                                                        </li> :
                                                                                        null) : null
                                                                        }
                                                                        {proputility.length !== 0 ?


                                                                            (
                                                                                proputility[0].cooking == 'manager' ?
                                                                                    <li className="d-flex align-items-center">
                                                                                        <span className="brdrRadius4">
                                                                                            <img src={require('../../assets/img/tenant4.png').default} />
                                                                                        </span>
                                                                                        <p className="mb-0">Cooking</p>
                                                                                    </li> : null) : null
                                                                        }
                                                                        {
                                                                            proputility.length !== 0 ?


                                                                                (
                                                                                    proputility[0].heat == 'manager' ?
                                                                                        <li className="d-flex align-items-center">
                                                                                            <span className="brdrRadius4">
                                                                                                <img src={require('../../assets/img/tenant5.png').default} />
                                                                                            </span>
                                                                                            <p className="mb-0">Heat</p>
                                                                                        </li> :
                                                                                        null) : null
                                                                        }

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="brdrLine"></div>
                                        </>
                                }



                                {/* <div className="amenitiesListing responsive15">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h3 className="font-weight700 colorBlue">Utility Allowances</h3>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="row d-flex">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 w-50">
                                                    <div>
                                                        <p className="font-weight500 paraHeading">PAID BY TENANT</p>
                                                        <ul className="noMarginPad listStyleNone detailListing">
                                                            {
                                                                proputility.length !== 0 ?
                                                                    (proputility[0].electric == 'tenant' ?
                                                                        <li className="d-flex align-items-center">
                                                                            <span className="brdrRadius4">
                                                                                <img src={require('../../assets/img/tenant1.png').default} />
                                                                            </span>
                                                                            <p className="mb-0">Electric</p>
                                                                        </li> :
                                                                        null)
                                                                    :
                                                                    null
                                                            }

                                                            {
                                                                proputility.length !== 0 ?
                                                                    (
                                                                        proputility[0].water == 'tenant' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/manager1.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Water</p>
                                                                            </li> :
                                                                            null) : null
                                                            }

                                                            {
                                                                proputility.length !== 0 ?
                                                                    (
                                                                        proputility[0].sewer == 'tenant' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/tenant2.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Sewer</p>
                                                                            </li> :
                                                                            null) : null
                                                            }

                                                            {
                                                                proputility.length !== 0 ?
                                                                    (
                                                                        proputility[0].hot_water == 'tenant' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/manager2.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Hot Water</p>
                                                                            </li> :
                                                                            null) : null
                                                            }

                                                            {proputility.length !== 0 ?
                                                                (
                                                                    proputility[0].cooling == 'tenant' ?
                                                                        <li className="d-flex align-items-center">
                                                                            <span className="brdrRadius4">
                                                                                <img src={require('../../assets/img/tenant3.png').default} />
                                                                            </span>
                                                                            <p className="mb-0">Cooling</p>
                                                                        </li> :
                                                                        null) : null
                                                            }
                                                            {
                                                                proputility.length !== 0 ?
                                                                    (
                                                                        proputility[0].cooking == 'tenant' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/tenant4.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Cooking</p>
                                                                            </li> : null) : null
                                                            }
                                                            {
                                                                proputility.length !== 0 ?
                                                                    (
                                                                        proputility[0].heat == 'tenant' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/tenant5.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Heat</p>
                                                                            </li> :
                                                                            null) : null
                                                            }




                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 w-50">
                                                    <div>
                                                        <p className="font-weight500 paraHeading">PAID BY MANAGER</p>
                                                        <ul className="noMarginPad listStyleNone detailListing">
                                                            {
                                                                proputility.length !== 0 ?


                                                                    (
                                                                        proputility[0].electric == 'manager' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/tenant1.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Electric</p>
                                                                            </li> :
                                                                            null) : null
                                                            }

                                                            {proputility.length !== 0 ?


                                                                (
                                                                    proputility[0].water == 'manager' ?
                                                                        <li className="d-flex align-items-center">
                                                                            <span className="brdrRadius4">
                                                                                <img src={require('../../assets/img/manager1.png').default} />
                                                                            </span>
                                                                            <p className="mb-0">Water</p>
                                                                        </li> :
                                                                        null) : null
                                                            }

                                                            {proputility.length !== 0 ?


                                                                (
                                                                    proputility[0].sewer == 'manager' ?
                                                                        <li className="d-flex align-items-center">
                                                                            <span className="brdrRadius4">
                                                                                <img src={require('../../assets/img/tenant2.png').default} />
                                                                            </span>
                                                                            <p className="mb-0">Sewer</p>
                                                                        </li> :
                                                                        null) : null
                                                            }

                                                            {proputility.length !== 0 ?


                                                                (
                                                                    proputility[0].hot_water == 'manager' ?
                                                                        <li className="d-flex align-items-center">
                                                                            <span className="brdrRadius4">
                                                                                <img src={require('../../assets/img/manager2.png').default} />
                                                                            </span>
                                                                            <p className="mb-0">Hot Water</p>
                                                                        </li> :
                                                                        null) : null
                                                            }

                                                            {
                                                                proputility.length !== 0 ?


                                                                    (
                                                                        proputility[0].cooling == 'manager' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/tenant3.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Cooling</p>
                                                                            </li> :
                                                                            null) : null
                                                            }
                                                            {proputility.length !== 0 ?


                                                                (
                                                                    proputility[0].cooking == 'manager' ?
                                                                        <li className="d-flex align-items-center">
                                                                            <span className="brdrRadius4">
                                                                                <img src={require('../../assets/img/tenant4.png').default} />
                                                                            </span>
                                                                            <p className="mb-0">Cooking</p>
                                                                        </li> : null) : null
                                                            }
                                                            {
                                                                proputility.length !== 0 ?


                                                                    (
                                                                        proputility[0].heat == 'manager' ?
                                                                            <li className="d-flex align-items-center">
                                                                                <span className="brdrRadius4">
                                                                                    <img src={require('../../assets/img/tenant5.png').default} />
                                                                                </span>
                                                                                <p className="mb-0">Heat</p>
                                                                            </li> :
                                                                            null) : null
                                                            }

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="brdrLine"></div> */}


                                <div className="SectionBlock responsive15 officeHoursBlock">
                                    <h3 className="font-weight700 colorBlue">Office Hours</h3>
                                    <ul className="noMarginPad listStyleNone">
                                        <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Monday<span
                                                className="ml-auto font-weight400 secondaryColor">
                                                {propdetails.lease_office_time_open_monday == 0 && propdetails.lease_office_time_close_monday == 0 ?
                                                    'Closed' :
                                                    `${propdetails.lease_office_time_open_monday}-${propdetails.lease_office_time_close_monday}`

                                                }
                                                {/* {propdetails.lease_office_time_open_monday} - {propdetails.lease_office_time_close_monday} */}
                                            </span></p>
                                        </li>
                                        <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Tuesday<span
                                                className="ml-auto font-weight400 secondaryColor">
                                                {propdetails.lease_office_time_open_tuesday == 0 && propdetails.lease_office_time_close_tuesday == 0 ?
                                                    'Closed' :
                                                    `${propdetails.lease_office_time_open_tuesday}-${propdetails.lease_office_time_close_tuesday}`
                                                }
                                                {/* {propdetails.lease_office_time_open_tuesday} - {propdetails.lease_office_time_close_tuesday} */}
                                            </span></p>
                                        </li>
                                        <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Wednesday<span
                                                className="ml-auto font-weight400 secondaryColor">
                                                {propdetails.lease_office_time_open_wednesday == 0 && propdetails.lease_office_time_close_wednesday == 0 ?
                                                    'Closed' :
                                                    `${propdetails.lease_office_time_open_wednesday}-${propdetails.lease_office_time_close_wednesday}`
                                                }
                                                {/* {propdetails.lease_office_time_open_wednesday} - {propdetails.lease_office_time_close_wednesday} */}
                                            </span></p>
                                        </li>
                                        <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Thursday<span
                                                className="ml-auto font-weight400 secondaryColor">
                                                {propdetails.lease_office_time_open_thursday == 0 && propdetails.lease_office_time_close_thursday == 0 ?
                                                    'Closed' :
                                                    `${propdetails.lease_office_time_open_thursday}-${propdetails.lease_office_time_close_thursday}`
                                                }
                                                {/* {propdetails.lease_office_time_open_thursday} - {propdetails.lease_office_time_close_thursday} */}
                                            </span></p>
                                        </li>
                                        <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Friday<span
                                                className="ml-auto font-weight400 secondaryColor">
                                                {propdetails.lease_office_time_open_friday == 0 && propdetails.lease_office_time_close_friday == 0 ?
                                                    'Closed' :
                                                    `${propdetails.lease_office_time_open_friday}-${propdetails.lease_office_time_close_friday}`
                                                }
                                                {/* {propdetails.lease_office_time_open_friday} - {propdetails.lease_office_time_close_friday} */}

                                            </span></p>
                                        </li>
                                        <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Saturday<span
                                                className="ml-auto font-weight400 secondaryColor">
                                                {propdetails.lease_office_time_open_sturday == 0 && propdetails.lease_office_time_close_sturday == 0 ?
                                                    'Closed' :
                                                    `${propdetails.lease_office_time_open_sturday}-${propdetails.lease_office_time_close_sturday}`
                                                }
                                                {/* {propdetails.lease_office_time_open_sturday} - {propdetails.lease_office_time_close_sturday} */}
                                            </span></p>
                                        </li>
                                        {/* <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Saturday<span
                                                className="ml-auto font-weight400 secondaryColor">by Appointment</span></p>
                                        </li> */}
                                        <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Sunday<span className="ml-auto font-weight400 secondaryColor">
                                                {propdetails.lease_office_time_open_sunday == 0 && propdetails.lease_office_time_close_sunday == 0 ?
                                                    'Closed' :
                                                    `${propdetails.lease_office_time_open_sunday}-${propdetails.lease_office_time_close_sunday}`
                                                }
                                                {/* {propdetails.lease_office_time_open_sunday} - {propdetails.lease_office_time_close_sunday} */}
                                            </span>

                                                {/* <img
                                                    src={require('../../assets/img/call.svg').default} />Call (626) 448-2699</span> */}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="brdrLine"></div>


                                <div className="SectionBlock responsive15 leaseSec">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3 className="font-weight700 colorBlue">Lease Terms</h3>
                                            <p className="font-weight400 colorBlue">{propdetails.lease_length}</p>
                                            <ul className="noMarginPad listStyleNone floatLeftList clearfix">
                                                <li>
                                                    <img src={require('../../assets/img/lease1.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/lease2.svg').default} />
                                                </li>
                                            </ul>
                                            <p className="font-weight400 fontSize12">This institution is an equal opportunity
                                                provider.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="font-weight700 colorBlue">Pet Policy</h3>
                                            <p className="colorBlue fontSize14 mb-0">
                                                {propdetails.other_term}
                                                {/* Residents are permitted to keep common
                                                household pets in their apartments. Service or assistance animals are also
                                                welcome. */}

                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="brdrLine"></div>

                                {
                                    proprent == null || proprent.length == 0 ?
                                        null :
                                        <div className="fairmarketRent responsive15">
                                            <div className="d-flex align-items-center">
                                                <h5 className="mb-0 fontSize18 font-weight700 colorBlue">{propdata.property_city} Fair Market Rents</h5>
                                                <p className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">as of February 2021</p>
                                            </div>
                                            <p className="mb-0 secondaryColor fontSize16 font-weight400 mt-1">Fair Market Rents are HUD's
                                                determination of the average rents in a particular area for each bedroom size. The FMRs
                                                are set each year based on the rental rates of unsubsidized units so that participants
                                                in HUD programs have equal access for affordable housing. Here are the Fair Market Rents
                                                for {propdata.property_city}, {propdata.property_state}.</p>
                                            <div className="bedroomBox itemWebsite">
                                                <div className="bedroomBoxFlex">
                                                    <p className="mb-0 secondaryColor fontSize14 font-weight400">Efficiency</p>
                                                    <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent[0].fmr0}</h4>
                                                </div>
                                                <div className="bedroomBoxFlex">
                                                    <p className="mb-0 secondaryColor fontSize14 font-weight400">One-Bedroom</p>
                                                    <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent[0].fmr1}</h4>
                                                </div>
                                                <div className="bedroomBoxFlex">
                                                    <p className="mb-0 secondaryColor fontSize14 font-weight400">Two-Bedroom</p>
                                                    <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent[0].fmr2}</h4>
                                                </div>
                                                <div className="bedroomBoxFlex">
                                                    <p className="mb-0 secondaryColor fontSize14 font-weight400">Three-Bedroom</p>
                                                    <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent[0].fmr3}</h4>
                                                </div>
                                                <div className="bedroomBoxFlex">
                                                    <p className="mb-0 secondaryColor fontSize14 font-weight400">Four-Bedroom</p>
                                                    <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent[0].fmr4}</h4>
                                                </div>
                                            </div>


                                            <div className="itemMobile">
                                                <div className="bedroomBox2">
                                                    <div className="d-flex align-items-top w-100">
                                                        <div className="w-50 brdrRight">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency
                                                                    </p>
                                                                    <h5 className="mb-0 colorBlue font-weight700">$200</h5>
                                                                </li>
                                                                <li>
                                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom
                                                                    </p>
                                                                    <h5 className="mb-0 colorBlue font-weight700">$600</h5>
                                                                </li>
                                                                <li>
                                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom
                                                                    </p>
                                                                    <h5 className="mb-0 colorBlue font-weight700">$700</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50 padLeft16">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                        Three-Bedroom</p>
                                                                    <h5 className="mb-0 colorBlue font-weight700">$900</h5>
                                                                </li>
                                                                <li>
                                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                        Four-Bedroom</p>
                                                                    <h5 className="mb-0 colorBlue font-weight700">$1,200</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                }

                                {/* <div className="fairmarketRent responsive15">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 fontSize18 font-weight700 colorBlue">{propdata.property_city} Fair Market Rents</h5>
                                        <p className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">as of February 2021</p>
                                    </div>
                                    <p className="mb-0 secondaryColor fontSize16 font-weight400 mt-1">Fair Market Rents are HUD's
                                        determination of the average rents in a particular area for each bedroom size. The FMRs
                                        are set each year based on the rental rates of unsubsidized units so that participants
                                        in HUD programs have equal access for affordable housing. Here are the Fair Market Rents
                                        for {propdata.property_city}, {propdata.property_state}:</p>
                                    <div className="bedroomBox itemWebsite">
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Efficiency</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr0}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">One-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr1}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Two-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr2}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Three-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr3}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Four-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr4}</h4>
                                        </div>
                                    </div>


                                    <div className="itemMobile">
                                        <div className="bedroomBox2">
                                            <div className="d-flex align-items-top w-100">
                                                <div className="w-50 brdrRight">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$200</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$600</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$700</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="w-50 padLeft16">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                Three-Bedroom</p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$900</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                Four-Bedroom</p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$1,200</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                
                                </div> */}

                                <div className="fairmarketRent responsive15">
                                    <Emailsubs2 />
                                    <div className="brdrLine"></div>
                                </div>


                                <div className="SectionBlock responsive15 neighborhoodSec">
                                    <h3 className="font-weight700 colorBlue">Neighborhoods Nearby</h3>
                                    <ul className="noMarginPad listStyleNone">

                                        <li>
                                            <div className="media d-flex align-items-center ">


                                                {
                                                    propwalkscore.hasOwnProperty('walkscore') ?
                                                        (propwalkscore.walkscore == 0 ?
                                                            <><CircularProgressbarWithChildren value={41} className="progress"
                                                                styles={buildStyles({
                                                                    pathColor: "#9d56f7",
                                                                    trailColor: "#efefef"
                                                                })}>
                                                                <div className="progress-value  text-center">
                                                                    <div style={{ "line-height": "17px" }}>
                                                                        <span className="purpleText font-weight700 fontSize16">41</span><br />
                                                                        <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                            className="font-weight400">of 100</span>
                                                                    </div>
                                                                </div>
                                                            </CircularProgressbarWithChildren></>

                                                            : <>

                                                                <CircularProgressbarWithChildren value={propwalkscore.walkscore} className="progress"
                                                                    styles={buildStyles({
                                                                        pathColor: "#9d56f7",
                                                                        trailColor: "#efefef"
                                                                    })}>
                                                                    <div className="progress-value  text-center">
                                                                        <div style={{ "line-height": "17px" }}>
                                                                            <span className="purpleText font-weight700 fontSize16">{propwalkscore.walkscore}</span><br />
                                                                            <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                                className="font-weight400">of 100</span>
                                                                        </div>
                                                                    </div>
                                                                </CircularProgressbarWithChildren></>) :
                                                        <CircularProgressbarWithChildren value={0} className="progress"
                                                            styles={buildStyles({
                                                                pathColor: "#9d56f7",
                                                                trailColor: "#efefef"
                                                            })}>
                                                            <div className="progress-value  text-center">
                                                                <div style={{ "line-height": "17px" }}>
                                                                    {/* <span className="purpleText font-weight700 fontSize16">75</span><br />
                                                                    <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                        className="font-weight400">of 100</span> */}
                                                                    N/A
                                                                </div>
                                                            </div>
                                                        </CircularProgressbarWithChildren>

                                                }

                                                {/* <CircularProgressbarWithChildren value={75} className="progress"
                                                    styles={buildStyles({
                                                        pathColor: "#9d56f7",
                                                        trailColor: "#efefef"
                                                    })}>
                                                    <div className="progress-value  text-center">
                                                        <div style={{ "line-height": "17px" }}>
                                                            <span className="purpleText font-weight700 fontSize16">75</span><br />
                                                            <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                className="font-weight400">of 100</span>
                                                        </div>
                                                    </div>
                                                </CircularProgressbarWithChildren> */}
                                                <div className="media-body">
                                                    <div className="mt-0 d-flex align-items-center mb-0">
                                                        <span>
                                                            <img src={require('../../assets/img/walkScore.svg').default} />
                                                        </span>
                                                        <h6 className="font-weight500 mb-0">Walk Score</h6>
                                                        <div className="posRel infoBox">
                                                            <i className="fas fa-info-circle"></i>
                                                            <div className="onHoverBlock">
                                                                Transit Score is a patented measure of how well a location is
                                                                served by public transit. <a href="">Learn More Here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 para fontSize16">Blessed Rock Apartment is very walkable and
                                                        have good walk score. Most errands can be accomplished on foot.</p>
                                                </div>

                                            </div>

                                        </li>

                                        <li>
                                            <div className="media d-flex align-items-center ">
                                                {/* <CircularProgressbarWithChildren value={0} className="progress"
                                                    styles={buildStyles({
                                                        pathColor: "#9d56f7",
                                                        trailColor: "#efefef"
                                                    })}>
                                                    <div className="progress-value  text-center">
                                                        <div style={{ "line-height": "17px" }}>
                                                            <span className="purpleText font-weight700 fontSize16">0</span><br />
                                                            <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                className="font-weight400">of 100</span>
                                                        </div>
                                                    </div>
                                                </CircularProgressbarWithChildren> */}


                                                {
                                                    propwalkscore.hasOwnProperty('transitscore') ?

                                                        propwalkscore.transitscore == 0 ?
                                                            <CircularProgressbarWithChildren value={41} className="progress"
                                                                styles={buildStyles({
                                                                    pathColor: "#9d56f7",
                                                                    trailColor: "#efefef"
                                                                })}>
                                                                <div className="progress-value  text-center">
                                                                    <div style={{ "line-height": "17px" }}>
                                                                        <span className="purpleText font-weight700 fontSize16">41</span><br />
                                                                        <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                            className="font-weight400">of 100</span>

                                                                    </div>
                                                                </div>
                                                            </CircularProgressbarWithChildren> :

                                                            <CircularProgressbarWithChildren value={propwalkscore.transitscore} className="progress"
                                                                styles={buildStyles({
                                                                    pathColor: "#9d56f7",
                                                                    trailColor: "#efefef"
                                                                })}>
                                                                <div className="progress-value  text-center">
                                                                    <div style={{ "line-height": "17px" }}>
                                                                        <span className="purpleText font-weight700 fontSize16">{propwalkscore.transitscore}</span><br />
                                                                        <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                            className="font-weight400">of 100</span>

                                                                    </div>
                                                                </div>
                                                            </CircularProgressbarWithChildren>

                                                        :

                                                        <CircularProgressbarWithChildren value={0} className="progress"
                                                            styles={buildStyles({
                                                                pathColor: "#9d56f7",
                                                                trailColor: "#efefef"
                                                            })}>
                                                            <div className="progress-value  text-center">
                                                                <div style={{ "line-height": "17px" }}>
                                                                    {/* <span className="purpleText font-weight700 fontSize16">0</span><br />
                                                                    <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                        className="font-weight400">of 100</span> */}
                                                                    N/A
                                                                </div>
                                                            </div>
                                                        </CircularProgressbarWithChildren>


                                                }


                                                <div className="media-body">
                                                    <div className="mt-0 d-flex align-items-center mb-0">
                                                        <span>
                                                            <img src={require('../../assets/img/transit.svg').default} />
                                                        </span>
                                                        <h6 className="font-weight500 mb-0">Transit Score</h6>
                                                        <div className="posRel infoBox">
                                                            <i className="fas fa-info-circle"></i>
                                                            <div className="onHoverBlock">
                                                                Transit Score is a patented measure of how well a location is
                                                                served by public transit. <a href="">Learn More Here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 para fontSize16">Blessed Rock Apartment has good transit
                                                        score meaning many nearby public transportation options are available.</p>
                                                </div>
                                            </div>
                                        </li>

                                        {/* <li>
                                            <div className="media d-flex align-items-center">
                                                <div>
                                                    <div className="progress" data-percentage="74">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div style={{ "line-height": "17px" }}>
                                                                <span className="purpleText font-weight700 fontSize16">75</span><br />
                                                                <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                    className="font-weight400">of 100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div className="mt-0 d-flex align-items-center mb-0">
                                                        <span>
                                                            <img src={require('../../assets/img/walkScore.svg').default} />
                                                        </span>
                                                        <h6 className="font-weight500 mb-0">Walk Score</h6>
                                                        <div className="posRel infoBox">
                                                            <i className="fas fa-info-circle"></i>
                                                            <div className="onHoverBlock">
                                                                Transit Score is a patented measure of how well a location is
                                                                served by public transit. <a href="">Learn More Here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 para fontSize16">Blessed Rock Apartment is very walkable and
                                                        have good walk score. Most errands can be accomplished on foot.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media d-flex align-items-center">
                                                <div>
                                                    <div className="progress" data-percentage="74">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div style={{ "line-height": "17px" }}>
                                                                <span className="purpleText font-weight700 fontSize16">87</span><br />
                                                                <span style={{ "text-transform": "lowercase", "font-size": "400" }}>of
                                                                    100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div className="mt-0 d-flex align-items-center mb-0">
                                                        <span>
                                                            <img src={require('../../assets/img/transit.svg').default} />
                                                        </span>
                                                        <h6 className="font-weight500 mb-0">Transit Score</h6>
                                                        <div className="posRel infoBox">
                                                            <i className="fas fa-info-circle"></i>
                                                            <div className="onHoverBlock">
                                                                Transit Score is a patented measure of how well a location is
                                                                served by public transit. <a href="">Learn More Here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 para fontSize16">Blessed Rock Apartment has good transit
                                                        score meaning many nearby public transportation options are available.
                                                    </p>
                                                </div>
                                            </div>
                                        </li> */}



                                    </ul>
                                </div>
                                <div className="mapSection posRel">
                                    {/* <img className="img-fluid" src={require('../../assets/img/mapImage.png').default} />
                                    <span>
                                        <img src={require('../../assets/img/marker.png').default} />
                                    </span> */}


                                    <SinglePointMap propdata={propdata} />
                                    {/* <SinglePointMap */}


                                </div>
                                <div className="brdrLine"></div>
                                <div className="responsive15">
                                    <div className="titleHeading">
                                        <h3 className="fontSize18 font-weight700">Schools Nearby</h3>
                                    </div>

                                    <SchoolItem schoolnearby={schoolnearby} />

                                    {/* <div className="itemWebsite">
                                        <table className="table agencyDetailtable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Grades</th>
                                                    <th scope="col">Urban Center</th>
                                                    <th scope="col">City, State</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>KG-5</td>
                                                    <td>N/A</td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>KG-5</td>
                                                    <td>N/A</td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>KG-5</td>
                                                    <td>N/A</td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>KG-5</td>
                                                    <td>N/A</td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>KG-5</td>
                                                    <td>N/A</td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                         //    modal 
                                        <div className="modal fade rentalModal availabilityModal" id="exampleModalMoreInfo"
                                            tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header posRel moreInfoModalHeader">
                                                        <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <div>
                                                            <h5 className="modal-title fontSize24 font-weight700 d-block w-100"
                                                                id="exampleModalLongTitle">East Los Angeles Community Day</h5>
                                                            <p className="publicTag font-weight500 fontSize14 mb-0">
                                                                Public School
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body rentalForm moreInfoBlock">
                                                        <div className="row">
                                                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                                <h3 className="mb-0 font-weight700 fontSize20">Information</h3>
                                                                <ul className="noMarginPad listStyleNone">
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Address</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">49th St
                                                                            Los Angeles, California, 90011</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            District</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">Los
                                                                            Angeles County Office of Education</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            County</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">Los
                                                                            Angeles County</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Phone</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">(323)
                                                                            262-2263</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Description</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">-</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Admission Office</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">N/A</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Grade Level</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">7-12
                                                                        </h5>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                                <h3 className="mb-0 font-weight700 fontSize20">Characteristics</h3>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Certificate Offered</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    -</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Degree Offered</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    -</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Locale</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    CitySmall13</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Type</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    Other/alternative school</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Charter</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    No</h5>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Magnet</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    11.59</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Total Teachers (FTE)</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    22</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Total Students</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    255</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Student/Teacher Ratio</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    N/A</h5>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pupleLineBtn responsive15 itemWebsite">
                                        <a href="" className="w-100 transition font-weight500">Load More</a>
                                    </div> */}
                                </div>

                                <div className="itemMobile responsive15">
                                    <ul className="noMarginPad listStyleNone agendtailList">
                                        <li>
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="SectionBlock responsive15 availabilitySection">
                                    <div className="d-flex align-items-center">
                                        <h2 className="colorBlue font-weight700">Check Availability</h2>
                                        <div className="ml-auto">
                                            <p className="purpleText font-weight700 fontSize18"><img
                                                src={require('../../assets/img/phoneColored.svg').default} />{propdata.phone}</p>
                                        </div>
                                    </div>

                                    <CheckAvailibilityForm />




                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 itemWebsite">
                            <div className="detailRightSec">
                                <div className="checkAvailability">
                                    <div className="d-flex align-items-center">
                                        <div className="dealTag font-weight700 brdrRadius4 d-flex align-items-center">
                                            <img src={require('../../assets/img/goodDeal.svg').default} />Good Deal
                                        </div>
                                        <div className="ml-auto">
                                            <h2 className="mb-0 font-weight700">${propdetails.min_rent}</h2>
                                        </div>
                                    </div>
                                    <ul className="noMarginPad listStyleNone floatLeftList clearfix detailList">
                                        <li className="secondaryColor">
                                            <span className="colorBlue">{propdetails.min_bed}</span> Bd
                                        </li>
                                        <li className="secondaryColor">
                                            <span className="colorBlue">{propdetails.min_bath}</span> Ba
                                        </li>
                                        <li className="secondaryColor ml-16">
                                            <span className="colorBlue">
                                                {/* {propfloor[0]} */}
                                            </span> Sq.ft
                                        </li>
                                        <li className="secondaryColo ml-16">
                                            <span className="colorBlue">Affordable Housing</span>
                                        </li>
                                    </ul>
                                    <div className="brdrLine mar-15"></div>
                                    <div className="sideFormBlock">


                                        <div className="SectionBlock responsive15 availabilitySection">
                                            <div className="d-flex align-items-center">
                                                <h2 className="colorBlue font-weight700 fontSize18">Check Availability</h2>
                                            </div>
                                            <div className="ml-auto">
                                                <p className="colorGreen font-weight700 fontSize18"><img
                                                    src={require('../../assets/img/callGreen.svg').default} className="twentyfourbytwentyfour" />{propdata.phone}</p>

                                            </div>
                                            <CheckAvailibilityForm propid={propdata.id_property} />



                                        </div>


                                    </div>
                                </div>





                                <IncomeLimitsAccordion propdetails={propdetails} />







                                <ManagementCompanyAccordion propmancom={propmancom} />





                                <AffordabilityCal />





                                <CityCountyQuickFacts propincome={propincome} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="brdrLine"></div>
                            <section className="secPad24 housingNearby resPonsivePad">
                                <div className="">

                                    <div className="row marginTop">
                                        <div className="col-lg-12 pl-0 pr-0">


                                            <PropertiesNearby propertynearby={propertynearby} />






                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                        <div className="col-md-8">
                            <div className="titleHeading botttomDetailSec localAdd">
                                <h3 className="fontSize24 font-weight700">Local Information for Anaheim</h3>
                                <p className="fontSize16 font-weight400 colorBlue">Anaheim is a city inhabited by over 300 thousand
                                    individuals, making it the most populous in Orange County, California. When it comes to the
                                    land area, however, Anaheim comes in second in the county, next to Irvine.</p>
                                <p className="fontSize16 font-weight400 colorBlue">The city of Anaheim is quite famous for its theme
                                    parks, convention center, sports teams, and other various tourist attractions. To most of
                                    the locals and tourists though, the vibrancy of the city and its many diverse cultures and
                                    traditions is what made them fall in love with Anaheim.</p>
                                <p className="fontSize16 font-weight400 colorBlue">On the other hand, the housing condition in this
                                    rather beautiful city is really not as difficult as it may seem. Granted that the state of
                                    California was one of those that were hit quite hard during the housing crisis and the
                                    recession, the housing opportunities in the city of Anaheim has actually gotten better since
                                    then.</p>
                                <h3 className="fontSize18 font-weight700">Affordable Housing in Anaheim, CA</h3>
                                <p className="fontSize16 font-weight400 colorBlue">In this city, the Anaheim Housing Authority (AHA)
                                    is the agency responsible for the proper administration of public housing programs, rental
                                    assistance, and other community development projects aimed at the revitalization of the
                                    city’s neighborhoods.</p>
                                <p className="fontSize16 font-weight400 colorBlue">There are many housing programs managed by the
                                    housing authority and administered to the low income families, senior citizens, and the
                                    physically and mentally challenged individuals of the city. There are affordable apartment
                                    deals for people looking to rent and the downpayment assistance program for families looking
                                    to buy their first home.</p>
                                <p className="fontSize16 font-weight400 colorBlue">There are different ways to receive housing
                                    assistance in the city of Anaheim. You just have to know what they are, and whether or not
                                    you are eligible for the low income housing tax credit and other housing programs they might
                                    have available.</p>
                                <h3 className="fontSize18 font-weight700">Rental Assistance in Anaheim, CA</h3>
                                <p className="fontSize16 font-weight400 colorBlue">The Section 8 Voucher Program, or Housing Choice
                                    Voucher (HCV), is the main rental assistance program provided by the housing authority to
                                    the residents of Anaheim. Funded by the US Department of Housing and Urban Development
                                    (HUD), the HCV promotes equal housing opportunities to the economically-challenged families
                                    who participate in the program.</p>
                                <p className="fontSize16 font-weight400 colorBlue">If you qualify for the HCV program, you can opt
                                    for decent rental housing deals in the private sector. This means that if you receive rental
                                    assistance from the agency through the Section 8 Voucher program, you won’t have to stay in
                                    public housing. Your family deserves better, so find your place now and get your loved ones
                                    a good place to live in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bottom-boxa" style={{ position: "fixed", bottom: 0, width: "100%", "z-index": 9999999, background: "#fff" }}>
                <div className="">
                    <div className="bottom-box">
                        <div className="checkAvailability">
                            <div className="d-flex align-items-center">
                                <div className="dealTag font-weight700 brdrRadius4 d-flex align-items-center">
                                    <img src={require('../../assets/img/goodDeal.svg').default} />Good Deal
                                </div>
                                <div className="ml-auto">
                                    <h2 className="mb-0 font-weight700" style={{ color: "#1BC47D" }}>$1,200</h2>
                                </div>
                            </div>
                            <ul className="noMarginPad listStyleNone floatLeftList clearfix detailList" style={{ "margin-top": "8px" }}>
                                <li className="secondaryColor">
                                    <span className="colorBlue">1</span> Bd
                                </li>
                                <li className="secondaryColor">
                                    <span className="colorBlue">1</span> Ba
                                </li>
                                <li className="secondaryColor ml-16">
                                    <span className="colorBlue">980</span> Sq.ft
                                </li>
                                <li className="secondaryColo ml-16">
                                    <span className="colorBlue">Affordable Housing</span>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center availSec responsive15 flex-wrap p-0" style={{ "margin-top": "0px" }}>
                                <div className="Resnoauto w-100">
                                    <a href="" style={{ "margin-top": "14px" }}
                                        className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center"
                                        data-toggle="modal" data-target="#exampleModal3">Check Availability</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>





                <Modal isOpen={isOpenQualify}
                    onRequestClose={toggleModalQualify} className="prerental">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center font-weight700"
                            id="exampleModalLabel">Pre-Rental Qualify</h5>
                        <button type="button" className="close"
                            aria-label="Close" onClick={toggleModalQualify}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">


                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Full Name <span
                                            className="labelMark">*</span></label>
                                        <input type="text" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Enter name"
                                            value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Address </label>
                                        <input type="text" className="form-control" id=""
                                            aria-describedby="emailHelp" placeholder="Address"
                                            value={formData.address} onChange={(e) => setformData({ ...formData, address: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="">City</label>
                                        <input type="text" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Enter city"
                                            value={formData.city} onChange={(e) => setformData({ ...formData, city: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label
                                                    for="exampleFormControlSelect1">State</label>
                                                <select className="form-control"
                                                    id="exampleFormControlSelect1"
                                                    value={formData.state} onChange={(e) => setformData({ ...formData, state: e.target.value })} required
                                                >
                                                    <option>aa</option>
                                                    <option>bb</option>
                                                    <option>sd</option>
                                                    <option>kj</option>
                                                    <option>re</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="">ZIP</label>
                                                <input type="number" className="form-control"
                                                    id="" aria-describedby="emailHelp"
                                                    placeholder="Enter email"
                                                    value={formData.zip} onChange={(e) => setformData({ ...formData, zip: e.target.value })} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="">Email Address <span
                                            className="labelMark">*</span></label>
                                        <input type="email" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            value={formData.emailid} onChange={(e) => setformData({ ...formData, emailid: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="">Phone Number <span
                                            className="labelMark">*</span></label>
                                        <input type="number" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Enter number"
                                            value={formData.phone} onChange={(e) => setformData({ ...formData, phone: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="">Move-In Date</label>
                                        <div className="posRel calnderIcon">
                                            <input type="date" className="form-control" id=""
                                                aria-describedby="emailHelp"
                                                placeholder="Move-In Date"
                                                value={formData.date} onChange={(e) => setformData({ ...formData, date: e.target.value })} required />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="">Occupants</label>
                                                <div className="posRel calnderIcon">
                                                    <input type="number"
                                                        className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="Number of occupants"
                                                        value={formData.occupants} onChange={(e) => setformData({ ...formData, occupants: e.target.value })} required />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="">Monthly Income</label>
                                                <input type="number" className="form-control"
                                                    id="" aria-describedby="emailHelp"
                                                    placeholder="Monthly Income"
                                                    value={formData.monthlyIncome} onChange={(e) => setformData({ ...formData, monthlyIncome: e.target.value })} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="radioSec">
                                        <div className="form-group mb-0">
                                            <label>Do you have a voucher?</label>
                                            <div className="d-flex align-items-center">






                                                <div>
                                                    <input type="radio" id="test1"
                                                        name="radio-group"
                                                        value="Yes"
                                                        checked={formData.voucher == "Yes"}
                                                        onChange={onValChange}
                                                    />
                                                    <label for="test1">Yes</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="test2"
                                                        name="radio-group"
                                                        value="No"
                                                        checked={formData.voucher == "No"}
                                                        onChange={onValChange}
                                                    />
                                                    <label for="test2">No</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="test3"
                                                        value="on waiting list"
                                                        name="radio-group"
                                                        checked={formData.voucher = "on waiting list"}
                                                        onChange={onValChange}
                                                    />
                                                    <label for="test3">On Waiting List</label>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="brdrLine marLftRgt"></div>
                            <div>
                                <h5 className="fontSize14 font-weight700">Disclaimer/Terms of
                                    Conditions:</h5>
                                <div className="form-group">
                                    <textarea className="form-control"
                                        id="exampleFormControlTextarea1" rows="3"
                                        value={formData.disclaimer} onChange={(e) => setformData({ ...formData, disclaimer: e.target.value })} required
                                        placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit"
                                    className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                            </div>
                        </form>

                    </div>


                </Modal>



                <Modal isOpen={isOpenImage}
                    onRequestClose={toggleModalImage} className="allphotos">



                    <div className="modal-header d-flex align-items-center posRel">

                        <h5 className="modal-title fontSize16 font-weight400 ml-22"
                            id="exampleModalLongTitle">
                            {propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;

                            {
                                propdetails.length === 0 ? "" : ` ${propdetails.min_bed} Br. ${propdetails.min_bath} Ba $${propdetails.min_rent}`
                            }
                            {propdata.phone}
                        </h5>
                        <div className="ml-auto d-flex align-items-center mr-5">
                            <a href="" className="modalCheck colorWhite">Check Availability</a>
                            <ul className="noMarginPad listStyleNone sideActionIcon">
                                <li className="brdrRadius4 itemWebsite">
                                    <img src={require('../../assets/img/redHeart.png').default} />
                                </li>
                                <li className="brdrRadius4 itemWebsite mr-0">
                                    <img src={require('../../assets/img/share.svg').default} />
                                </li>
                            </ul>
                        </div>

                        <button type="button" className="close closeModl"
                            aria-label="Close" onClick={toggleModalImage}>
                            <span aria-hidden="true" >&times;</span>
                        </button>

                    </div>

                    <div className="modal-body rentalForm availBodyBlock propertyDetlModal">
                        <div className="">
                            <div className="boxscroll4 scrollBodyPopUp">
                                <div className="wrapperScroll">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="modalPop">

                                                {propimages.map((data) => (
                                                    // <ImageSliderCarouselItem data={data} />
                                                    // {console.log()}
                                                    // console.log()
                                                    <div className="modalListImage">
                                                        <img src={`https://www.rentalhousingdeals.com/${data.photo}`} />
                                                    </div>
                                                ))}

                                                {/* <div className="modalListImage">
                                                    <img
                                                        src={require('../../assets/img/propertyDetailModalPhoto.png').default} />
                                                </div>
                                                <div className="modalListImage">
                                                    <img
                                                        src={require('../../assets/img/propertyDetailModalPhoto2.png').default} />
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="modalLeft">
                                                <img src={require('../../assets/img/modalSidePopup.png').default} />
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <div className="sideFormBlock">
                                                <div
                                                    className="SectionBlock responsive15 availabilitySection">
                                                    <div className="d-flex align-items-center">
                                                        <h2 className="colorBlue font-weight700 fontSize18">
                                                            Check Availability</h2>
                                                        <div className="ml-auto">
                                                            <p
                                                                className="purpleText font-weight700 fontSize18 itemWebsite">
                                                                <img
                                                                    src={require('../../assets/img/phoneColored.svg').default} />
                                                                {propdata.phone}
                                                            </p>

                                                        </div>
                                                    </div>

                                                    <CheckAvailibilityForm />


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>



                <Modal isOpen={isOpenAvailability}
                    onRequestClose={toggleModalAvailability} className="propertdetailmodal">

                    <div className="modal-header d-flex align-items-center">

                        <h5 className="modal-title fontSize16 font-weight400 ml-22"
                            id="exampleModalLongTitle">
                            {propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;

                            {
                                propdetails.length === 0 ? "" : ` ${propdetails.min_bed} Br. ${propdetails.min_bath} Ba $${propdetails.min_rent}`
                            }
                            {propdata.phone}
                        </h5>
                        <button type="button" className="close" onClick={toggleModalAvailability} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body rentalForm availBodyBlock">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="modalLeft">
                                    <div className="imageSecleftModal posRel">
                                        <img className="w-100" src={require('../../assets/img/modalLeft.png').default} />
                                        <div
                                            className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                            Affordable Housing</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="lefttitle">
                                            <h5 className="mb-0 fontSize18 font-weight700 colorBlue">
                                                {propdata.property_title}
                                            </h5>
                                            <p className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                {propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip}</p>
                                        </div>
                                        <div className="ml-auto">
                                            <img src={require('../../assets/img/goodDeal.svg').default} />
                                        </div>
                                    </div>
                                    <div className="sliderListing">
                                        <ul className="clearfix d-flex align-items-center">
                                            <li className="fontSize17"><b>{propdetails.min_bed}</b>Bd</li>
                                            <li className="fontSize17"><b>{propdetails.min_bath}</b>Ba</li>
                                            <li className="fontSize17"><b>

                                                {
                                                    propfloor.length == 0 ? <></> :

                                                        propfloor[0].square_feet_from

                                                }

                                            </b>Sq.Ft</li>
                                            <li className="ml-auto boldTag greenText fontSize24">${propdetails.min_rent}</li>
                                        </ul>
                                    </div>
                                    <p className="para fontSize14 font-weight400 secondaryColor">
                                        Blessed
                                        Rock Apartment is an affordable apartment community for 62 years
                                        of age or older in El Monte, CA.We currently have a waiting
                                        list. Please call today to find out how to get an application
                                        for this community or to verify income requirements
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="sideFormBlock">
                                    <div className="SectionBlock responsive15 availabilitySection">
                                        <div className="d-flex align-items-center">
                                            <h2 className="colorBlue font-weight700 fontSize18">Check
                                                Availability</h2>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="purpleText font-weight700 fontSize18"><img
                                                src={require('../../assets/img/phoneColored.svg').default} />{propdata.phone}</p>
                                        </div>

                                        <CheckAvailibilityForm />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>










            </section>


        </>
    )
}

export default PropertyDetailPage
