import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function MapContainer(props) {

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: -41.1228978, lng: 174.9458001
  }

  const hikes = [
    {
      name: "Location 1",
      location: {
        lat: -45.874304,
        lng: 170.699755
      },
    },
    {
      name: "Location 2",
      location: {
        lat: -39.956188,
        lng: 176.015403
      }
    },
    {
      name: "Location 3",
      location: {
        lat: -43.41486,
        lng: 170.158842
      }
    },
    {
      name: "Location 4",
      location: {
        lat: -44.34282,
        lng: 169.032178
      }
    },
    {
      name: "Location 5",
      location: {
        lat: -35.191977,
        lng: 174.045518
      }
    }
  ];
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  return (
    <LoadScript
      googleMapsApiKey={apiKey} >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={defaultCenter}
      >
        {hikes ?
          hikes.map(hike => {
            return (
              <Marker key={hike.name} position={hike.location} />
            )
          }) : null
        }
      </GoogleMap>
    </LoadScript>
  )
}
