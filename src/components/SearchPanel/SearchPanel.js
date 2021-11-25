import style from './SearchPanel.module.css'
import { placeList } from '../../data/place';
import getData from '../../api/dataFetch';
import Keyboard from '../KeyBoard/Keyboard';

const SearchPanel = () => {
	const countriesOptions = placeList.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
	return (
		<div className={style.container}>
			<select>
				<option disabled selected value>請選擇縣市</option>
				{countriesOptions}
			</select>

			<div>搜尋 
				<input type="text" />
			</div>

			<div>
				搜尋結果
			</div> 
			
			<Keyboard onChange={(key) => console.log(key)}/>
		</div>
	);
}

export default SearchPanel;