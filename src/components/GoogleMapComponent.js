import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function MapContainer(props) {

  const [selected, setSelected] = useState({});

  const mapStyles = {
    height: "75vh",
    width: "65%"
  };

  const onSelect = hike => {
    setSelected(hike);
  }

  const defaultCenter = {
    lat: -41.1228978, lng: 174.9458001
  }
  const { hikes } = props
  const locationsArray = hikes.map(hike => {
    return {
      name: hike.title,
      id: hike.id,
      description: hike.description,
      location: {
        lat: parseFloat(hike.latitude),
        lng: parseFloat(hike.longitude)
      }
    }
  })
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  return (
    <LoadScript
      googleMapsApiKey={apiKey} >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={defaultCenter}
      >
        {locationsArray ?
          locationsArray.map(hike => {
            return (
              <Marker key={hike.name} onClick={() => onSelect(hike)} position={hike.location} />
            )
          }) : null
        }
        {
          selected.location &&
          (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                <h6>
                  <Link to={`/hikes/${selected.id}`}>
                    {selected.name}
                  </Link>
                </h6>
                <p>{selected.description}</p>
              </div>
            </InfoWindow>
          )
        }
      </GoogleMap>
    </LoadScript>
  )
}
