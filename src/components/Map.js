import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import customMarkerIconUrl from '../components/Assets/663342.png';


const Map = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [zoomLevel, setZoomLevel] = useState(2);

  useEffect(() => {
    // Update the map center and zoom level based on the selected region
    if (selectedRegion === 'US') {
      setMapCenter([37.0902, -95.7129]); // United States coordinates
      setZoomLevel(4);
    } else if (selectedRegion === 'IN') {
      setMapCenter([20.5937, 78.9629]); // India coordinates
      setZoomLevel(5);
    } else if (selectedRegion === 'UK') {
      setMapCenter([55.3781, -3.4360]); // United Kingdom coordinates
      setZoomLevel(6);
    } else {
      // Default center and zoom for no region selected
      setMapCenter([0, 0]);
      setZoomLevel(2);
    }
  }, [selectedRegion]);

  // Create a custom icon for the marker
  const customIcon = new L.Icon({
    iconUrl: customMarkerIconUrl,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon (centered bottom)
    popupAnchor: [0, -32], // Anchor point for the popup (above the icon)
  });

  return (
    <div className="map-container">
      <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {selectedRegion && (
          <Marker position={mapCenter} icon={customIcon}>
            <Popup>{selectedRegion}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
