import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import img from '../../assets/img/marker.png'
import purplecircle from '../../assets/img/purple_circle.svg'
import greencircle from '../../assets/img/greencircle.svg'
import L, { point, setOptions } from 'leaflet'
import useSupercluster from "use-supercluster";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropListAccordingToMap } from "../../actions";
import { isItCityVISE } from "../../containers/functions";


const markerIconpremium = new L.Icon(
    {
        iconUrl: greencircle,
        iconSize: [24, 24]
    }
)

const markerIcongeneral = new L.Icon(
    {
        iconUrl: purplecircle,
        iconSize: [24, 24]
    }
)

let counter = 0;

const Maptile = () => {

    // console.log(searchresultdata);


    let history = useHistory();

    let pushToLatLngPropertyPage = (minlat, maxlat, minlng, maxlng) => {
        history.push(`/propertySearch?minlat=${minlat}&maxlat=${maxlat}&minlng=${minlng}&maxlng=${maxlng}`);
        console.log(counter += 1);
    }


    const dispatch = useDispatch();


    let mapchange = useSelector(
        (state) => state.mapState
    );








    // let isItCityVISE = (min, max) => {
    //     let flag;
    //     if (Math.abs((Math.abs(max) - Math.abs(min))) >= 3) {
    //         flag = true;
    //     } else {
    //         flag = false;
    //     }
    //     return flag;
    // }


    let amountvalue = (db) => {
        let returnvalue;

        if (db == null || db == undefined || db.length == 0) {
        }
        else {

            if (db.property.property_type !== 'general') {
                if (db.property.property_type !== "general" && db.property.property_type !== "classified") {
                    if (db.property_deals == null) {
                    } else {
                        if (db.property_deals.header_description == 1 || db.property_deals.header_description == "1") {
                            // setthirdval("SPECIALS");
                            returnvalue = "SPECIALS";
                            // console.log(1);
                        }
                        else if (db.property_deals.header_description == 2 || db.property_deals.header_description == "2") {
                            // setthirdval(`$${db.header_value[0]}`);
                            returnvalue = `$${db.header_value[0].toLocaleString(undefined, { minimumFractionDigits: 0 })}`;
                            // console.log(2);
                        }
                        else if (db.property_deals.header_description == 3 || db.property_deals.header_description == "3") {
                            // setthirdval(`$${db.header_value[2]}`);
                            returnvalue = `$${db.header_value[2].toLocaleString(undefined, { minimumFractionDigits: 0 })}`
                            // console.log(3);
                        }
                        else if (db.property_deals.header_description == 4 || db.property_deals.header_description == "4") {
                            // setthirdval(`$${db.header_value[2]}`);
                            returnvalue = `$${db.header_value[2].toLocaleString(undefined, { minimumFractionDigits: 0 })}`;
                            // console.log(4);
                        }
                        else if (db.property_deals.header_description == 5 || db.property_deals.header_description == "5") {
                            // setthirdval("MOVE-IN SPECIALS");
                            returnvalue = "MOVE-IN SPECIALS";
                            // console.log(5);
                        }
                        else if (db.property_deals.header_description == 6 || db.property_deals.header_description == "6") {
                            // setthirdval(`$${db.header_value[0]}`);
                            returnvalue = `$${db.header_value[0].toLocaleString(undefined, { minimumFractionDigits: 0 })}`;
                            // console.log(6);
                        }
                        else if (db.property_deals.header_description == 7 || db.property_deals.header_description == "7") {
                            // setthirdval(db.header_value[2]);
                            returnvalue = db.header_value[2];
                            // console.log(7);
                        }
                    }
                } else if (db.property.property_type !== "general" && db.property.property_type !== "premium") {
                    // setthirdval(propdetail.min_rent);
                    returnvalue = 'Classified';
                    // console.log(8);
                }
            }
            if (db.property.property_type == 'general') {
                returnvalue = 'CALL';
            }
        }

        return returnvalue;
    }




    const maxZoom = 22;
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(10);
    const map = useMap();

    const [spurl, setspurl] = useState("");

    // get map Bounds
    function updateMap() {
        const b = map.getBounds();
        setBounds([
            b.getSouthWest().lng,//ULNG
            b.getSouthWest().lat,//LLAT
            b.getNorthEast().lng,//LLNG
            b.getNorthEast().lat,//ULAT
        ]);
        setZoom(map.getZoom());
        counter++;
    }






    useEffect(() => {
        if ((bounds !== null && bounds !== undefined) && counter > 1) {

            let minlat = (bounds[1] < bounds[3] ? bounds[1] : bounds[3]);
            let maxlat = (bounds[1] > bounds[3] ? bounds[1] : bounds[3]);
            let minlng = (bounds[0] < bounds[2] ? bounds[0] : bounds[2]);
            let maxlng = (bounds[0] > bounds[2] ? bounds[0] : bounds[2]);
            // console.log("HELLO TOTO");
            if (mapchange == true) {


                // console.log("HELLO MOTO");
                pushToLatLngPropertyPage(minlat, maxlat, minlng, maxlng);

                // if (isItCityVISE(minlng, maxlng) == true) {
                //     dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, true));
                // } else {
                //     dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, false));
                // }
            }


        }
    }, [dispatch, bounds, mapchange]);



    const onMove = useCallback(() => {
        updateMap();
    }, [map]);

    useEffect(() => {
        updateMap();
    }, [map]);

    // useEffect(() => {
    //     updateMap();
    // }, [localStorage.getItem('currLng'), localStorage.getItem('currLat')]);


    useEffect(() => {
        map.on("move", onMove);
        return () => {
            map.off("move", onMove);
        };
    }, [map, onMove]);




    const [searchresultdata, setsearchresultdata] = useState([]);

    let propResult = useSelector((state) => state.search_result);
    let searchApiUrl = `city=&state=&page=&feature=&minamtval=&maxamtval=&beds=&baths=}`

    const [typeofdata, settypeofdata] = useState();

    useEffect(() => {

        const fetchData = async () => {
            setsearchresultdata([]);
            setsearchresultdata(propResult.data);
            if (propResult.hasOwnProperty('count') == false) {
                settypeofdata("CITY");
            } else {
                settypeofdata();
            }
        };
        fetchData();
    }, [searchApiUrl, propResult]);




    const [points, setpoints] = useState([]);



    // let points =

    useEffect(() => {

        // console.log(searchresultdata, "SEARCH RESULT DATA");

        if (typeofdata == "CITY") {
            setpoints([]);
        } else {
            setpoints(searchresultdata.map((db) => (
                {
                    type: "Feature",
                    properties: {
                        cluster: false,
                        propid: (db.property.id_property),
                        propname: db.property.property_title,
                        maxbed: (db.property_detail == null || db.property_detail == '' ? 'N/A' : db.property_detail.max_bed),
                        minbed: (db.property_detail == null || db.property_detail == '' ? 'N/A' : db.property_detail.min_bed),
                        maxbath: (db.property_detail == null || db.property_detail == '' ? 'N/A' : db.property_detail.max_bath),
                        minbath: (db.property_detail == null || db.property_detail == '' ? 'N/A' : db.property_detail.min_bath),
                        phone: db.property.phone,
                        img: (
                            db.property_photo == null ||
                                db.property_photo == "" ||
                                db.property_photo.photo == null ||
                                db.property_photo.photo == ""
                                ?
                                `${require('../../assets/img/Affordable Housing Logo.jpg').default}`
                                :
                                `https://www.rentalhousingdeals.com/${db.property_photo.photo}`
                        ),
                        amount: amountvalue(db),
                        proptype: db.property.property_type
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [
                            parseFloat(db.property.lng),
                            parseFloat(db.property.lat),
                        ],
                    },
                })))

        }


    }, [searchresultdata])





    // console.log(points);







    // console.log(points);


    let { clusters, supercluster } = useSupercluster({
        points: points,
        bounds: bounds,
        zoom: zoom,
        options: { radius: 50, maxZoom: 22 },
    });





    // console.log(supercluster._getOriginZoom(230));


    // console.log(localStorage.getItem('currLat'));

    // useEffect(() => {


    // }, localStorage.getItem('currLat'));




    // useEffect(() => {
    //     if (post == null || post == undefined || post.length == 0) {
    //     }
    //     else {
    //         if (prop.property_type !== "general" && prop.property_type !== "classified") {
    //             if (deals == null) {
    //             } else {
    //                 if (deals.header_description == 1 || deals.header_description == "1") {
    //                     setthirdval("SPECIALS");
    //                     // console.log(1);
    //                 }
    //                 else if (deals.header_description == 2 || deals.header_description == "2") {
    //                     setthirdval(`$${db.header_value[0]}`);
    //                     // console.log(2);
    //                 }
    //                 else if (deals.header_description == 3 || deals.header_description == "3") {
    //                     setthirdval(`$${db.header_value[2]}`);
    //                     // console.log(3);
    //                 }
    //                 else if (deals.header_description == 4 || deals.header_description == "4") {
    //                     setthirdval(`$${db.header_value[2]}`);
    //                     // console.log(4);
    //                 }
    //                 else if (deals.header_description == 5 || deals.header_description == "5") {
    //                     setthirdval("MOVE-IN SPECIALS");
    //                     // console.log(5);
    //                 }
    //                 else if (deals.header_description == 6 || deals.header_description == "6") {
    //                     setthirdval(`$${db.header_value[0]}`);
    //                     // console.log(6);
    //                 }
    //                 else if (deals.header_description == 7 || deals.header_description == "7") {
    //                     setthirdval(db.header_value[2]);
    //                     // console.log(7);
    //                 }
    //             }
    //         } else if (prop.property_type !== "general" && prop.property_type !== "premium") {
    //             setthirdval(propdetail.min_rent);
    //             // console.log(8);
    //         }
    //     }
    // }, [thirdval]);


    let cnt = 0;

    let checkMarker = (clusterinside) => {
        // let exist;
        if (parseFloat(clusterinside.geometry.coordinates[0]) == parseFloat(localStorage.getItem('currLng'))
            && parseFloat(clusterinside.geometry.coordinates[1]) == parseFloat(localStorage.getItem('currLat'))) {
            // exist = true;
            return true;
        }
        return false;
    }


    let checkCluster = (clusterid) => {


        let exist = false;

        try {

            if (clusterid) {

                let clusterinside;

                try {
                    try {
                        clusterinside = supercluster.getChildren(clusterid);
                    } catch (error) {
                        if (error && error.message == "No cluster with the specified id.") {
                            // console.log("No cluster with the specified id");
                        } else {
                            // console.log("hahaha");
                        }
                    }
                } catch (error) {
                    console.log(error, "2nd ERROR");
                }
                if (clusterinside == undefined) {
                } else {
                    clusterinside.forEach(element => {
                        if (element.properties.cluster === true) {
                            if (element.properties.cluster_id) {
                                if ((checkCluster(element.properties.cluster_id)) == true) {
                                    exist = true;
                                    // return true;
                                }
                            }
                        }
                        // if (element.properties.cluster === false) 
                        else {
                            if (checkMarker(element) == true) {
                                exist = true;
                                // return true;
                            }
                        }
                    })
                }
            }
        } catch (error) {
            console.log(error.stack, "ERROR STACK");
        }
        // return false;
        return exist;
    }


    // let checkCluster = (clusterid) => {


    //     let exist = false;


    //     let clusterinside = supercluster.getChildren(clusterid);

    //     clusterinside.forEach(element => {
    //         if (element.properties.cluster === true) {

    //             if (element.properties.cluster_id) {

    //                 if ((checkCluster(element.properties.cluster_id)) == true) {
    //                     exist = true;
    //                 }
    //             }

    //         }
    //         if (element.properties.cluster === false) {
    //             if (checkMarker(element) == true) {
    //                 exist = true;
    //             }
    //         }
    //     })

    //     return exist;

    // }

    const checkClusterWithNoIDerror = (id) => {

        let flag = true;

        try {
            try {
                // console.log(supercluster.getChildren(id), "cluster CHildren");
            } catch (error) {

                flag = false;
                if (error && error.message == "No cluster with the specified id.") {
                    // console.log("lalalaal");
                } else {
                    // console.log("hahaha");
                }
                // console.log(error.message, "ERROR INSIDE");
            }
        } catch (error) {
            console.log(error, "2nd ERROR");
        }


        return flag;

    }





    return (
        <>



            {

                typeofdata === "CITY" ?

                    searchresultdata.map((item) => {

                        return (
                            <Marker
                                position={[parseInt(item.coordinate.lat), parseInt(item.coordinate.lng)]}
                                icon={L.divIcon({
                                    html: `
                                    <div class="cluster-marker" style="width: auto; height:auto; background:#9d56f7;display:flex;align-items:center;justify-content:flex-start;min-width:120px;border-radius:4px;">
                                        <p class='mb-0'>${item.city} <br/> ${item.listingcount} listing</p>
                                    </div>`,
                                })}
                            >

                            </Marker>
                        );
                    })
                    :
                    clusters.map((cluster) => {
                        // console.log(clusters,"log12");

                        const [longitude, latitude] = cluster.geometry.coordinates;

                        const { cluster: isCluster, point_count: pointCount } = cluster.properties;
                        if (isCluster) {
                            // console.log(cluster.id, "cluster ID");
                            // console.log(cluster,"IS CHILD");

                            // running code
                            // try {
                            //     try {
                            //         console.log(supercluster.getChildren(cluster.id), "cluster CHildren");
                            //         console.log("iiiiiiiiiiiiiiiiiiiii");
                            //     } catch (error) {
                            //         if (error && error.message == "No cluster with the specified id.") {
                            //             console.log("lalalaal");
                            //             return true;
                            //         } else {
                            //             console.log("hahaha");
                            //             return true;
                            //         }
                            //         // console.log(error.message, "ERROR INSIDE");
                            //     }
                            // } catch (error) {
                            //     console.log(error, "2nd ERROR");
                            // }



                            // try {
                            //     try {
                            //         console.log(supercluster.getChildren(cluster.id), "cluster CHildren");
                            //     } catch (error) {
                            //         if (error && error.message == "No cluster with the specified id") {
                            //             console.log("lalalaal");
                            //             return true;
                            //         } else {
                            //             console.log("hahaha");
                            //             return true;
                            //         }
                            //         // console.log(error.message, "ERROR INSIDE");
                            //     }
                            // } catch (error) {
                            //     console.log(error, "2nd ERROR");
                            // }







                            return (
                                <>
                                    <Marker
                                        key={`cluster-${cluster.id}`}
                                        position={[latitude, longitude]}
                                        icon={
                                            checkClusterWithNoIDerror(cluster.id) == false ?
                                                L.divIcon({
                                                    html: `<div class="cluster-marker" style="width: ${10 + (pointCount / points.length) * 40}px; height: ${10 + (pointCount / points.length) * 40}px; border:2px solid #ffffff; background:#9d56f7">${pointCount > 9 ? pointCount : pointCount}</div>`,
                                                })
                                                :
                                                (
                                                    checkCluster(cluster.id) == true
                                                        ?
                                                        L.divIcon({
                                                            html: `<div class="cluster-marker" style="width: ${10 + (pointCount / points.length) * 40}px; height: ${10 + (pointCount / points.length) * 40}px; border:2px solid #ffffff; background:#1bc47d "> ${pointCount > 9 ? pointCount : pointCount} </div>`
                                                        })
                                                        :
                                                        L.divIcon({
                                                            html: `<div class="cluster-marker" style="width: ${10 + (pointCount / points.length) * 40}px; height: ${10 + (pointCount / points.length) * 40}px; border:2px solid #ffffff; background:#9d56f7"> ${pointCount > 9 ? pointCount : pointCount}</div>`,
                                                        })
                                                )
                                        }
                                        eventHandlers={{
                                            click: () => {
                                                if (checkClusterWithNoIDerror(cluster.id) == false) {
                                                } else {
                                                    const expansionZoom = Math.min(
                                                        supercluster.getClusterExpansionZoom(cluster.id),
                                                        maxZoom
                                                    );
                                                    map.setView([latitude, longitude], expansionZoom, {
                                                        animate: true,
                                                    });
                                                }
                                            }
                                        }}
                                    />
                                </>
                            );
                        }

                        // we have a single point to render
                        return (
                            <Marker
                                // key={`property-${cluster.properties.propId}`}
                                position={[latitude, longitude]}
                                icon={latitude == localStorage.getItem('currLat') && longitude == localStorage.getItem('currLng') ? markerIconpremium : markerIcongeneral} >
                                <Popup position className="map-section-detail">
                                    <div className="brdr_radius4px">
                                        <img className="imgpopup" src={`${cluster.properties.img}`} alt="Pointer" />
                                        <div className="textAreaBlock">
                                            <Link to={`/propertyDetail?proid=${cluster.properties.propid}`}><h5 className="colorBlue font-weight700 mb-0">{cluster.properties.propname}</h5></Link>
                                            <div className="priceRange itemWebsite">
                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">

                                                    {
                                                        cluster.properties.amount !== '' && cluster.properties.amount !== 'MOVE-IN SPECIALS' && cluster.properties.amount !== 'SPECIALS'
                                                            // &&
                                                            // (cluster.properties.headerdesc !== 7 || cluster.properties.headerdesc !== '7')
                                                            ?
                                                            cluster.properties.amount
                                                            :
                                                            (
                                                                cluster.properties.amount == 'MOVE-IN SPECIALS' || cluster.properties.amount == 'SPECIALS'
                                                                    || (cluster.properties.proptype == 'general' ? 1 == 1 : (cluster.properties.headerdesc == 7 || cluster.properties.headerdesc == '7'))
                                                                    ?
                                                                    cluster.properties.amount
                                                                    :
                                                                    'N/A'
                                                            )
                                                    }
                                                </h4>
                                            </div>
                                            <div className="d-flex align-items-center listingBlockLine">
                                                <ul className="noMarginPad listStyleNone">
                                                    <li className="d-flex align-items-center">
                                                        <img src={require('../../assets/img/beds.svg').default} />
                                                        <span className="colorBlue">
                                                            {
                                                                cluster.properties.maxbed == '' && cluster.properties.minbed == '' ?
                                                                    'N/A'
                                                                    :
                                                                    (
                                                                        cluster.properties.minbed == '' || cluster.properties.minbed == 0 ?
                                                                            cluster.properties.maxbed
                                                                            :
                                                                            cluster.properties.minbed
                                                                    )
                                                            }

                                                        </span>
                                                    </li>

                                                    <li className="d-flex align-items-center ml-12">
                                                        <img src={require('../../assets/img/shower.svg').default} />
                                                        <span className="colorBlue">
                                                            {
                                                                cluster.properties.maxbath == '' && cluster.properties.minbath == '' ?
                                                                    'N/A'
                                                                    :
                                                                    (
                                                                        cluster.properties.minbath == '' ?
                                                                            cluster.properties.maxbath
                                                                            :
                                                                            cluster.properties.minbath
                                                                    )
                                                            }
                                                        </span>
                                                    </li>
                                                </ul>
                                                <ul className="noMarginPad listStyleNone listIcon ml-auto">
                                                    <li>
                                                        <a href="#" className="purpleText font-weight700 fontSize14">
                                                            {cluster.properties.phone}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="cmap-btuon">
                                                <Link to={`/propertyDetail?proid=${cluster.properties.propid}`}>Check Availability</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })
            }




        </>
    )
}

export default Maptile
