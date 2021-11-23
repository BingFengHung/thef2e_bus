import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { placeList } from '../../data/place';
import { useDispatch } from 'react-redux';

const Header = () => {
	const countriesOptions = placeList.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
	const dispatch = useDispatch();

	function handleChange(e) {
		dispatch({
			type: 'Country',
			payload: { country: e.target.value }
		})
	}

	return (
		<div className={style.container}>
			<div className={style.logo}>
				<FontAwesomeIcon className={style.icon} icon={faBus} />
				<p>Taiwan Bus</p>
			</div>

			<div className={style.menu}>
				<p>縣市：</p>
				<select onChange={handleChange}>
					<option dislabed selected value>請選擇縣市</option>
					{countriesOptions}
				</select>
			</div>
		</div>
	)
}

export default Header;