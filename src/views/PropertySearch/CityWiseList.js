import React from 'react'
import { Link } from 'react-router-dom'

const CityWiseList = ({ searchresultdata }) => {

    return (
        <div className="listingSection adjustment1 mapListingSection">
            <div className="topTitleMapping">
                <h2>Zoom in on the map to see more</h2>
                <p className="mb-0">Or, choose a city below to see listings that match your search.</p>
            </div>

            <div className="">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 coll-xs-6">

                        <ul className="noMarginPad listStyleNone housingListt dataSearchMapList">
                            {
                                searchresultdata.slice(0, searchresultdata.length / 2 + 1).map((data) => (
                                    <li>
                                            <Link to={`/agencyState?city=&state=AL`} className="listSearchAnchor transition">
                                                <h5 className='mb-0'>{data.city}</h5>
                                                <p className='mb-0'>{data.listingcount} listings</p>
                                                <span className="rightArrowAction" ><img src={require('../../assets/img/rightArrowWhite.svg').default} /></span>
                                            </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt dataSearchMapList">
                            {
                                searchresultdata.slice(searchresultdata.length / 2 + 1).map((data) => (
                                    <li>
                                            <Link to={`/agencyState?city=&state=AL`} className="listSearchAnchor transition">
                                                <h5 className='mb-0'>{data.city}</h5>
                                                <p className='mb-0'>{data.listingcount} listings</p>
                                                <span className="rightArrowAction"><img src={require('../../assets/img/rightArrowWhite.svg').default} /></span>
                                            </Link>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityWiseList