import React from 'react'
import { Link } from 'react-router-dom'

export const NearbyAgencyListItem = ({ data }) => {

    // console.log(data);
    return (

        <>
            <div className="media">
                <Link to={`/agencyDetail?haid=${data.ha_id}`}>
                    {
                        data.image == [] || data.image == null || data.image == '' ?
                            <img className="w-46 h-46" src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg`} alt="Image" />
                            :
                            <img className="w-46 h-46" src={`https://www.rentalhousingdeals.com/${data.image[0].path}/${data.image[0].filename}`} alt="Image" />
                    }
                </Link>
                <div className="media-body">
                    <div className="d-lg-flex align-items-top">
                        <div className="headingSec">
                            <Link to={`/agencyDetail?haid=${data.ha_id}`}>
                                <h5 className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                    {data.name}
                                </h5>
                            </Link>


                            <p className="secondaryColor fontSize14">
                                {data.city}, {data.state}</p>
                        </div>




                        <div className="ml-auto">
                            {
                                data.is_section_8_wating_list == 0 ?
                                    <span className="statusTag fontSize14 font-weight500 closed">
                                        Closed
                                    </span>
                                    :
                                    <span className="statusTag fontSize14 font-weight500 open">
                                        Open
                                    </span>
                            }

                            {/* <span
                                className="statusTag fontSize12 font-weight500 openingSoon">
                                Opening Soon
                            </span> */}
                        </div>



                    </div>


                </div>
            </div>
        </>
    )
}
