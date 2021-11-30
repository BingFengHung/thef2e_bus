import style from './SearchResultPages.module.css'
import Tabs from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux';
import getData from '../../api/dataFetch';
import { useEffect, useState } from 'react';
import BusSchedule from '../../components/BusSchedule/BusSchedule';

const getStopName = (stops) => stops.StopName.Zh_tw

const SearchResultPages = () => {
	const stops = useSelector(state => state.stops);
	const [hasStopData, setHasStopData] = useState(false)
	const [route1, setRoute1] = useState(null)
	const [route2, setRoute2] = useState(null)

	const [title1, setTitle1] = useState('')
	const [title2, setTitle2] = useState('')

	useEffect(() => {
		if (stops !== null) {
			setHasStopData(true)
			let path1 = stops[0].Stops;
			let path2 = stops[1].Stops;
			setTitle1(getStopName(path1[0]) + '->' + getStopName(path1[path1.length - 1]))
			setTitle2(getStopName(path2[0]) + '->' + getStopName(path2[path2.length - 1]))


			// console.log(path1)

			const fetchData = async () => { 
				await getData(`/v2/Bus/EstimatedTimeOfArrival/City/${stops[0].City}/${stops[0].RouteName.Zh_tw}?$format=JSON`) 
				.then(res => { 
					// console.log(res) 
					const stop1 = []
					const stop2 = []

					res.forEach(data => {
							// Direction 0: 去 / 1: 返
							if (data.Direction === 0) {
								stops[0].Stops.forEach( i => {
									if (i.StopName.Zh_tw === data.StopName.Zh_tw) {
										// i = {...i, ...data};
										stop1.push({...i, ...data})
										return false;
									}
								});
							} else { 
	 							stops[1].Stops.forEach( i => {
									if (i.StopName.Zh_tw === data.StopName.Zh_tw) {
										stop2.push({...i, ...data})
										// i = {...i, ...data};
										return false;
									}
								});
							} 
					})

					stop1.sort((a, b) => a.StopSequence - b.StopSequence)
					stop2.sort((a, b) => a.StopSequence - b.StopSequence)
						// i => i.StopSequence)
					// stop2.sort(i => i.StopSequence)
					// console.log(stop1)
					// console.log(stop2) 
					
					setRoute1(stop1.map((path, idx) => {
						let estimate = 0
						let estTag = <div>已過站</div>

						if (path.hasOwnProperty('EstimateTime')) {
							estimate = parseInt(path.EstimateTime)
							estTag = <div>{`預估: ${estimate}`}</div>
						}

						return (
						<div className={style.stops}> 
							<div key={idx}>{getStopName(path)}</div> 
							{estTag}
						</div>)
					})) 
					
					setRoute2(stop2.map((path, idx) => {
						// console.log(path)
						let estimate = 0
						let estTag = <div>已過站</div>

						if (path.hasOwnProperty('EstimateTime')) {
							estimate = parseInt(path.EstimateTime) / 60
							if (estimate <= 1) {
								estTag = <div>{`即將進站`}</div>
							} else { 
								estTag = <div>{`預估: ${estimate} 分鐘`}</div>
							}
						}

						return (
						<div className={style.stops}> 
							<div key={idx}>{getStopName(path)}</div>
							{estTag}
						</div>)

					}))
				})
			}

			fetchData();
		}

	}, [stops, hasStopData])

	if (hasStopData) {
		return (
			<div className={style.container}>
				<Tabs>
					<div label={title1}>
						{route1}
					</div>

					<div label={title2}>
						{route2}
					</div>
				</Tabs>

				<BusSchedule/>
			</div>
		)
	} else {
		return (<>尚未搜尋</>)
	}



}

export default SearchResultPages;