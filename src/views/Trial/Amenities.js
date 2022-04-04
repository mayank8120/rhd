import React, { useState } from 'react'

const Amenities = ({ propamenities }) => {

    const [loadmore, setloadmore] = useState(false);
    const handleclick = () => {
        setloadmore(!loadmore)
    }


    const unit = propamenities.unit_amenities;
    const prop = propamenities.property_amenities;
    const sixunit = unit.slice(0, 6);
    const sixprop = prop.slice(0, 6);
    return (

        <>
            <div className="amenitiesListing respo nsive15">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 itemWebsite">
                        <div className="">
                            <h3 className="font-weight700 colorBlue">Unit Amenities</h3>
                            <ul className="noMarginPad listStyleNone detailListing">




                                {
                                    loadmore == false ? (sixunit.map((data) => (

                                        <li className="d-flex align-items-center">
                                            <span className="brdrRadius4">
                                                <img src={require('../../assets/img/amenities1.png').default} />
                                            </span>
                                            <p className="mb-0">{data.name}</p>
                                        </li>

                                    ))) :
                                        (unit.map((data) => (

                                            <li className="d-flex align-items-center">
                                                <span className="brdrRadius4">
                                                    <img src={require('../../assets/img/amenities1.png').default} />
                                                </span>
                                                <p className="mb-0">{data.name}</p>
                                            </li>

                                        )))
                                }



                                {/* {unit.map((data) => (

                                    <li className="d-flex align-items-center">
                                        <span className="brdrRadius4">
                                            <img src={require('../../assets/img/amenities1.png').default} />
                                        </span>
                                        <p className="mb-0">{data.name}</p>
                                    </li>

                                ))} */}


                                {/* <li className="d-flex align-items-center">
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
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 itemWebsite">
                        <div>
                            <h3 className="font-weight700 colorBlue">Property Amenities</h3>
                            <ul className="noMarginPad listStyleNone detailListing">



                                {loadmore == false ? (sixprop.map((data) => (
                                    <>

                                        <li className="d-flex align-items-center">
                                            <span className="brdrRadius4">
                                                <img src={require('../../assets/img/property1.png').default} />
                                            </span>
                                            <p className="mb-0">{data.name}</p>
                                        </li>
                                    </>
                                )))
                                    :
                                    (
                                        prop.map((data) => (
                                            <>

                                                <li className="d-flex align-items-center">
                                                    <span className="brdrRadius4">
                                                        <img src={require('../../assets/img/property1.png').default} />
                                                    </span>
                                                    <p className="mb-0">{data.name}</p>
                                                </li>
                                            </>
                                        ))
                                    )
                                }



                                {/* {
                                    prop.map((data) => (
                                        <>

                                            <li className="d-flex align-items-center">
                                                <span className="brdrRadius4">
                                                    <img src={require('../../assets/img/property1.png').default} />
                                                </span>
                                                <p className="mb-0">{data.name}</p>
                                            </li>
                                        </>
                                    ))
                                } */}


                                {/* <li className="d-flex align-items-center">
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
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 itemMobile">
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

                            {
                                unit.length < 7 && prop.length < 7 ? null :
                                    <button href="" className="w-100 transition font-weight500" onClick={handleclick}>

                                        {loadmore == false ? 'Show all ' : 'Show less '}

                                        {loadmore == false ? unit.length + prop.length : null} amenities
                                    </button>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Amenities
