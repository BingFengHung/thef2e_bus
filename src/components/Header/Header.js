import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { placeList } from '../../data/place';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import getData from '../../api/dataFetch';

const Header = () => {
	const countriesOptions = placeList.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
	const [stopOptions, setStopOptions] = useState([])
	const dispatch = useDispatch();

	const fetchData = async (country) => {
		let cityStops = null;
     await getData(`/v2/Bus/Route/City/${country}?$top=30`)
      .then(res => {
        cityStops = res;
      });

      // await getData(`/v2/Bus/Route/City/${countries}/${cityStop[0].RouteName.Zh_tw}`)
      // .then(res => {
      //   stops = res;
      // });
	}

	function handleChange(e) {
		let country = e.target.value;

		dispatch({
			type: 'Country',
			payload: { country: e.target.value }
		})

		fetchData(country)
	}

	const handleStopChange = () => {}

	useEffect(() => {
	}, [])

	return (
		<div className={style.container}>
			<div className={style.logo}>
				<FontAwesomeIcon className={style.icon} icon={faBus} />
				<p>Taiwan Bus</p>
			</div>

			<div className={style.menu}>
				<p>縣市：</p>
				<select onChange={handleChange}>
					<option disabled selected value>請選擇縣市</option>
					{countriesOptions}
				</select>

				<select onChange={handleStopChange}>
					<option disabled selected value>站點</option>
					{stopOptions}
				</select>
			</div>
		</div>
	)
}

export default Header;