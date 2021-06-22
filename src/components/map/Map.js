import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapContainer from './Style';


const Map= ({lat, lng}) => {

    const key = "AIzaSyDgeWyRR6rHBXI4KprMMk6BKIOELTLMZV4";
    
    return (
        <MapContainer>
            <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key}}
          defaultCenter={{
            lat: lat,
            lng: lng
         }}
          defaultZoom={9}
        >
 
        </GoogleMapReact>
      </div>
        </MapContainer>
    )
}

export default Map;