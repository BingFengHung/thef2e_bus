import style from './BusSchedule.module.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getData from '../../api/dataFetch';


const BusSchedule = () => {
	const stops = useSelector(state => state.stops);
	const [hasStopData, setHasStopData] = useState(false)

	useEffect(() => {
		if (stops !== null) {
			setHasStopData(true)
			const fetchData = async () => {
				await getData(`/v2/Bus/Schedule/City/${stops[0].City}/${stops[0].RouteName.Zh_tw}?$format=JSON`) 
				.then(res => {
					console.log(res)
					let fromRoute = res[0]
					let toRoute = res[1]

				});
			}

			fetchData()
		}

	}, [stops, hasStopData])

	if (hasStopData) {
		return (<div>形成</div>)
	} else {
		return <></>
	}

}

export default BusSchedule
