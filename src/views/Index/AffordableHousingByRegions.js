import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
const AffordableHousingByRegions = ({ page }) => {
    // console.log(page);
    const [key, setKey] = useState("home");
    return (
        <section className="secPad featureSection">
            <div className="container">
                <div className="sectionTitle">
                    <h2 className="font-weight700 colorBlue">
                        {
                            page == 2 ?
                                "Affordable Senior Housing by Regions"
                                :
                                "Affordable Housing by Regions"
                        }
                    </h2>
                </div>
                <div className="row marginTop2">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div>
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="home"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3 sideWhiteGradient"  >
                                <Tab eventKey="home" title="East Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">

                                                    {/* /propertySearch?${page==2?'feature=senior':null}city=
                                                /propertySearch?${page==2?'feature=senior&':''}${page==3?'feature=section&':''}city= */}



                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=ME`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Maine</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=NH`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New Hampshire</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=VT`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Vermont</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=MA`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Massachusetts</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=NY`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New York</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=RI`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Rhode Island</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=CT`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Connecticut</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=NJ`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New Jersey</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=DE`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Delaware</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=MD`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Maryland</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=DC`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Washington DC</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Midwest Region" title="Midwest Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=ND`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">North Dakota</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=SD`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">South Dakota</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=MN`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Minnesota</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=IA`} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Iowa</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=KS`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Kansas</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=MO`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Missouri</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=WI`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Wisconsin</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=IL`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Illinois</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=IN`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Indiana</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=OH`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Ohio</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=MI`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Michigan</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                </ul>
                                            </div>
                                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition itemMobile">
                                                    Load More
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </Tab>

                                <Tab eventKey="South Region" title="South Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=AR`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Arkansas</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=LA`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Louisiana</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=MS`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Mississippi</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=TN`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Tennessee</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=KY`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Kentucky</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=AL`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Alabama</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=GA`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Georgia</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=FL`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Florida</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=SD`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">South Carolina</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=NC`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">North Carolina</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=VA`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Virginia</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=WV`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">West Virginia</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                </ul>
                                            </div>
                                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition itemMobile">
                                                    Load More
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Southwest Region" title="Southwest Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=AZ`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Arizona</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=NM`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New Mexico</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=TX`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Texas</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=OK`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Oklahoma</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">

                                                </ul>
                                            </div>
                                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition itemMobile">
                                                    Load More
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="West Region" title="West Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=WA`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Washington</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=OR`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Oregon</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=NV`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Nevada</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=AK`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Alaska</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=ID`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Idaho</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=MT`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Montana</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=UT`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Utah</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=HI`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Hawaii</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=WY`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Wyoming</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=CA`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">California</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>
                                                    <Link to={`/propertySearch?${page == 2 ? 'feature=senior&' : ''}${page == 3 ? 'feature=section&' : ''}city=&state=CO`}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Colorado</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </Link>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AffordableHousingByRegions;
