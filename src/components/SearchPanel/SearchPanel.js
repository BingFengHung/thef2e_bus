import style from './SearchPanel.module.css'
import { placeList } from '../../data/place';
import getData from '../../api/dataFetch';
import Keyboard from '../KeyBoard/Keyboard';
import { useState } from 'react';
import SearchResult from '../SearchResult/SearchResult';

const SearchPanel = () => {
	const countriesOptions = placeList.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
	const [searchValue, setSearchValue] = useState('')
	const [countrySelect, setCountrySelect] = useState('')
	const [searchResultList, setSearchResultList] = useState(null)

	const onCountrySelect = (e) => {
		setCountrySelect(e.target.value)
	}

	return (
		<div className={style.container}>
				<div className={style.search_container}>
				<select onChange={onCountrySelect}>
					<option disabled selected value>請選擇縣市</option>
					{countriesOptions}
				</select>

				<div>
					搜尋
					<input type="text" value={searchValue} />
				</div>
				<div>

					<Keyboard onChange={(key) => {
						if (key === '重設') {
							setSearchValue('');
						} else if (key === '搜尋') {
							getData(`/v2/Bus/Route/City/${countrySelect}?$filter=contains(RouteName/Zh_tw,'${searchValue}')&$top=30&$format=JSON`)
								.then(res => {
									setSearchResultList(res);
								})
						} else {
							setSearchValue(searchValue + key);
						}
					}} />
				</div> 
				</div>

				<div className={style.searchResult}>
					搜尋結果
					<div>
						<SearchResult country={countrySelect} data={searchResultList} />
					</div>
				</div>
			</div>
	);
}

export default SearchPanel;