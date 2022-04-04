import React from 'react'

const FloorPlanGeneralItem = ({ data }) => {
    return (
        <>
            {data == undefined || data == null || data == [] || data == '' ? null :
                <li className="d-flex align-items-center justify-content-between floorPlanListing">
                    <div className="imageLeft floorplanHead d-flex align-items-center">
                        <img src={require('../../assets/img/floorplan2.png').default} />
                        <div className="headingList">
                            <h4 className="font-weight500 colorBlue mb-0">{data.floor_plan_name}</h4>
                            <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                <li className="secondaryColor">
                                    <span className="colorBlue">{data.beds}</span> {data.beds == 'Studio' ? null : 'Bd'}
                                </li>
                                <li className="secondaryColor ml-16">
                                    <span className="colorBlue">{data.baths}</span> Ba
                                </li>
                                <li className="secondaryColor ml-24">
                                    {/* {data.square_feet_to !== '' || data.square_feet_to !== undefined || data.square_feet_to !== null ?
                                        data.square_feet_to :
                                        'N/A'
                                    } */}


                                    {/* {
                                        data.square_feet_to == undefined || data.square_feet_from == undefined ?
                                            null
                                            :

                                            (data.square_feet_to == data.square_feet_from ?
                                                <>
                                                    <span className="colorBlue">{data.square_feet_from}</span> Sq.ft
                                                </>
                                                :
                                                (data.square_feet_from == 0 || data.square_feet_from == null) && (data.square_feet_to == 0 || square_feet_to == null) ?
                                                    <span className="colorBlue">N/A</span>
                                                    :
                                                    data.square_feet_from == 0 || data.square_feet_from == null ?
                                                        <>
                                                            <span className="colorBlue">{data.square_feet_to}</span> Sq.ft
                                                        </>
                                                        :
                                                        <>
                                                            <span className="colorBlue">{data.square_feet_from}</span> Sq.ft
                                                        </>
                                            )
                                    } */}

                                    {/* <span className="colorBlue">880</span> Sq.ft */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemWebsite w-100">
                        <div className="d-flex justify-content-center flex1">
                            <ul className="noMarginPad listStyleNone floatLeftList">
                                <li className="secondaryColor">
                                    <span className="colorBlue">{data.beds}</span> {data.beds == 'Studio' ? null : 'Bedroom'}
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
                    <div className="ml-auto formHead itemWebsite">
                        <a href="" className="checkAvailBlockBtn fontSize16 font-weight700">Checksfd
                            Availability</a>
                    </div>
                </li>
            }
        </>
    )
}

export default FloorPlanGeneralItem
