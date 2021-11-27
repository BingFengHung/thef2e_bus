import style from './SearchResultPages.module.css'
import Tabs from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux';
import getData from '../../api/dataFetch';
import { useEffect, useState } from 'react';

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

			setRoute1(path1.map((path, idx) =>
				<div key={idx}>{getStopName(path)}</div>
			))

			setRoute2(path2.map((path, idx) =>
				<div key={idx}>{getStopName(path)}</div>
			))
		}

	}, [stops, hasStopData])

	if (hasStopData) {
		console.log(stops)
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
			</div>
		)
	} else {
		return (<>尚未搜尋</>)
	}



}

export default SearchResultPages;