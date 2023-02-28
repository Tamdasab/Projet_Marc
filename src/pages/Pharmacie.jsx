import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const Pharmacie = () => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const response = await axios.get('/api/pharmacies');
      setPharmacies(response.data.pharmacies);
    };
    fetchPharmacies();
  }, []);


    const position = [48.8534, 2.3488];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '80vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pharmacies.map((pharmacy) => (
        <Marker key={pharmacy.id} position={[pharmacy.geometry.location.lat, pharmacy.geometry.location.lng]}>
          <Popup>
            <Card>
              <Card.Body>
                <Card.Title>{pharmacy.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pharmacy.vicinity}</Card.Subtitle>
                <Card.Link href={`tel:${pharmacy.formatted_phone_number}`}>{pharmacy.formatted_phone_number}</Card.Link>
              </Card.Body>
            </Card>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Pharmacie;








//import React, { useState, useEffect } from "react";
//import PharmacyMarker from "./PharmacyMarker";
//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
//
//const containerStyle = {
//  width: "100%",
//  height: "500px",
//};
//
//const PharmacyMap = () => {
//  const [currentPosition, setCurrentPosition] = useState({});
//  const [pharmacies, setPharmacies] = useState([]);
//
//  const mapStyles = {
//    height: "100%",
//    width: "100%",
//  };
//
//  const options = {
//    disableDefaultUI: true,
//  };
//
//  const success = async (position) => {
//    const currentPosition = {
//      lat: position.coords.latitude,
//      lng: position.coords.longitude,
//    };
//
//    setCurrentPosition(currentPosition);
//
//    const response = await fetch(
//      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentPosition.lat},${currentPosition.lng}&radius=5000&type=pharmacy&key=VOTRE_API_KEY`
//    );
//    const data = await response.json();
//    setPharmacies(data.results);
//  };
//
//  useEffect(() => {
//    navigator.geolocation.getCurrentPosition(success);
//  }, []);
//
//  return (
//    <LoadScript googleMapsApiKey="VOTRE_API_KEY">
//      <GoogleMap
//        mapContainerStyle={containerStyle}
//        center={currentPosition}
//        zoom={15}
//        options={options}
//      >
//        {pharmacies.map((pharmacy) => (
//          <Marker
//            key={pharmacy.place_id}
//            position={{
//              lat: pharmacy.geometry.location.lat,
//              lng: pharmacy.geometry.location.lng,
//            }}
//            icon={{
//              url: "/pharmacy.png",
//              scaledSize: new window.google.maps.Size(30, 30),
//            }}
//          />
//        ))}
//        <PharmacyMarker />
//      </GoogleMap>
//    </LoadScript>
//  );
//};
//
//export default PharmacyMap;










//import React, { useState, useEffect } from 'react'
//import axios from 'axios';
//
//
//const PharmacieList = ({ lat, lng}) => {
//  const [pharmacie, setPharmacie] = useState([]);
//  
//  useEffect(() => {
//    const fetchdata = async axios(
//      `https://api.pharmacie.com=?lat=${lat}&lng=${lng}`
//      );
//      setPharmacie(result.data);
//  };
//  setchData()
//}, [lat, lng]);
//
//
//  return (
//    <div>
//      <h2>Liste des pharmacies</h2>
//      <ul>
//        {pharmacie.map((pharma) => (
//          <li key={pharma.id}>
//            {pharma.name}, {pharma.address}
//          </li>
//        ))
//        }
//      </ul>
//    </div>
//  )
//}
//
//export default PharmacieList