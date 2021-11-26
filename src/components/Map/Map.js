import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useRef } from 'react';
import style from './Map.module.css'
import { useSelector } from "react-redux";

const Map = ({country}) => {
	const mapContainer = useRef()

	useEffect(() => {
		const map = L.map(mapContainer.current, {
			center: [21, 123],
			zoom: 16
		});
		const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
		L.tileLayer(osmUrl, {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		var greenIcon = new L.Icon({
			iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});

		// data.forEach(item => { 
		// 	L.marker([item.StationPosition.PositionLat, item.StationPosition.PositionLon], {icon: greenIcon}).addTo(map) 
		// 	.bindPopup(`<h1>${item.StationAddress.Zh_tw}</h1>`) 
		// }) 

		// unmount map function
		return () => map.remove();

	})

	return (
		<div className={style.container}
			ref={el => mapContainer.current = el}>
		</div>
	)
}

export default Map;
