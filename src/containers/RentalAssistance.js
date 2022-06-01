import React from 'react'
import { Link } from 'react-router-dom'

const RentalAssistance = () => {
    return (
        <>
            <div className="housingAuthority brdrRadius4 itemWebsite">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="fontSize18 colorBlue">Rental Assistance Options</h2>
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <a href="/incomeLimits">Income Limits</a>
                            </li>
                            <li>
                                <a href="publicHousing">Public Housing (PH)</a>
                            </li>
                            <li>
                                <a href="/housingchoicevoucher">Housing Choice Voucher (HCV)</a>
                            </li>
                            <li>
                                <a href="/lowincomehpusingchoice">Low Income Housing Tax Credit (LIHTC)</a>
                            </li>
                            <li>
                                <a href="/ruraldevelopmentrentalassistance">Rural Development (RD) / Rental Assistance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fontSize18 colorBlue  btttm">Rental Assistance Tools</h2>
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <a href="">Income Calculator</a>
                            </li>
                            <li>
                                <a href="/enterpriseincomeverification">Enterprise Income Verification (EIV)</a>
                            </li>
                            <li>
                                <a href="/agoodplacetolive">“A Good Place to Live” Brochure</a>
                            </li>
                            <li>
                                <a href="/paymentstandards">Payment Standards</a>
                            </li>
                            <li>
                                <a href="/inspections">Inspections</a>
                            </li>
                            <li>
                                <a href="/fairmarketrents">Fair Market Rents</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>






            
            <div className="housingAuthority brdrRadius4 itemWebsite">
                <h2 className="fontSize18 colorBlue">Find Housing Authorities in Every State in the U.S.</h2>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/agencyState?city=&state=AL`}>Alaska</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=AL`}>Alabama</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=AZ`}>Arizona</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=CA`}>California</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=CO`}>Colorado</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=CT`}>Connecticut</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=DE`}>Delaware</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=FL`}>Florida</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=GA`}>Georgia</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=HI`}>Hawaii</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=ID`}>Idaho</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=IL`}>Illinois</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/agencyState?city=&state=IN`}>Indiana</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=IA`}>Iowa</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=KS`}>Kansas</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=KY`}>Kentucky</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=LA`}>Louisiana</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=ME`}>Maine</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=MD`}>Maryland</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=MA`}>Massachusetts</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=MI`}>Michigan</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=MN`}>Minnesota</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=MS`}>Mississippi</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=MO`}>Missouri</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/agencyState?city=&state=MT`}>Montana</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=NE`}>Nebraska</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=NV`}>Nevada</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=NJ`}>New Jersey</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=NM`}>New Mexico</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=NY`}>New York</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=NC`}>North Carolina</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=ND`}>North Dakota</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=OH`}>Ohio</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=OK`}>Oklahoma</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=OR`}>Oregon</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=PA`}>Pennsylvania</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/agencyState?city=&state=RI`}>Rhode Island</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=SC`}>South Carolina</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=SD`}>South Dakota</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=TN`}>Tennessee</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=TX`}>Texas</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=UT`}>Utah</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=VT`}>Vermont</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=VA`}>Virginia</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=WA`}>Washington</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=WV`}>West Virginia</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=WI`}>Wisconsin</Link>
                            </li>
                            <li>
                                <Link to={`/agencyState?city=&state=WY`}>Wyoming</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentalAssistance