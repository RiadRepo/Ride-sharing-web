import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function InputItem({ type }) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);

  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  useEffect(() => {
    type == "source"
      ? setPlaceholder("Pickup Location")
      : setPlaceholder("Dropoff location");
  });

  const getLatAndLang = (place, type) => {
    const placeId = place?.value?.place_id;
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        console.log(place.geometry.location.lat());
        if (type == "source") {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
        }
      }
    });
  };
  return (
    <div>
      {" "}
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: (place) => {
            getLatAndLang(place, type);
            setValue(place);
          },
          //   placeholder={type=='source' ? "Pickup Location" : " Dropoff Location"},
          placeholder: placeholder,
          isClearable: true,
          components: {
            DropdownIndicator: false,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
            }),
          },
        }}
      />
    </div>
  );
}
