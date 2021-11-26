import { useState } from 'react';
import style from './SearchResult.module.css'

const SearchResult = ({data}) => {
	const li = data?.map(i => {
		return ( 
		<div className={style.result}> 
			<div>{i.RouteName.Zh_tw}</div>
			<div className={style.route}>
				<div>{i.DepartureStopNameZh}</div>
				<div>{i.DestinationStopNameZh}</div>
			</div>
		</div>
		)}); 
	
	// setResult(li)

	return (
		<div className={style.container}>
			{li}
		</div>
	)
}

export default SearchResult