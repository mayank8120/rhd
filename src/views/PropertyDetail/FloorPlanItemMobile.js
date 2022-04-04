import React, { useState } from 'react'
import Modal from "react-modal";
import { decimalRoundOff } from '../../containers/functions';

const FloorPlanItemMobile = ({ data }) => {


    const [isOpenFloor, setIsOpenFloor] = useState(false);
    function toggleModalFloor() {
        setIsOpenFloor(!isOpenFloor);
    }


    return (
        <>
            {
                data == undefined || data == null || data == [] || data == '' ?
                    null
                    :
                    <>



                        <li class="d-flex align-items-center justify-content-between floorPlanListing">
                            <div class="imageLeft floorplanHead d-flex align-items-center">





                                {
                                    data.floor_plan_photo == '' || data.floor_plan_photo == null ?
                                        <>

                                            <img src={require('../../assets/img/floorplanGrey.svg').default} className="twentyfourbytwentyfour" />


                                        </>
                                        :
                                        <>
                                            <img
                                                className="" onClick={() => {
                                                    toggleModalFloor();
                                                }
                                                }

                                                src={require('../../assets/img/floorplan.svg').default} />


                                            <Modal isOpen={isOpenFloor}
                                                onRequestClose={toggleModalFloor} className="propertdetailmodal">
                                                <div className="modal-header d-flex align-items-center">


                                                    <button type="button" className="close" onClick={toggleModalFloor} aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body rentalForm availBodyBlock">
                                                    {
                                                        data.floor_plan_photo == '' || data.floor_plan_photo == null ?
                                                            <></>
                                                            :
                                                            <img className=' w-100' src={`https://www.rentalhousingdeals.com/${data.floor_plan_photo}`} alt='alt' />
                                                    }

                                                </div>

                                            </Modal>
                                        </>
                                }

                                {/* <img src="assets/img/floorplan.png" /> */}













                                <div class="headingList">
                                    <h4 class="font-weight500 colorBlue mb-0">{data.floor_plan_name}</h4>
                                    <ul class="noMarginPad listStyleNone floatLeftList itemMobile">
                                        <li class="secondaryColor">

                                            {
                                                data.beds == 0 || data.beds == '' ?
                                                    (<span className="colorBlue">N/A Bd</span>)
                                                    :

                                                    <>
                                                        <span className="colorBlue">{data.beds}</span> <span className='colorBlue'> {data.beds == 'Studio' ? null : 'Bd'}</span>
                                                    </>
                                            }

                                        </li>
                                        <li class="secondaryColor ml-16">
                                            {
                                                data.baths == 0 || data.baths == '' ?
                                                    (<span className="colorBlue">N/A Ba</span>)
                                                    :
                                                    <span className="colorBlue">{decimalRoundOff(data.baths)} Ba</span>
                                            }
                                        </li>
                                        <li class="secondaryColor ml-24">
                                            {
                                                data.square_feet_to == 0 ?
                                                    (<span className="colorBlue">N/A Sq.ft</span>)
                                                    :
                                                    <><span className="colorBlue">{data.square_feet_to}</span><span className='colorBlue'> Sq.ft</span>  </>
                                            }
                                            {/* <span class="colorBlue">880</span> Sq.ft */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ml-auto formHead">


                                <h3 class="colorBlue">
                                    {data.rent_from == 0 || data.rent_from == '' ?
                                        'N/A'
                                        :
                                        ` $${data.rent_from}`
                                    }
                                </h3>
                            </div>
                        </li>










                    </>



            }

        </>
    )
}

export default FloorPlanItemMobile