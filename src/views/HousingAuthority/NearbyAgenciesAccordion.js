import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Scrollbar } from "react-scrollbars-custom";
import { NearbyAgencyListItem } from './NearbyAgencyListItem'

export const NearbyAgenciesAccordion = ({ data }) => {
    // console.log(data);
    return (
        <>
            {
                data == null || data == [] || data.length == 0 ?
                    null :
                    <Accordion defaultActiveKey="0" className="accordionBoxInfo losAngeles">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <div className="card-header cardHeaderBorder0" id="headingOne">
                                    <h5 className="mb-0 d-flex align-items-center">
                                        <button className="btn btn-link font-weight700 colorBlue rotate"
                                            data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Nearby Agencies
                                        </button>
                                        <span className="ml-auto" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            <img src={require('../../assets/img/upArrow.png').default} />
                                        </span>
                                    </h5>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='gradientBoxMain'>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordion">

                                    <div className="nearbyAgencyBlock boxscroll4">
                                        <div className="wrapperScroll">
                                            <ul className="noMarginPad listStyleNone">

                                                {
                                                    data.map((data) => (
                                                        <li>
                                                            <NearbyAgencyListItem data={data} />
                                                        </li>
                                                    ))
                                                }

                                                {/* <li>
                                                    <div class="media">
                                                        <img class="" src={require('../../assets/img/nearbyAgency3.png').default}
                                                            alt="Image" />
                                                        <div class="media-body">
                                                            <div class="d-flex align-items-top">
                                                                <div class="headingSec">
                                                                    <h5
                                                                        class="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                        Santa Ana Housing Authority</h5>
                                                                    <p class="mb-0 secondaryColor fontSize14">
                                                                        Garden Grove, CA</p>
                                                                </div>
                                                                <div class="ml-auto">
                                                                    <span
                                                                        class="statusTag fontSize12 font-weight500 open">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li>
                                                    <div class="media">
                                                        <img class="" src={require('../../assets/img/nearbyAgency1.png').default}
                                                            alt="Image" />
                                                        <div class="media-body">
                                                            <div class="d-flex align-items-top">
                                                                <div class="headingSec">
                                                                    <h5
                                                                        class="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                        Garden Grove Housing Authority</h5>
                                                                    <p class="mb-0 secondaryColor fontSize14">
                                                                        Garden Grove, CA</p>
                                                                </div>
                                                                <div class="ml-auto">
                                                                    <span
                                                                        class="statusTag fontSize12 font-weight500 closed">
                                                                        Closed
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li>
                                                    <div class="media">
                                                        <img class="" src={require('../../assets/img/nearbyAgency2.png').default}
                                                            alt="Image" />
                                                        <div class="media-body">
                                                            <div class="d-flex align-items-top">
                                                                <div class="headingSec">
                                                                    <h5
                                                                        class="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                        Orange Housing Authority</h5>
                                                                    <p class="mb-0 secondaryColor fontSize14">
                                                                        Garden Grove, CA</p>
                                                                </div>
                                                                <div class="ml-auto">
                                                                    <span
                                                                        class="statusTag fontSize12 font-weight500 openingSoon">
                                                                        Opening Soon
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li> */}

                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="gradientBox"></div>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
            }








        </>

    )
}
