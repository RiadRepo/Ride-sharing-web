import { SourceContext } from "@/context/SourceContext";
import {
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";

export default function MyLoaction({ location }) {
  const { source } = useContext(SourceContext);
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });

  useEffect(() => {
    if (source) {
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }
  }, [source]);

  return (
    <GoogleMap
      center={center}
      zoom={10}
      mapContainerStyle={{ width: "100%", height: window.innerHeight * 0.5 }}
      options={{ mapId: "6b6eb83a56b2d3d2" }}
    >
      {source && (
        <MarkerF position={{ lat: source.lat, lng: source.lng }}>
          <OverlayViewF
            position={{ lat: source.lat, lng: source.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className='bg-white fw-bold'>
              <p className='text-black m-2'>{source.label}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}
    </GoogleMap>
  );
}
