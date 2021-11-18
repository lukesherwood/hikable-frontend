import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function MapContainer(props) {

  const [selected, setSelected] = useState({});

  const mapStyles = {
    height: "100vh",
    width: "100%"
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

  return (
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
  )
}
