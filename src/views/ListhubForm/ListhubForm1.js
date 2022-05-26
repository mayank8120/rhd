import React, { useState } from 'react'
// import Listhub from '../Listhub/Listhub'

import { Form, Button, DropdownButton, Dropdown, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
// import { SliderThumbnail } from '../../containers/SliderThumbnail';

const ListhubForm = () => {


    const [searchdata, setSearchdata] = useState({ searchstring: '', pass: '', dropdown: '', radio: '', check: '', check1: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        console.log(searchdata);
        // setSearchdata({ searchstring: '' });
    }
    // console.log(searchdata);


    // const [value, setValue] = useState('');
    // const handleSelect = (e) => {
    //     console.log(e);
    //     setValue(e)
    // }

    const [value, setValue] = React.useState('');
    const handleChange = (val) => {
        setValue(val);
    }



    const [activelinkontab, setactivelinkontab] = useState(false);
    const [nonactivelinkontab, setnonactivelinkontab] = useState(true);
    const nonactivestyle = {
        color: 'red'
    }
    const activestyle = {
        color: 'blue'
    }
    const toggleshow = () => {
        if (activelinkontab === false) {
            setactivelinkontab(true)
        } else {
            setactivelinkontab(false)
        }
    }



    return (
        <>
            <div className="breadcrumbs">
                <div className="container3">
                    <p className="font-size32 font-weight700 colorBlue mb-0">Add New Listing</p>
                    <p className="font-Size14 font-weght500 secondaryColor mt-2 mb-0 pb-24">Fields with <span className="colorred"> *
                    </span>are required</p>
                </div>
            </div>

            <Form onSubmit={handleSubmit}>
                <section className="tabs-section text-white secPad">
                    <div className="container3">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-left">
                                <div className="as">
                                    <p className="font-size16 font-weight500 lightblack">ListHub Property Information</p>
                                    <ul className="nav  flex-column mb-3">
                                        <li className="nav-item">
                                            <a className="nav-link active show" href="#tab-1">Listing Information </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-2">Property Information </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-3">Contact Information </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-4">Room Information </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-5">Lease and Additional Information
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-6">Photos</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-7">MLS Listing </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 tab-right">
                                <div className="tab-content">
                                    <div className="tab-pane active show ml-17" id="tab-1">
                                        <div className="listing-tab">
                                            <h3 className=" font-size32 font-weight500 colorBlue mb-0">ListHub Property Information</h3>
                                            <p className="fontSize24 mt-24 font-weight500 colorBlue">Listing Information (Property ID
                                                123456)
                                            </p>
                                            <div className="row listing-informations align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Property Type <span
                                                        className="colorred">*</span></p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Premium Listing"}>Premium Listing</ToggleButton>
                                                            <ToggleButton value={"General Listing"}>General Listing</ToggleButton>
                                                            <ToggleButton value={"Listhub"}>Listhub</ToggleButton>

                                                        </ToggleButtonGroup>
                                                        {/* <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                                id="inlineRadio1" value="option1" />
                                                            <label className="form-check-label font-size16 font-weight400 colorBlue"
                                                                for="inlineRadio1">Premium Listing </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                                id="inlineRadio2" value="option2" />
                                                            <label className="form-check-label font-size16 font-weight400 colorBlue"
                                                                for="inlineRadio2">General Listing </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                                id="inlineRadio3" value="option3" />
                                                            <label className="form-check-label font-size16 font-weight400 colorBlue"
                                                                for="inlineRadio3">Listhub </label>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-24">
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Managed by <span className="colorred">*</span></label>
                                                        {/* <select name="stateid" className="selectpicker form-control">
                                                            <option value="1"> Property </option>
                                                            <option value="1">Insert  </option>
                                                            <option value="1">  Management</option>
                                                        </select> */}
                                                        <DropdownButton
                                                            alignRight
                                                            title="Insert Property Management"
                                                            id="dropdown-menu-align-right"
                                                            onSelect={(e) => {
                                                                setSearchdata({ ...searchdata, dropdown: e });
                                                            }}>
                                                            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                        </DropdownButton>
                                                    </div>


                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label
                                                            className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Regional Manager <span
                                                                className="colorred">*</span></label>
                                                        <input type="text" className="w-100" placeholder="Regional Manager" />

                                                    </div>


                                                </div>

                                            </div>
                                            <div className="row listing-informations mt-2 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Listing Status<span
                                                        className="colorred">*</span></p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">

                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Active"}>Active</ToggleButton>
                                                            <ToggleButton value={"Pending"}>Pending</ToggleButton>
                                                            <ToggleButton value={"Denied"}>Denied</ToggleButton>

                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                                id="inlineRadio1" value="option1" />
                                                            <label className="form-check-label font-size16 font-weight400 colorBlue"
                                                                for="inlineRadio1">Active</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                                id="inlineRadio2" value="option2" />
                                                            <label className="form-check-label font-size16 font-weight400 colorBlue"
                                                                for="inlineRadio2">Pending </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                                id="inlineRadio3" value="option3" />
                                                            <label className="form-check-label font-size16 font-weight400 colorBlue"
                                                                for="inlineRadio3">Denied </label>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="property-tab mt-40" id="tab-2">
                                            <h3 className="fontSize24 font-weight500 colorBlue mb-3">Property Information</h3>
                                            <div className="row">
                                                <div className="col-lg-8 pr-0">
                                                    <div className="form-group">
                                                        <label
                                                            className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Property Name</label>
                                                        <input type="text" className="w-100" placeholder="Insert Property Name" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group ">
                                                        <label
                                                            className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight700 lablecolor"
                                                            for="formGroupInput">Number of Unit</label>
                                                        <input type="text" className="w100" value="40" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label
                                                            className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Property Address<span
                                                                className="colorred">*</span></label>
                                                        <input type="text" className="w562" value="405 Great Rd #16, Acton, MA 01720" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">City<span className="colorred">*</span></label>
                                                        <input type="text" className="w273" value="Anaheim" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-2 pl-0 pr-0">
                                                    <div className="form-group">
                                                        <label className=" fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">State <span className="colorred">*</span></label>
                                                        {/* <select name="stateid" className="selectpicker form-control w80">

                                                            <option value="1">CA</option>
                                                        </select> */}
                                                        <DropdownButton
                                                            alignRight
                                                            title="CA"
                                                            id="dropdown-menu-align-right"
                                                            onSelect={(e) => {
                                                                setSearchdata({ ...searchdata, dropdown: e });
                                                            }}>
                                                            <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                        </DropdownButton>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pl-0">
                                                    <div className="form-group ">
                                                        <label className=" fill-email pull-left fontSize14 font-weight700 lablecolor"
                                                            for="formGroupInput">Postal Code<span className="colorred">*</span></label>
                                                        <input type="text" className="w177" value="92805" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form-group mb-0">
                                                        <label
                                                            className="pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">Latitude<span
                                                                className="colorGreen fontSize14 font-weight700 ml-auto pull-right">Auto-Populate</span></label>
                                                        <input type="text" className="w273" value="45.312361238" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-6 pl-0 pr-0">
                                                    <div className="form-group mb-0">
                                                        <label className="pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Longitude</label>
                                                        <input type="text" className="w273" value="-118.312361238" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listhub-tab mt-24 bgskyblue ">
                                            <h3 className="fontSize18 font-weight500 colorBlue mb-3">ListHub Listing and Property
                                                Information
                                            </h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">MLS ID
                                                                (ListHub)
                                                            </label>
                                                            <input type="text" className="w-100" placeholder="Insert MLS ID" />

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Property Mgmt
                                                                Co Name (ListHub)</label>
                                                            <input type="text" className="w-100"
                                                                placeholder="Insert Property Mgmt Co Name" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">List Type </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">

                                                                <option value="1">Exclusive Agency to Sell/Lease
                                                                </option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Exclusive Agency to Sell/Lease"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-2 pl-0 pr-0">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="inlineFormInputGroup">Username</label>
                                                            <div className="input-group mb-2">
                                                                <div className="input-group-prepend">
                                                                    <div className="input-group-text">$</div>
                                                                </div>
                                                                <input type="text" className="w66" id="inlineFormInputGroup"
                                                                    value="1,399" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 ">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">List Date
                                                            </label>
                                                            <input type="date" className="w-100" placeholder="List Date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Expiration
                                                                Date</label>
                                                            <input type="date" className="w-100" placeholder="Exp. Date" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Property Class </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">

                                                                <option value="1">Multifamily
                                                                </option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Multifamily"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Subdivision
                                                            </label>
                                                            <input type="text" className="w-100" placeholder="N/A" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Legal
                                                                Description

                                                            </label>
                                                            <input type="text" className="w-100" placeholder="N/A" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Building
                                                                Name</label>
                                                            <input type="text" className="w-100" placeholder="Building Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Tax ID</label>
                                                            <input type="text" className="w-100" placeholder="N/A" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">School
                                                                District</label>
                                                            <input type="text" className="w-100" placeholder="N/A" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Rental Type</label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Apartment</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Apartment"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 pr-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">New Constuction</label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">No</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="No"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                {/* <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item> */}
                                                            </DropdownButton>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Year Built</label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">No</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="No"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                {/* <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item> */}
                                                            </DropdownButton>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Year Built Source
                                                            </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Seller</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Seller"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Rental Type </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Apartment </option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Apartments"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Unit Level </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">N/A</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="N/A"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Num of
                                                                Fireplace </label>
                                                            <input type="text" className="w-100" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Pool - Area
                                                            </label>
                                                            <input type="text" className="w-100" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Pool -
                                                                Private</label>
                                                            <input type="text" className="w-100" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Restrictions


                                                            </label>
                                                            <div className="all-checkbox boxscroll4 ">
                                                                <div className="wrapperScroll">

                                                                    {/* {require('../../assets/img/searchHome3.png').default} */}

                                                                    <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />


                                                                    <ToggleButtonGroup type="checkbox"
                                                                        value={searchdata.check}
                                                                        onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                        <ToggleButton value={"Deed Restrictions"}>Deed Restrictions</ToggleButton>
                                                                    </ToggleButtonGroup>
                                                                    <br />
                                                                    <ToggleButtonGroup type="checkbox"
                                                                        value={searchdata.check}
                                                                        onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                        <ToggleButton value={"Historic Restrictions"}>Historic Restrictions</ToggleButton>
                                                                    </ToggleButtonGroup>
                                                                    <br />
                                                                    <ToggleButtonGroup type="checkbox"
                                                                        value={searchdata.check}
                                                                        onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                        <ToggleButton value={"Horses Allowed"}>Horses Allowed</ToggleButton>
                                                                    </ToggleButtonGroup>
                                                                    <br />
                                                                    <ToggleButtonGroup type="checkbox"
                                                                        value={searchdata.check}
                                                                        onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                        <ToggleButton value={"Mobile Home Allowed"}>Mobile Home Allowed</ToggleButton>
                                                                    </ToggleButtonGroup>
                                                                    <br />
                                                                    <ToggleButtonGroup type="checkbox"
                                                                        value={searchdata.check}
                                                                        onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                        <ToggleButton value={"No Restrictions"}>No Restrictions</ToggleButton>
                                                                    </ToggleButtonGroup>
                                                                    <br />
                                                                    <ToggleButtonGroup type="checkbox"
                                                                        value={searchdata.check}
                                                                        onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                        <ToggleButton value={"Restricted"}>Restricted</ToggleButton>
                                                                    </ToggleButtonGroup>





                                                                    {/* <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck1" checked />
                                                                        <label className="form-check-label" for="defaultCheck1">
                                                                            Deed Restrictions
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            Historic Restrictions
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            Historic Restrictions
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            Historic Restrictions
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            Horses Allowed
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            Mobile Home Allowed
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            No Restrictions
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            Restricted
                                                                        </label>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Lot Description
                                                            </label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />


                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Cleared"}>Cleared</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Corner"}>Corner</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Court Yard"}>Court Yard</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Cul-De-Sac"}>Cul-De-Sac</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Greenbelt"}>Greenbelt</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"In Golf Course Community"}>In Golf Course Community</ToggleButton>
                                                                </ToggleButtonGroup>


                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Cleared
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Corner
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Court Yard
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Cul-De-Sac
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Greenbelt
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        In Golf Course Community
                                                                    </label>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Interior
                                                                Features </label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />

                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"2 Staircases"}>2 Staircases</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Alarm System - Leased"}>Alarm System - Leased</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Alarm System - Owned"}>Alarm System - Owned</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Atrium"}>Atrium</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Balcony"}>Balcony</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Brick Walls"}>Brick Walls</ToggleButton>
                                                                </ToggleButtonGroup>

                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        2 Staircases
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Alarm System - Leased
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Alarm System - Owned
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Atrium
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Balcony
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Brick Walls
                                                                    </label>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Heating System
                                                                Description


                                                            </label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />




                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Butane"}>Butane</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Central Electric"}>Central Electric</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Central Gas"}>Central Gas</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Heat Pump"}>Heat Pump</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"No Heating"}>No Heating</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Propane"}>Propane</ToggleButton>
                                                                </ToggleButtonGroup>








                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Butane
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Central Electric
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Central Gas
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Heat Pump
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        No Heating
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Propane
                                                                    </label>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Cooling System
                                                                Description

                                                            </label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />



                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Attic Fan"}>Attic Fan</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Central Electric"}>Central Electric</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Central Gas"}>Central Gas</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Heat Pump"}>Heat Pump</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"No Cooling / Vent"}>No Cooling / Vent</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Other Cooling"}>Other Cooling</ToggleButton>
                                                                </ToggleButtonGroup>



                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Attic Fan
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Central Electric
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Central Gas
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Heat Pump
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        No Cooling / Vent
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Other Cooling
                                                                    </label>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Water/Sewer
                                                                Description</label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />



                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Aerobic"}>Aerobic</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"No Sewer"}>No Sewer</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={" No Water"}> No Water</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Other Water/Sewer"}>Other Water/Sewer</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Public Sewer"}>Public Sewer</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Public Water"}>Public Water</ToggleButton>
                                                                </ToggleButtonGroup>

                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Aerobic
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        No Sewer
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        No Water
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Other Water/Sewer
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Public Sewer
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Public Water
                                                                    </label>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>




                                                </div>



                                            </form>
                                        </div>


                                        <div className="listhub-tab mt-40 bgskyblue " id="tab-3">
                                            <h3 className="fontSize18 font-weight500 colorBlue mb-3">ListHub Contact Information</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-8 row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="fontSize14 font-weight500 colorBlue w-100">Appointment
                                                                    Desk Phone </label>
                                                                <input type="text" className="w-100" placeholder="Appointment Desk Phone" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label
                                                                    className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                    for="formGroupInput">Appointment Phone Desc </label>
                                                                <select name="stateid" className="selectpicker form-control">
                                                                    <option value="1">On-Site Sales Office </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                    for="formGroupInput">Directions - Please provide directions to
                                                                    the property from the closest major RD or HWY </label>
                                                                <textarea className="w-100" placeholder="Head southwest on Wingate St, turn northwest onto Wingate St and arrive at 14 Granite St.
													"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">


                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Showing
                                                                Instructions
                                                            </label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />

                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Accompany"}>Accompany</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Appointment Required"}>Appointment Required</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Call Occupant"}>Call Occupant</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Controlled Access"}>Controlled Access</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Leave Business Card"}>Leave Business Card</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"LockBox Back"}>LockBox Back</ToggleButton>
                                                                </ToggleButtonGroup>


                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Accompany
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Appointment Required
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Call Occupant

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Controlled Access

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Leave Business Card
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        LockBox Back
                                                                    </label>
                                                                </div> */}
                                                            </div>
                                                        </div>

                                                    </div>




                                                </div>
                                            </form>
                                        </div>


                                        <div className="listhub-tab mt-40 bgskyblue " id="tab-4">
                                            <h3 className="fontSize18 font-weight500 colorBlue mb-3">ListHub Room Information</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="form-group mb-0">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Bedrooms
                                                            </label>
                                                            <input type="text" className="w-100" placeholder="2" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group mb-0">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Baths - Full
                                                            </label>
                                                            <input type="text" className="w-100" placeholder="2" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group mb-0">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Baths - Half
                                                            </label>
                                                            <input type="text" className="w-100" placeholder="2" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 p-0 borderdesign"></div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Room Type </label>
                                                            <DropdownButton
                                                                alignRight
                                                                title="Bedroom"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                            <DropdownButton
                                                                alignRight
                                                                title="Bedroom"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Bedroom </option>
                                                            </select>
                                                            <select name="stateid" className="selectpicker form-control mt-12">
                                                                <option value="1">Bedroom </option>
                                                            </select> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Room Dimension </label>

                                                            <DropdownButton
                                                                alignRight
                                                                title="12*12"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                            <DropdownButton
                                                                alignRight
                                                                title="12*12"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">12*12 </option>
                                                            </select>
                                                            <select name="stateid" className="selectpicker form-control mt-12">
                                                                <option value="1">12*12 </option>
                                                            </select> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Room Location</label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">1st </option>
                                                            </select>
                                                            <select name="stateid" className="selectpicker form-control mt-12">
                                                                <option value="1">1st </option>
                                                            </select> */}


                                                            <DropdownButton
                                                                alignRight
                                                                title="1st"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>


                                                            <DropdownButton
                                                                alignRight
                                                                title="1st"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>



                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput"></label>
                                                            <p className="ml-auto text-right mb-0 mt-26"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <path d="M3 6H5H21" stroke="#4C5B68" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M3 6H5H21" stroke="white" stroke-opacity="0.3"
                                                                    stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path
                                                                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                                                    stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path
                                                                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                                                    stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10 11V17" stroke="#4C5B68" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10 11V17" stroke="white" stroke-opacity="0.3"
                                                                    stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M14 11V17" stroke="#4C5B68" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M14 11V17" stroke="white" stroke-opacity="0.3"
                                                                    stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg></p>
                                                            <p className="ml-auto text-right mb-0 mt-26"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <path d="M3 6H5H21" stroke="#4C5B68" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M3 6H5H21" stroke="white" stroke-opacity="0.3"
                                                                    stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path
                                                                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                                                    stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path
                                                                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                                                    stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10 11V17" stroke="#4C5B68" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10 11V17" stroke="white" stroke-opacity="0.3"
                                                                    stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M14 11V17" stroke="#4C5B68" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M14 11V17" stroke="white" stroke-opacity="0.3"
                                                                    stroke-width="2" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg></p>

                                                        </div>



                                                    </div>

                                                </div>
                                            </form>
                                            <p className="ml-auto text-right font-Size18 font-weight700 colorGreen mb-0">+ Add New
                                            </p>
                                        </div>

                                        <div className="listhub-tab mt-40 bgskyblue " id="tab-5">
                                            <h3 className="fontSize18 font-weight500 colorBlue mb-3">ListHub Lease and Additional
                                                Information</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Is Smoking Allowed </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Yes</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Yes"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Is Approval Required </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Yes</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Yes"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Are Pets Allowed </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Not Allowed </option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Not Allowed"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Application Fee
                                                            </label>
                                                            <input type="text" className="w-100" value="25" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Other Mandatory Fees </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Yes</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Yes"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Is Smoking Allowed </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Yes</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Yes"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="form-group">
                                                            <label
                                                                className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                for="formGroupInput">Property Mgmt Co </label>
                                                            {/* <select name="stateid" className="selectpicker form-control">
                                                                <option value="1">Yes</option>
                                                            </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Yes"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Property Mgmt
                                                                Name </label>
                                                            <input type="text" className="w-100" value="Peabody Properties" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Property Mgmt
                                                                Co Phone </label>
                                                            <input type="text" className="w-100" value="781-794-1000" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Disclosures
                                                            </label>
                                                            <div className="all-checkbox nicescroll">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />

                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Approved Seniors Project"}>Approved Seniors Project</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Corporate Listing"}>Corporate Listing</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Estate"}>Estate</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Exclusions"}>Exclusions</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Home Protection Plan"}>Home Protection Plan</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Levee District"}>Levee District</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Approved Seniors Project
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Corporate Listing
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Estate

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Exclusions

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Home Protection Plan
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Levee District
                                                                    </label>
                                                                </div> */}
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Rental Terms
                                                            </label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />





                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Long Term"}>Long Term</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"One Year"}>One Year</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Section 8"}>Section 8</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Short Term"}>Short Term</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Six Months"}>Six Months</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />







                                                                {/* <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Long Term
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        One Year
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Section 8

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Short Term

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck2" />
                                                                    <label className="form-check-label" for="defaultCheck2">
                                                                        Six Months

                                                                    </label>
                                                                </div> */}

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group checdesign">
                                                            <label className="fontSize14 font-weight500 colorBlue w-100">Utilities Paid
                                                            </label>
                                                            <div className="all-checkbox">
                                                                <img className="transparentImg" src={require('../../assets/img/tabbgimage.png').default} />


                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Cable"}>Cable</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Electricity"}>Electricity</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Gas"}>Gas</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"None Provided"}>None Provided</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Phone"}>Phone</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br />
                                                                <ToggleButtonGroup type="checkbox"
                                                                    value={searchdata.check}
                                                                    onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                                    <ToggleButton value={"Pool Maintenance"}>Pool Maintenance</ToggleButton>
                                                                </ToggleButtonGroup>








                                                                {/* <div className="form-check boxscroll4">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck1" checked />
                                                                    <label className="form-check-label" for="defaultCheck1">
                                                                        Cable
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck3" checked />
                                                                    <label className="form-check-label" for="defaultCheck3">
                                                                        Electricity
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck4" />
                                                                    <label className="form-check-label" for="defaultCheck4">
                                                                        Gas

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck5" />
                                                                    <label className="form-check-label" for="defaultCheck5">
                                                                        None Provided
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck6" />
                                                                    <label className="form-check-label" for="defaultCheck6">
                                                                        Phone

                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                        id="defaultCheck7" />
                                                                    <label className="form-check-label" for="defaultCheck7">
                                                                        Pool Maintenance

                                                                    </label>
                                                                </div> */}

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="d-flex align-items-center mt-40 mb-0" id="tab-6">
                                            <h3 className="fontSize24 font-weight500  colorBlue mb-0">Blessed Rock Apartment Photos
                                            </h3>
                                            <p className="mb-0 colorGreen ml-auto fontSize18 font-weight700"><svg className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                                                    stroke="#1BC47D" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M7 10L12 15L17 10" stroke="#1BC47D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 15V3" stroke="#1BC47D" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>Download All Photos </p>

                                        </div>
                                        {/* <div className="listhub-tab mt-22 bgwhite sliderSection" id="tab-7">

                                            <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active"> <img src={require('../../assets/img/sliderproduct.png').default} /> </div>
                                                    <div className="carousel-item"> <img src={require('../../assets/img/sliderproduct.png').default} />
                                                    </div>
                                                    <div className="carousel-item"> <img src={require('../../assets/img/sliderproduct.png').default} />
                                                    </div>
                                                    <div className="carousel-item"> <img src={require('../../assets/img/sliderproduct.png').default} />
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#custCarousel"
                                                    data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a
                                                        className="carousel-control-next" href="#custCarousel" data-slide="next"> <span
                                                            className="carousel-control-next-icon"></span> </a>

                                                <ol className="carousel-indicators list-inline">
                                                    <li className="list-inline-item active"> <a id="carousel-selector-0"
                                                        className="selected" data-slide-to="0" data-target="#custCarousel"> <img
                                                            src={require('../../assets/img/sliderproduct.png').default} className="img-fluid" /> </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                                                            <img src={require('../../assets/img/sliderproduct.png').default} className="img-fluid" /> </a>
                                                    </li>
                                                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2"
                                                        data-target="#custCarousel"> <img src={require('../../assets/img/sliderproduct.png').default}
                                                            className="img-fluid" /> </a> </li>
                                                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3"
                                                        data-target="#custCarousel"> <img src={require('../../assets/img/sliderproduct.png').default}
                                                            className="img-fluid" /> </a> </li>
                                                </ol>
                                            </div>

                                            


                                        </div> */}
                                        {/* <SliderThumbnail /> */}
                                        <div className="">
                                            <div className="col-lg-4">
                                                <div className="form-group">

                                                    <div className="logoSelect company-image"><span><img
                                                        src={require('../../assets/img/upload-cloud.png').default} alt="" className="img-fluid" />
                                                        <p className="colorBlue mt-3  mb-3 fontSize14 font-weight700">Drag and
                                                            Drop<br />Image or <strong className="colorGreen">Browse</strong></p>
                                                    </span>
                                                        <input className="form-control-file" id="file-input" name="file-input"
                                                            type="file" />

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mlssection mt-2">

                                            <h3 className="font-Size24 font-weight500 colorBlue mt-40 mb-3">MLS Listing</h3>
                                            <div className="form-group d-flex">
                                                <label className="pl-0 fill-email pull-left fontSize16 font-weight700 colorBlue"
                                                    for="formGroupInput">MLS Link </label>
                                                <input type="text" className="w632 ml-auto"
                                                    value="https://www.url.com/BlessedRockApartment" />

                                            </div>
                                            <div className="form-group d-flex">
                                                <label className="pl-0 fill-email pull-left fontSize16 font-weight700 colorBlue"
                                                    for="formGroupInput">Notes </label>
                                                <textarea className="w632 ml-auto" placeholder=""></textarea>

                                            </div>

                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Form>
        </>
    )
}

export default ListhubForm
