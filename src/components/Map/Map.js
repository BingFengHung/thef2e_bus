import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useRef } from 'react';
import style from './Map.module.css'
import { useSelector } from "react-redux";

const Map = ({ country }) => {
	const mapContainer = useRef()
	const stops = useSelector(state => state.stops);

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


		if (stops !== null) {
			stops.forEach(route => {
				route.Stops.forEach((stop, idx) => {
					// alert(JSON.stringify(stop.StopName))
					L.marker([stop.StopPosition.PositionLat, stop.StopPosition.PositionLon],
						{ icon: greenIcon }).addTo(map)
						.bindPopup(
							`<h1>${stop.StopName.Zh_tw}</h1>`
						)
				})

			})

			console.log(stops)
			console.log(stops[0].Stops[0].StopPosition.PositionLat);
			console.log(stops[0].Stops[0].StopPosition.PositionLon);

			var corner1 = L.latLng(stops[0].Stops[0].StopPosition.PositionLat, stops[0].Stops[0].StopPosition.PositionLon),
				corner2 = L.latLng(
					stops[0].Stops[stops[0].Stops.length - 1].StopPosition.PositionLat,
					stops[0].Stops[stops[0].Stops.length - 1].StopPosition.PositionLon);

			// var bounds = L.latLngBounds(corner1, corner2); 
			map.fitBounds([corner1, corner2])

			// map.panTo([
			// 	stops[0].Stops[0].StopPosition.PositionLat, 
			// 	stops[0].Stops[0].StopPosition.PositionLon])
		}

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
