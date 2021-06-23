import React, {useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import MapContainer from './Style';


// lat=-25.9653, lng=32.5892 are default values for the center of the map
const Map= ({lat=-25.9653, lng=32.5892}) => {

    const key = "AIzaSyDgeWyRR6rHBXI4KprMMk6BKIOELTLMZV4";
    
    useEffect(() => {

    }, [lat, lng])
    
    return (
        <MapContainer>
            <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key}}
          center={{
            lat: lat,
            lng: lng
         }}
          zoom={12}
        >
        </GoogleMapReact>
      </div>
        </MapContainer>
    )
}

export default Map;