import React, { useState } from 'react'

const SchoolItem = ({ schoolnearby }) => {

    const [loadmore, setloadmore] = useState(false);
    const handleclick = () => {
        setloadmore(!loadmore)
    }
    const five=schoolnearby.slice(0, 5);
    const all=schoolnearby;

    // console.log(schoolnearby);

    return (
        <>
            <div className="itemWebsite">
                <table className="table agencyDetailtable">
                    <thead>
                        <tr>
                            <th scope="col" style={{"width":"250px"}}>Name</th>
                            <th scope="col">Grades</th>
                            <th scope="col">Urban Center</th>
                            <th scope="col">City, State</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadmore == false ?
                                (
                                    five.map((data) => (
                                        <tr>
                                            <th scope="row">
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                            {data.inst_name}
                                                        </h5>
                                                        <p className="mb-0 fontSize14 font-weight500 secondaryColor">
                                                            {data.phone}
                                                        </p>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>{data.grade_level == "" || data.grade_level == null ? "N/A" : data.grade_level}</td>
                                            <td>{data.institute_info == "" || data.institute_info == null ? "N/A" : data.institute_info}</td>
                                            <td>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                            {data.inst_city}, {data.inst_state_code}</h5>
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
                                    ))
                                )

                                :

                                (
                                    all.map((data) => (
                                        <tr>
                                            <th scope="row">
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                            {data.inst_name}
                                                        </h5>
                                                        <p className="mb-0 fontSize14 font-weight500 secondaryColor">
                                                            {data.phone}
                                                        </p>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>{data.grade_level == "" || data.grade_level == null ? "N/A" : data.grade_level}</td>
                                            <td>{data.institute_info == "" || data.institute_info == null ? "N/A" : data.institute_info}</td>
                                            <td>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                            {data.inst_city}, {data.inst_state_code}</h5>
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
                                    ))
                                )

                        }

                        {/* <tr>
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
                        </tr> */}
                        {/* <tr>
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
                        </tr> */}
                    </tbody>
                </table>
                {/* //    modal */}
                {/* <div className="modal fade rentalModal availabilityModal" id="exampleModalMoreInfo"
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
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                </div> */}
            </div>
            <div className="pupleLineBtn responsive15 itemWebsite">
                <button href="" className="w-100 transition font-weight500" onClick={handleclick}>Load More</button>
            </div>
        </>
    )
}

export default SchoolItem
