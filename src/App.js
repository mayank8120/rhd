import './App.css';

import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// import { Scrollbar } from "react-scrollbars-custom";
// import SimpleBar from 'simplebar-react';
// import SimpleBar from 'simplebar';

// import 'simplebar/dist/simplebar.min.css';



import Housingauthoritywaitlist from './views/HousingAuthority/Housingauthoritywaitlist.js';
import Index from './views/Index/Index.js';
import Section8housing from './views/Section8housing/Section8housing.js';
import Seniorhousing from './views/SeniorHousing/Seniorhousing.js';
import Footer from './containers/Footer';
// import AgencyDetail from './views/AgencyDetail/AgencyDetail.js'
import SavedProperties from './views/SavedProperties/SavedProperties.js'
import AgencyState from './views/AgencyState/AgencyState.js'
import AgencyDetail from './views/AgencyDetail/AgencyDetail.js';
import BasicInfoPage from './views/BasicInfoPage/BasicInfoPage.js'
import GeneralProperty from './views/GeneralProperty/GeneralProperty.js'
import IncomeLimits from './views/IncomeLimits/IncomeLimits.js'
import Listhub from './views/Listhub/Listhub.js'
import ListhubForm from './views/ListhubForm/ListhubForm.js'
import ListhubSearch from './views/ListhubSearch/ListhubSearch.js'
import ListWithUs from './views/ListWithUs/ListWithUs.js'
import PropertyDetail from './views/PropertyDetail/PropertyDetail.js'
import PropertySearch from './views/PropertySearch/PropertySearch.js'
import PublicHousing from './views/PublicHousing/PublicHousing.js'
import { CompareProperties } from './views/CompareProperties/CompareProperties';
import { Premium } from './views/Premium/Premium';
// import { Trial } from './views/Trial/Trial';
import { AboutUs } from './views/AboutUs/AboutUs';
import { Terms } from './views/TermsOfUse/Terms';
import { PrivacyPolicy } from './views/PrivacyPolicy/PrivacyPolicy';
import { EqualOppo } from './views/EqualOppo/EqualOppo';
import { IncomeBasedFAQ } from './views/IncomeBasedFAQ/IncomeBasedFAQ';
import { Disclaimer } from './views/Disclaimer/Disclaimer';
import HousingChoice from './views/HousingChoiceVoucher/HousingChoice';
import LowIncomeHousingChoice from './views/LowIncomeHousingChoice/LowIncomeHousingChoice';
import RuralDevelopment from './views/RuralDevelopment/RuralDevelopment';
import EnterpriseIncome from './views/Enterprise/EnterpriseIncome';
import GoodPlaceToLive from './views/GoodPlaceToLive/GoodPlaceToLive';
import FairMarketRents from './views/FairMarketRents/FairMarketRents';
import SiteMap from './views/SiteMap/SiteMap';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Inspections from './views/Inspections/Inspections';
import Payments from './views/PaymentStandards/Payment';
import { ContactUs } from './views/ContactUS/ContactUs';

import ScrollToTop from './containers/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPropListAccordingToMap } from './actions';
import PropertySearchFullMap from './views/PropertySearchFULLMAP/PropertySearchFullMap';
import Trial from './views/Trial/trial';









function App() {




    // const dispatch = useDispatch();

    // const propResult = useSelector((state) => state.search_result);

    // let minlat = '33.0';
    // let maxlat = '34.0';
    // let minlng = '-118.0';
    // let maxlng = '-117.0';

    // useEffect(() => {
    //     dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng));
    // }, []);

    return (
        <>

            {/* <div>
                <h1>App34</h1>
                <h2>{JSON.stringify(propResult)}</h2>
                {console.log((JSON.stringify(propResult)).slice(0, 10), "POSTS")}
            </div> */}


            <Router>
                <Navbar />
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/seniorHousing" exact component={Seniorhousing} />
                        <Route path="/housingAuthority" exact component={Housingauthoritywaitlist} />
                        <Route path="/section8Housing" component={Section8housing} />
                        <Route path="/incomeLimits" component={IncomeLimits} />
                        <Route path="/agencyDetail" component={AgencyDetail} />
                        <Route path="/publicHousing" component={PublicHousing} />
                        <Route path="/basicInfoPage" component={BasicInfoPage} />
                        {/* <Route path="/generalProperty" component={GeneralProperty} /> */}
                        <Route path="/agencyState" component={AgencyState} />
                        <Route path="/savedProperties" component={SavedProperties} />
                        <Route path="/listWithUs" component={ListWithUs} />
                        <Route path="/propertyDetail" component={PropertyDetail} />
                        <Route path="/listhub" component={Listhub} />
                        <Route path="/listhubform" component={ListhubForm} />
                        {/* <Route path="/propertySearch" component={PropertySearch} /> */}
                        <Route path="/listhubSearch" component={ListhubSearch} />
                        <Route path="/compareProperties" component={CompareProperties} />
                        <Route path="/premium" component={Premium} />
                        {/* <Route path="/trial" component={Trial} /> */}

                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/termsofuse" component={Terms} />
                        <Route path="/privacypolicy" component={PrivacyPolicy} />
                        <Route path="/equalOpportunity" component={EqualOppo} />
                        <Route path="/incomebasedhousingfaq" component={IncomeBasedFAQ} />
                        <Route path="/disclaimer" component={Disclaimer} />
                        <Route path="/housingchoicevoucher" component={HousingChoice} />
                        <Route path="/lowincomehpusingchoice" component={LowIncomeHousingChoice} />
                        <Route path="/ruraldevelopmentrentalassistance" component={RuralDevelopment} />
                        <Route path="/enterpriseincomeverification" component={EnterpriseIncome} />
                        <Route path="/agoodplacetolive" component={GoodPlaceToLive} />
                        <Route path="/fairmarketrents" component={FairMarketRents} />
                        <Route path="/sitemap" component={SiteMap} />
                        <Route path="/error404" component={ErrorPage} />

                        <Route path="/inspections" component={Inspections} />
                        <Route path="/paymentstandards" component={Payments} />
                        <Route path="/contactus" component={ContactUs} />
                        <Route path="/advertisewithus" component={ContactUs} />



                        <Route path="/propertySearch/:cityname/:statename/:feature?" component={PropertySearch} />
                        <Route path="/propertySearch" component={PropertySearch} />

                        {/* <Route path="/propertySearch/:cityname/:statename/:feature?" component={PropertySearchFullMap} />
                        <Route path="/propertySearch" component={PropertySearchFullMap} /> */}


                        <Route path='/trial' component={Trial} />

                    </Switch>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
