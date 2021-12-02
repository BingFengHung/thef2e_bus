import style from './SearchPage.module.css'
import { placeList } from '../../data/place'

const SearchPage = () => {
	const countries = placeList;
	const countrySelect = countries.map((country, idx) => 
		<button key={idx}>{country[0]}</button>
	)


	return (
		<div className={style.container}>
			<input/>
			<div className={style.country_wrapper}>
				{countrySelect}
			</div>
		</div>
	)
}

export default SearchPage;