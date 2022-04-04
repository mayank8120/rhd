import React, { useState, useEffect } from 'react'
import { AgencyStateListItem } from './AgencyStateListItem'
import MapSection from './MapSection'
import SearchSection from './SearchSection'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Maptile from './Maptile';
import L from 'leaflet'
import Footer from '../../containers/Footer'

const AgencyState = () => {

    document.title = "Anaheim Housing Authority - Rental Housing Deals"

    var data = [
        {
            "id": 14,
            "ha_id": "AL101",
            "image": "776",
            "service_type": "Low-Rent",
            "premium": 1,
            "rating": "5.0",
            "num_units": 40,
            "hours": "Monday: Noon to 4:00 p.m. and Tuesday &mdash; Friday: 8:00 a.m. to Noon",
            "name": "Abbeville Housing Authority",
            "about_us": "Long before colonialists moved into the Wiregrass region of Alabama, the Creek and Seminole Indians settled here. Rather than being a nomadic tribe, the Muskogee tribe of the Creek Indians who settled here were excellent farmers. Living along the many creeks and streams here, they developed a number of recipes based on local fare such as hickory nut soup, roasted wild duck and cornmeal bread. In order to make it possible for colonialists to settle this region, this group of the Creek nation fought alongside Andrew Jackson against other tribes.\r\n\r\nThe Abbey Creek runs through the center of the Wiregrass, but the Indian name for the creek was Ã¢â‚¬Å“Yatta AbbaÃ¢â‚¬Â which means Ã¢â‚¬Å“a grove of dogwood treesÃ¢â‚¬Â. Today, dogwoods still bloom along the creek and in the city of Abbeville. Abbeville was first settled in 1822 and was incorporated some years later. In 1859 young William Calvin Oates organized a company of 121 men on the steps of the Abbeville courthouse. This group of enthusiastic young men, known as Company G of the 15th Alabama, marched northward carrying dreams of glory; however, soon stark realities of a soliderÃ¢â‚¬â„¢s life were thrust upon them. They would be immortalized at GettysburgÃ¢â‚¬â„¢s Little Round Top, and many never returned home. Though losing his right arm in battle, Oats returned to Abbeville after the war and resumed his legal career. In November 1894 he was elected governor after serving seven consecutive terms in the U.S. House of Representatives.\r\n\r\nToday, Abbeville, first city in the nation alphabetically, both by city and state, in the Rand McNally Road Atlas, is home to several trustees of three Alabama Universities &ndash; the University of South Alabama, Auburn University and the University of Alabama. Abbeville students have been president of the SGA at Troy University, Auburn University, and the University of Alabama. Pride and enthusiasm for home still inundates the citizens of a place called Abbeville.",
            "mission_statement": "Long before colonialists moved into the Wiregrass region of Alabama, the Creek and Seminole Indians settled here. Rather than being a nomadic tribe",
            "address": "194 Ash Street",
            "address2": "PO Box 515",
            "city": "Abbeville",
            "county": "Henry",
            "state": "AL",
            "zip": 36310,
            "zip4": 0,
            "phone": "(334)585-2165",
            "fax": "(334)585-1777",
            "email": "AL101@centurytel.net",
            "url": "http://www.cityofabbeville.org/local-government/boards-committees/abbeville-housing-authority/",
            "contact": "Tom Wachs",
            "formatted_address": "194 Ash Dr, Abbeville, AL 36310, USA",
            "lat": "31.5755000000000000",
            "lng": "-85.2790000000000000",
            "location_type": "RANGE_INTERPOLATED",
            "google_num_results": 1,
            "status": 0,
            "is_wating_closed": 0,
            "create_time": 1345722589,
            "update_time": null,
            "author_id": 1,
            "additional_information": "",
            "is_section_8_wating_list": 0
        },
        {
            "id": 1,
            "ha_id": "AK001",
            "image": "606",
            "service_type": "Combined",
            "premium": 1,
            "rating": "5.0",
            "num_units": 1263,
            "hours": "",
            "name": "Alaska Housing Finance Corporation",
            "about_us": "AHFC manages a variety of programs designed to improve the quality of all housing throughout Alaska. Long involved with weatherization and energy-efficiency grants, studies and programs, AHFC is now carrying out research projects with the Cold Climate Housing Research Center that have practical significance for every Alaskan.In a state with one of the fastest growing senior populations, senior-housing programs are in greater and greater demand. Look into senior housing in many communities, and you'll see your corporation at work.With the aging population comes increased need for health care services and workers - especially nurses. AHFC is assisting with no-down-payment loans for nurses; and with the shortage of teachers, the same option is available to them. With key military installations based in our state, AHFC is also involved with the long-term financing of new and remodeled housing for military families.And your corporation is profitable! Since 1986, it has contributed more than $1.9 billion to the state in the form of direct dividends going into the general fund (the state's funding source for all services and programs); providing funds to the state for capital (building and equipment) improvements; bonding for projects such as university student housing; purchasing state assets, such as the Atwood Building; and deferred maintenance of state-owned property.",
            "mission_statement": "To provide Alaskans access to safe, quality, affordable housing.  Even broader in scope.",
            "address": "4300 Boniface Parkway",
            "address2": "",
            "city": "Anchorage",
            "county": "Anchorage ",
            "state": "AK",
            "zip": 99504,
            "zip4": 0,
            "phone": "(907) 330-6100",
            "fax": "(907) 330-1683",
            "email": "sjohansson@ahfc.us",
            "url": "http://www.ahfc.us",
            "contact": "Bryan Butcher",
            "formatted_address": "4300 Boniface Pkwy, Anchorage, AK 99508, USA",
            "lat": "61.1817270000000000",
            "lng": "-149.7785340000000000",
            "location_type": "ROOFTOP",
            "google_num_results": 1,
            "status": 2,
            "is_wating_closed": 0,
            "create_time": 1345722589,
            "update_time": 1554977575,
            "author_id": 1,
            "additional_information": "",
            "is_section_8_wating_list": 0
        },
        {
            "id": 2,
            "ha_id": "AK104",
            "image": "607",
            "service_type": "Low-Rent",
            "premium": 1,
            "rating": "5.0",
            "num_units": 0,
            "hours": "",
            "name": "Association of Village Council",
            "about_us": "The Association of Village Council Presidents (AVCP) is a tribal 501(c)(3) non-profit organization based in Bethel, Alaska.  Bethel is the largest town in Southwest Alaska and is the regional hub for its surrounding fifty-six (56) federally recognized tribes, all of whom are members of AVCP.  AVCP's member tribes reside in small isolated villages scattered throughout the Yukon-Kuskokwim Delta in an area that is approximately 59,000 square miles and roughly the size of the State of Oregon.  The villages are not connected by road to one another, nor to the rest of Alaska.  English is a second language for many tribal members who continue to practice a centuries old hunting, fishing and gathering way of life, congregating at home village sites in the winter and moving to fish camps in the summer.<br><br>AVCP serves its member tribes by providing, at their request, a variety of social service, human development and culturally relevant programs that promote tribal self-determination and self-governance and work to protect tribal culture and traditions.  In an effort to meet this objective, AVCP provides the following services which are funded by federal and state grants as well as a variety of other grant sources.",
            "mission_statement": "Provides human development, social services, and other culturally relevant programs for the people, to promote self determination, protection and enhancement of our culture and traditions through a working partnership with member village of the Yukon-Kuskokwim Delta.",
            "address": "101A Main Street",
            "address2": "P.O. Box 219",
            "city": "Bethel",
            "county": "Bethel",
            "state": "AK",
            "zip": 99559,
            "zip4": 0,
            "phone": "(907) 543-7300",
            "fax": "(907) 543-7479",
            "email": "SWhite@avcp.org",
            "url": "www.avcp.org",
            "contact": "Sam White",
            "formatted_address": "101 Main St, Bethel, AK 99559, USA",
            "lat": "60.7935030000000000",
            "lng": "-161.7598050000000000",
            "location_type": "RANGE_INTERPOLATED",
            "google_num_results": 1,
            "status": 0,
            "is_wating_closed": 0,
            "create_time": 1345722589,
            "update_time": 1524083140,
            "author_id": 1,
            "additional_information": "",
            "is_section_8_wating_list": 0
        },
        {
            "id": 3,
            "ha_id": "AK105",
            "image": "150",
            "service_type": "Low-Rent",
            "premium": 1,
            "rating": "5.0",
            "num_units": 0,
            "hours": "",
            "name": "Baranof Island Housing Authority",
            "about_us": "Sitka Tribe of Alaska created Baranof Island Housing Authority in 1980 by State Statute to address housing needs of Tribal citizens and other residents of Baranof Island, Alaska.  Baranof Island Housing Authority is the Tribally Designated Housing Entity for Sitka Tribe of Alaska.  BIHA provides housing services to STA Tribal Citizens and other Alaska Natives and American Indians living in Sitka through the Indian Housing Block Grant program.  Sitka Tribe of Alaska is the federally recognized government for more than 4 Tribal Citizens who are primarily of Tlingit, Haida, Aleut and Tsimpsian Heritage in the Sheet'-KÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ area which encompasses all of Baranof Island (Shee) and the southern and western half of Chicagof Island in the Alexander Archipelago of Southeastern Alaska.",
            "mission_statement": "Our purpose is to assist Sitka Tribal citizens and other Sitka residents in collaboration with other agencies achieve self-sufficiency and pride through affordable housing opportunities. We will increase the safe, sanitary housing stock of modest design through construction, acquisition, and rehabilitation of housing and provide the means to obtain affordable housing through home ownership and rental programs.",
            "address": "245 Katlian Street",
            "address2": "",
            "city": "Sitka",
            "county": "Sitka City and",
            "state": "AK",
            "zip": 99835,
            "zip4": 0,
            "phone": "(907) 747-5088",
            "fax": "(907) 747-5701",
            "email": "anne@bihasitka.org",
            "url": "http://www.bihasitka.org",
            "contact": "Anne Davis",
            "formatted_address": "245 Katlian St, Tongass National Forest, Sitka, AK 99835, USA",
            "lat": "57.0507808774710000",
            "lng": "-135.3410730511000000",
            "location_type": "RANGE_INTERPOLATED",
            "google_num_results": 1,
            "status": 2,
            "is_wating_closed": 0,
            "create_time": 1345722589,
            "update_time": null,
            "author_id": 1,
            "additional_information": "",
            "is_section_8_wating_list": 0
        },
        {
            "id": 4,
            "ha_id": "AK106",
            "image": "619",
            "service_type": "Low-Rent",
            "premium": 1,
            "rating": "5.0",
            "num_units": 500,
            "hours": "",
            "name": "Bering Straits Regional Housing Authority",
            "about_us": "For over 30 years BSRHA has been a primary developer of affordable housing projects including new construction, acquisition, and rehabilitation.\r\nCurrently, BSRHA manages over 500 units of affordable housing in the Bering Straits Region. The BSRHA development is diverse and extensive, there is experience and in-house capability to undertake planning, design, and project management.",
            "mission_statement": "",
            "address": "415 E. 3rd Avenue",
            "address2": "P.O. Box 995",
            "city": "Nome",
            "county": "Nome",
            "state": "AK",
            "zip": 99762,
            "zip4": 0,
            "phone": "(907) 443-5256",
            "fax": "(907) 443-8652",
            "email": "mione@bsrha.org",
            "url": "http://bsrha.org",
            "contact": "Matthew Ione",
            "formatted_address": "E 3rd Ave & Campbell Way, Nome, AK 99762, USA",
            "lat": "64.4978597760200000",
            "lng": "-165.3986784070700000",
            "location_type": "APPROXIMATE",
            "google_num_results": 1,
            "status": 1,
            "is_wating_closed": 0,
            "create_time": 1345722589,
            "update_time": null,
            "author_id": 1,
            "additional_information": "",
            "is_section_8_wating_list": 0
        },
        {
            "id": 5,
            "ha_id": "AK107",
            "image": "621",
            "service_type": "Low-Rent",
            "premium": 1,
            "rating": "5.0",
            "num_units": 0,
            "hours": "",
            "name": "Bristol Bay Housing Authority",
            "about_us": "One of 16 regional housing authorities in Alaska, the Bristol Bay Housing Authority's mission is to eliminate substandard housing conditions through the development of local capacities that will provide safe, decent and affordable housing opportunities for the Native population of Bristol Bay.\r\n\r\nSince its founding in 1974, BBHA has built more than 500 such units, single family homes and apartments, with funds provided by the U.S. Department of Housing and Urban Development's Office of Native American Programs, the Alaska Housing Finance Corporation., and the U.S. Department of Agriculture Rural Development Division.",
            "mission_statement": "The Bristol Bay Housing Authority's mission is to eliminate substandard housing conditions through the development of local capacities that will provide safe, decent and affordable housing opportunities for the Native population of Bristol Bay.",
            "address": "P.O. Box 50",
            "address2": "",
            "city": "Dillingham",
            "county": "Dillingham",
            "state": "AK",
            "zip": 99576,
            "zip4": 0,
            "phone": "(907) 842-5956",
            "fax": "(907) 842-2784",
            "email": "bakelkok@bbha.org",
            "url": "http://www.bbha.org",
            "contact": "Brenda Akelkok",
            "formatted_address": "Dillingham, AK, USA",
            "lat": "59.0402000000000000",
            "lng": "-158.5231000000000000",
            "location_type": "APPROXIMATE",
            "google_num_results": 3,
            "status": 1,
            "is_wating_closed": 0,
            "create_time": 1345722589,
            "update_time": null,
            "author_id": 1,
            "additional_information": "",
            "is_section_8_wating_list": 0
        },
        {
            "id": 6,
            "ha_id": "AK108",
            "image": "623",
            "service_type": "Low-Rent",
            "premium": 1,
            "rating": "5.0",
            "num_units": 0,
            "hours": "Monday - Friday 7:30 am - 6:00 pm",
            "name": "Cook Inlet Housing Authority",
            "about_us": "Cook Inlet Housing Authority (CIHA) believes that quality housing provides a solid foundation on which to further build the overall quality of life.  To serve this goal, we provide rental housing, home ownership and home improvement opportunities as well as neighborhood revitalization activities and community partnerships.\r\n\r\nCIHA was created in 1974 by the Alaska Legislature to insure that elders, individuals and families in the 45,168-square-mile area of Cook Inlet region would have access to quality, affordable housing.\r\n\r\nWith our vision of ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œIndependence Through HousingÃƒÂ¢Ã¢â€šÂ¬Ã‚Â in mind, Cook Inlet Housing Authority develops programs intended to give our clients a ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œhand up,ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â or an opportunity to move beyond the need for assistance.",
            "mission_statement": "CIHA's mission is to create housing opportunities that empower our people and build our community. Housing programs are designed to encourage the transition toward self-sufficiency, through home ownership or affordable rental housing.",
            "address": "3510 Spenard Road, Suite 100",
            "address2": "",
            "city": "Anchorage",
            "county": "Anchorage ",
            "state": "AK",
            "zip": 99503,
            "zip4": 0,
            "phone": "(907) 793-3000",
            "fax": "(907) 793-3073",
            "email": "info@cookinlethousing.org",
            "url": "http://www.cookinlethousing.org",
            "contact": "Carol Gore",
            "formatted_address": "3510 Spenard Rd, Anchorage, AK 99503, USA",
            "lat": "61.1884092000000000",
            "lng": "-149.9088957000000000",
            "location_type": "ROOFTOP",
            "google_num_results": 1,
            "status": 1,
            "is_wating_closed": 0,
            "create_time": 1345722589,
            "update_time": null,
            "author_id": 1,
            "additional_information": "On the website http://www.cookinlethousing.org there is an application for housing - they offer low income housing to qualified applicants. If you have any other questions please call the staff at 907-793-3739.\r\n\r\n ",
            "is_section_8_wating_list": 0
        }
    ];

    const [city, setcity] = useState("");
    const [statename, setstatename] = useState("");

    const [searchresultdata, setsearchresultdata] = useState([]);

    const [totalcount, settotalcount] = useState();
    const [initialpage, setinitialpage] = useState(1);
    const [lastpage, setlastpage] = useState();
    const [currentpage, setcurrentpage] = useState(1);
    const [paginationopen, setpaginationopen] = useState(false);

    const authdetail =

        useEffect(() => {
            const params = new URLSearchParams(window.location.search);
            const city = params.get('city');
            const states = params.get('state');
            // const feature = params.get('ft');
            setcity(city);
            setstatename(states.toUpperCase());
            // setfeature(feature);
        }, []);
    // console.log(city, statename);

    let housngAPIurl = 'http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/housing-authorities?state=CA&city=los angeles'
    let housingAPIurl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/housing-authorities?city=${city.toUpperCase()}&state=${statename.toUpperCase()}`
    useEffect(() => {
        const fetchData = async () => {
            if (city === 'undefined' || city === '' || city === null || statename === 'undefined' || statename === '' || statename === null) {

            }
            else {
                const result = await axios.post(housingAPIurl)
                    .then(res => {
                        if (res.data.error === true) {
                            setsearchresultdata(res.data.message);
                            // console.log(res);
                        } else {
                            setsearchresultdata(res.data.data);
                            settotalcount(res.data.count);
                            setlastpage(Math.round(res.data.count / 10));
                            // console.log(res.data.data);
                        }
                        // console.log(res);
                    }).catch(error => {
                        console.log('error', error);
                    });
            }
        };
        fetchData();
    }, [housingAPIurl]);

    // console.log(searchresultdata);

    return (
        <>
            <section className="listingPage secPad16 responsiveSecPad0 agencystate-page">
                <div className="container2">
                    <div className="row">

                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 customFlexPercntLeft webMarLeft0 paddingLeft0 paddingRight">



                            <div className="listingSection">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <nav className="navbar resNavbarBread breadleftmargin mb-3" aria-label="breadcrumb">
                                        <ol className="breadcrumb font-weight500 mb-0">
                                            <li className="breadcrumb-item fontSize14 "><a href="/" className="purpleText">Home</a></li>
                                            <li className="breadcrumb-item fontSize14"><a href="/housingAuthority" className="purpleText">Housing
                                                Authority</a></li>
                                            <li className="breadcrumb-item fontSize14 "><a href="" className="purpleText">CA</a></li>
                                            <li className="breadcrumb-item fontSize14 active"><a href="" className="">Anaheim</a></li>
                                        </ol>
                                    </nav>
                                </div>
                                <SearchSection />
                                <div className="agencyStateList">
                                    <div className="d-flex align-items-center headingTab">
                                        <h3 className="colorBlue font-weight700 mb-0">Housing Authority in or near 91754, CA</h3>
                                        <ul className="noMarginPad listStyleNone itemMobile ml-auto tabiIconResponsive">
                                            <li>
                                                <img src={require('../../assets/img/mapIcon.png').default} />
                                                <p className="mb-0 purpleText font-weight400">Map</p>
                                            </li>
                                            <li style={{ display: "none" }}>
                                                <img src={require('../../assets/img/list.png').default} />
                                                <p className="mb-0 purpleText font-weight400">List</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="propertyListState propertyListScroll boxscroll4">
                                        <div className="wrapperScroll">
                                            <ul className="noMarginPad listStyleNone">
                                                {searchresultdata.map((data) => (
                                                    <AgencyStateListItem data={data} />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pagination">
                                        <ul className="noMarginPad listStyleNone">
                                            <li className="active paginationNum">1</li>
                                            <li className="paginationNum">2</li>
                                            <li className="paginationNum">3</li>
                                            <li className="paginationNum">4</li>
                                            <li className="dotsBlock">...</li>
                                            <li className="paginationNum">37</li>
                                            <li className="paginationNum">38</li>
                                            <li className="paginationNum">39</li>
                                            <li className="paginationNum arrowRight"><img src={require('../../assets/img/rightArrowo.png').default} /></li>
                                        </ul>
                                        <p className="mb-0 fontSize14 font-weight400 text-center mt-1 secondaryColor">Showing 1-25
                                            of 1,231 Results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MapSection />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}


export default AgencyState