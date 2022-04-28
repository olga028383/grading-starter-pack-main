import iconMap from 'assets/img/icon-map.png';
import Leaflet from "leaflet";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const city = {
  title: 'Санкт-Петербург',
  address: 'Санкт-Петербург, Набережная реки Карповка, д 5',
  position: [59.968137, 30.316272],
  zoom: 15,
};

const BoatIcon = Leaflet.icon({
  iconUrl: `${iconMap}`,
  iconSize: [48, 61],
  iconAnchor: [20, 40],
  popupAnchor: [0, 0],
});

const Map = () => {
  return (
    <MapContainer center={city.position} zoom={city.zoom} scrollWheelZoom={false} style={{
      width: '100%',
      height: '336px'
    }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={city.position} icon={BoatIcon}>
        <Popup>
          {city.address}
        </Popup>
      </Marker>
    </MapContainer>
  )
};

export default Map;
