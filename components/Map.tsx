"use client"
import { MapContainer, TileLayer, Polyline, Popup, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
require('leaflet/dist/leaflet.css');

export default function Map(props) {

    let content;

    if (props.coordinates.length > 1) {
        content = (<>
            <Marker icon={new Icon({ iconUrl: "/marker-icon.png", iconSize: [25, 41], iconAnchor: [12, 41] })} position={[props.coordinates[0]._lat, props.coordinates[0]._long]}>
                <Popup>
                    Початок
                </Popup>
            </Marker>
            <Polyline pathOptions={{ color: 'red' }} positions={props.coordinates.map((v) => { return [parseFloat(v._lat), parseFloat(v._long)] })} />
            <Marker icon={new Icon({ iconUrl: "/marker-icon.png", iconSize: [25, 41], iconAnchor: [12, 41] })} position={[props.coordinates[props.coordinates.length - 1]._lat, props.coordinates[props.coordinates.length - 1]._long]}>
                <Popup>
                    Кінець
                </Popup>
            </Marker>
        </>)

    } else {
        content = (
            <Marker icon={new Icon({ iconUrl: "/marker-icon.png", iconSize: [25, 41], iconAnchor: [12, 41] })} position={[props.coordinates[0]._lat, props.coordinates[0]._long]}>
                <Popup>
                    {props.title}
                </Popup>
            </Marker>)

    }

    return <MapContainer style={{ height: props.height, width: props.width }} center={[props.coordinates[0]._lat, props.coordinates[0]._long]} zoom={20} minZoom={15} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {content}
    </MapContainer>;
}