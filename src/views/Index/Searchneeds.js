import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



// import '../../assets/css/bootstrap.min.css'
// import '../../assets/css/fontawesome.min.css'
// import '../../assets/css/style.css'
// import '../../assets/css/responsive.css'

// /propertySearch/" + cityname + "/" + statename

const Searchneeds = ({ latlngdata }) => {
    const [city, setcity] = useState("");
    const [statename, setstatename] = useState("");

    useEffect(() => {
        if (latlngdata == undefined || latlngdata == null) {

        } else {
            setcity(latlngdata.city);
            setstatename(latlngdata.region);
        }
    }, [latlngdata]);

    return (
        <>
            <section className="secPad searchNeed">
                <div className="container">
                    <div className="sectionTitle">
                        <h2 className="font-weight700 colorBlue">Search for homes that suit your needs</h2>
                    </div>
                    <div className="row marginTop searchHomeSlider">
                        <div className="col-md-4 col-sm-6">
                            <div className="popularCitySliderText">

                                <img src={require('../../assets/img/searchHome1.png').default} />

                                <h3 className="font-weight700">Rental Deals</h3>
                                {/* <Link */}
                                <Link to={`/propertySearch/${city}/${statename}`} className="d-flex align-items-center font-weight700">
                                    View More <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="popularCitySliderText">
                                <img src={require('../../assets/img/searchHome2.png').default} />
                                <h3 className="font-weight700">Senior Housing</h3>
                                <Link to={`/propertySearch/${city}/${statename}&ft=senior`} className="d-flex align-items-center font-weight700">
                                    View More <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="popularCitySliderText">
                                <img src={require('../../assets/img/searchHome3.png').default} />
                                <h3 className="font-weight700">Section 8 Housing</h3>
                                <Link to={`/propertySearch/${city}/${statename}&ft=section`} className="d-flex align-items-center font-weight700">
                                    View More <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>

            



        </>
    )
}
export default Searchneeds