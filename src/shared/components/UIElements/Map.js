import React, { useRef, useEffect } from "react";

import './Map.css';

const Map = props => {
    const mapRef = useRef();
    const { center, zoom } = props;

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });

        console.log(map)

        new window.google.maps.Marker({ position: center, map: map });

    }, [center, zoom]);


    return (
        <div 
            className={`map ${props.className}`} 
            syle={props.style}
            ref={mapRef}
        ></div>
    )
}

export default Map;