/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useState, useCallback, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const containerStyle = {
  width: '800px',
  height: '350px'
};

export const Map = ({ center, markers }) => {

  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, [])

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, [])

  return ( 
    <Container>
    <Row className="px-4 my-5">
      <Col sm={4}>
        <p>
          Use our interactive map to explore the various seaports along Norways extensive coastline. Each port has its unique charm and significance, whether it is s a bustling commercial hub or a picturesque fishing village.
        </p>

        <p>
          Plan your journey to these seaports by air, sea, or land. Norway has excellent transportation infrastructure ensures easy access to these coastal gems. Whether you are arriving by cruise ship, ferry, or car, we have got you covered with travel information and directions.
        </p>

        Discover More:

        <p>
          Port Facilities: Learn about the facilities and services available at each seaport, including cargo handling, passenger terminals, and recreational amenities.
        </p>

      </Col>
      <Col sm={7}>
        <div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
          >
            { markers.map(marker => (
              <Marker key={marker.id} position={marker.position} label={{ text: labels[marker.id % markers.length], fontSize: "15px" }} />
            )) }
          </GoogleMap>
      </div>
      </Col>
    </Row>
  </Container>
  )
}
