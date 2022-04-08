import React, { useEffect } from 'react'

const GoogleADS = ({ width, height, slotno }) => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    });



    return (
        <>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2836217214879103"
                crossorigin="anonymous"></script>



            <ins class="adsbygoogle"
                style={{ display: "inline-block", width: `${width}px`, height: `${height}px` }}
                data-ad-client="ca-pub-2836217214879103"
                data-ad-slot={slotno}></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>


        </>
    )
}

export default GoogleADS