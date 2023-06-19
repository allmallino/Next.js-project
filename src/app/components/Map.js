"use client"
import L from 'leaflet';
import { useRef } from 'react';
import { styled } from 'styled-components';
import { MapContainer, TileLayer, Polyline, Popup, Marker } from 'react-leaflet';
import css from 'styled-jsx/css';
require('leaflet/dist/leaflet.css');

export default function Map(props) {

    let content;
    if (props.coordinates.length > 1) {
        content = (<>
            <Marker position={[props.coordinates[0].latitude, props.coordinates[0].longitude]}>
                <Popup>
                    Початок
                </Popup>
            </Marker>
            <Polyline pathOptions={{ color: 'red' }} positions={props.coordinates.map((v) => { return [parseFloat(v.latitude), parseFloat(v.longitude)] })} />
            <Marker position={[props.coordinates[props.coordinates.length - 1].latitude, props.coordinates[props.coordinates.length - 1].longitude]}>
                <Popup>
                    Кінець
                </Popup>
            </Marker>
        </>)
    } else {
        content = (
            <Marker position={[props.coordinates[0].latitude, props.coordinates[0].longitude]}>
                <Popup>
                    {props.title}
                </Popup>
            </Marker>)
    }
    return (
        <MapContainer style={{ height: props.height, width: props.width }} center={[props.coordinates[0].latitude, props.coordinates[0].longitude]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {content}
        </MapContainer>
    );


}