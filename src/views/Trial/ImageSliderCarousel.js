import React, { useEffect, useState } from 'react'
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import ImageSliderCarouselItem from './ImageSliderCarouselItem'

import { Carousel, CarouselItem } from 'react-bootstrap';

const ImageSliderCarousel = ({ propimages }) => {



    const database = [
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "DFSJSD",
            state: "MP",
            imgurl: "../assets/img/popularCity1.png"
        }
    ]

    // console.log(propimages.length);

    useEffect(() => {

    }, [propimages])
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <>
            {
                propimages == null || propimages.length == 0 ?
                    // <Carousel className="proudPartnerSlider sliderNav brandNav "
                    //     plugins={[
                    //         'infinite',
                    //         'arrows',
                    //         {
                    //             resolve: slidesToShowPlugin,
                    //             options: {
                    //                 numberOfSlides: 1,
                    //                 arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                    //                 arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                    //                 addArrowClickHandler: true,
                    //             }
                    //         },
                    //     ]
                    //     }>




                    <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />







                    // {/* </Carousel> */}


                    :


                    // <Carousel className="proudPartnerSlider sliderNav brandNav "
                    //     plugins={[
                    //         'infinite',
                    //         'arrows',
                    //         {
                    //             resolve: slidesToShowPlugin,
                    //             options: {
                    //                 numberOfSlides: 1,
                    //                 arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                    //                 arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                    //                 addArrowClickHandler: true,
                    //             }
                    //         },
                    //     ]
                    //     }>
                    //     {
                    //         (propimages.map((data) => (
                    //             <img src={`https://www.rentalhousingdeals.com/${data.photo}`} />
                    //         )))

                    //     }
                    // </Carousel>

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            (propimages.map((data) => (
                                <CarouselItem>
                                    <img
                                        className="d-block w-100"
                                        src={`https://www.rentalhousingdeals.com/${data.photo}`}
                                        alt="First slide"
                                    />
                                </CarouselItem>
                            )))
                        }
                    </Carousel>

            }
            {/* <Carousel className="proudPartnerSlider sliderNav brandNav "
                plugins={[
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 1,
                            arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                            arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                            addArrowClickHandler: true,
                        }
                    },
                ]
                }>
                {
                    (propimages.map((data) => (
                        // <ImageSliderCarouselItem data={data} />
                        // {console.log()}
                        // console.log()
                        <img src={`https://www.rentalhousingdeals.com/${data.photo}`} />

                        // <img src={`https://cdn-0.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    )))
                }
            </Carousel> */}

        </>
    )
}

export default ImageSliderCarousel
