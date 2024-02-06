import React from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF } from '@react-google-maps/api';
import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from '@/context/SourceContext';
import { useContext, useEffect, useState } from "react";

export default function GooglemapSection() {
    const { source, setSource } = useContext(SourceContext);
    const { destination, setDestination } = useContext(DestinationContext);
    const [directionRoutePoints, setDirectionRoutePoints] = useState([])
    const containerStyle = {
        width: '100%',
        height: window.innerHeight * 0.5
    };

    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523
    })

    // const center = {
    //     lat: -3.745,
    //     lng: -38.523
    // };


    useEffect(() => {
        if (source?.length != [] && map) {

            map.panTo(
                {
                    lat: source.lat,
                    lng: source.lng
                }
            )
            setCenter({
                lat: source.lat,
                lng: source.lng
            })
        }


        if (source?.length != [] && destination?.length != []) {

            directionRoute();
        }
    }, [source])

    useEffect(() => {
        if (destination?.length != [] && map) {
            setCenter({
                lat: destination.lat,
                lng: destination.lng
            })
        }
        if (source?.length != [] && destination?.length != []) {
            directionRoute();
        }
    }, [destination])




    const directionRoute = () => {
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
            origin: {
                lat: source.lat,
                lng: source.lng
            },
            destination: {
                lat: destination.lat,
                lng: destination.lng
            },
            travelMode: google.maps.TravelMode.DRIVING
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log('Directions OK:', result);
                setDirectionRoutePoints(result);
            } else {
                console.error('Directions request failed:', status, result);
            }
        });
    };


    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ mapId: "6b6eb83a56b2d3d2" }}
        >
            {source?.length != [] ?
                <MarkerF
                    position={{
                        lat: source.lat,
                        lng: source.lng
                    }}

                // icon={{
                //     url: "/source.png",
                //     scaledSise: {
                //         width: 20,
                //         height: 20
                //     }
                // }}
                >
                    <OverlayViewF
                        position={{
                            lat: source.lat,
                            lng: source.lng
                        }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div className='bg-white fw-bold'>
                            <p className='text-black m-2'>
                                {source.label}
                            </p>
                        </div>
                    </OverlayViewF>

                </MarkerF> : null
            }
            {destination?.length != [] ?
                <MarkerF
                    position={{
                        lat: destination.lat,
                        lng: destination.lng
                    }}


                >

                    <OverlayViewF
                        position={{
                            lat: destination.lat,
                            lng: destination.lng
                        }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div className='bg-white fw-bold'>
                            <p className='text-black m-2'>
                                {destination.label}
                            </p>
                        </div>
                    </OverlayViewF>
                </MarkerF> : null
            }
            <DirectionsRenderer
                directions={directionRoutePoints}
                options={{
                    polylineOptions: {
                        strokeColor: '#000000',  // Change this to #000000 for black color
                        strokeWeight: 4
                    },
                    suppressMarkers: true
                }}
            />
        </GoogleMap>
    )
}
