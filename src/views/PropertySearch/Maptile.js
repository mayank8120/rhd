import React, { useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import img from '../../assets/img/marker.png'
import purplecircle from '../../assets/img/purple_circle.svg'
import greencircle from '../../assets/img/greencircle.svg'
import L from 'leaflet'
import useSupercluster from "use-supercluster";
import { Link } from "react-router-dom";


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





// const cuffs = new L.Icon({
//     iconUrl: "/handcuffs.svg",
//     iconSize: [24, 24],
// });





const Maptile = ({ searchresultdata }) => {

    // console.log(searchresultdata);

    let icons = {};
    let fetchIcon = (count, size, color) => {
        if (!icons[count]) {

            console.log(color, " color here");
            console.log(count, " count here");
            icons[count] = L.divIcon({
                html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px; border:10px solid #ffffff; background:${color}">
        ${count}
      </div>`,
            });
        }
        return icons[count];
    };



    useEffect(() => {

    }, [searchresultdata])

    const [thirdval, setthirdval] = useState();


    let amountvalue = (db) => {

        // return db.property.property_title;

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

    // get map bounds
    function updateMap() {
        const b = map.getBounds();
        setBounds([
            b.getSouthWest().lng,
            b.getSouthWest().lat,
            b.getNorthEast().lng,
            b.getNorthEast().lat,
        ]);
        setZoom(map.getZoom());
    }

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

    // console.log(searchresultdata);


    const points = searchresultdata.map((db) => (

        // console.log(searchresultdata.length),
        // console.log(db.property.lng, db.property.lat),

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
                        // "https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg"

                        `${require('../../assets/img/Affordable Housing Logo.jpg').default}`
                        :
                        `https://www.rentalhousingdeals.com/${db.property_photo.photo}`
                ),
                amount: amountvalue(db),
                proptype: db.property.property_type,
                // headerdesc: db.property_deals.header_description,
                // subsidised: db.property_detail.subsidized,
                // section: db.property_detail.section8,
            },
            geometry: {
                type: "Point",
                coordinates: [
                    parseFloat(db.property.lng),
                    parseFloat(db.property.lat),
                ],
            },
        }));


    const { clusters, supercluster } = useSupercluster({
        points: points,
        bounds: bounds,
        zoom: zoom,
        options: { radius: 50, maxZoom: 50 },
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
        let exist;
        if (parseFloat(clusterinside.geometry.coordinates[0]) == parseFloat(localStorage.getItem('currLng'))
            && parseFloat(clusterinside.geometry.coordinates[1]) == parseFloat(localStorage.getItem('currLat'))) {
            exist = true;
            return true;
        }
        return false;
    }


    let checkCluster = (clusterid) => {
        let clusterinside = supercluster.getChildren(clusterid);
        let exist = false;
        clusterinside.forEach(element => {
            if (element.properties.cluster === true) {
                if ((checkCluster(element.properties.cluster_id)) == true) {
                    exist = true;
                }
            }
            if (element.properties.cluster === false) {
                if (checkMarker(element) == true) {
                    exist = true;
                }
            }
        })
        return exist;
    }







    return (
        <>



            {
                clusters.map((cluster) => {
                    // every cluster point has coordinates
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    // the point may be either a cluster or a point
                    const { cluster: isCluster, point_count: pointCount } =
                        cluster.properties;


                    // console.log(cluster)


                    // we have a cluster to render
                    if (isCluster) {

                        return (
                            <>




                                <Marker
                                    key={`cluster-${cluster.id}`}
                                    position={[latitude, longitude]}
                                    icon={
                                        checkCluster(cluster.id) == true
                                            ?
                                            L.divIcon({
                                                html: `<div class="cluster-marker" style="width: ${10 + (pointCount / points.length) * 40}px; height: ${10 + (pointCount / points.length) * 40}px; border:2px solid #ffffff; background:#1bc47d ">
                                        ${pointCount > 9 ? '9+' : pointCount}
                                      </div>`,
                                            })
                                            :
                                            L.divIcon({
                                                html: `<div class="cluster-marker" style="width: ${10 + (pointCount / points.length) * 40}px; height: ${10 + (pointCount / points.length) * 40}px; border:2px solid #ffffff; background:#9d56f7">
                                        ${pointCount > 9 ? '9+' : pointCount}
                                      </div>`,
                                            })
                                    }
                                    eventHandlers={{
                                        click: () => {
                                            const expansionZoom = Math.min(
                                                supercluster.getClusterExpansionZoom(cluster.id),
                                                maxZoom
                                            );
                                            map.setView([latitude, longitude], expansionZoom, {
                                                animate: true,
                                            });
                                        },
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
                                    <img className="imgpopup" src={`${cluster.properties.img}`} />
                                    {/* https://www.rentalhousingdeals.com/uploaded/prop_1600756794_Capri+Villas+hi+res%20(1).jpg */}
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

                                                {/* {cluster.properties.amount} */}
                                            </h4>
                                            {/* {
                                                cluster.properties.subsidised == 'Yes' && cluster.properties.section == 'Yes' ?
                                                    <span class="font-weight700">
                                                        <img
                                                            src={require("../../assets/img/priceTagg.svg").default}
                                                        />
                                                        Good Deal
                                                    </span>
                                                    :
                                                    null
                                            } */}

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
