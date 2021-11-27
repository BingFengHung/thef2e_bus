import { useDispatch } from 'react-redux';
import getData from '../../api/dataFetch';
import style from './SearchResult.module.css'

const SearchResult = ({country, data }) => { 
	const dispatch = useDispatch();
	const getStopOfRoute = (routeName) => { 
		// /v2/Bus/StopOfRoute/City/{City}/{RouteName} 
		getData(`/v2/Bus/StopOfRoute/City/${country}/${routeName.RouteName.Zh_tw}`)
		.then(res => {
			dispatch({
					type: 'Stops', 
					payload: { stops: res }
			})
		}) 
	}

	const li = data?.map(i => {
		return (
			<div className={style.result} onClick={() => getStopOfRoute(i)}>
				<div>{i.RouteName.Zh_tw}</div>
				<div className={style.route}>
					<div>{i.DepartureStopNameZh}</div>
					<div>{i.DestinationStopNameZh}</div>
				</div>
			</div>
		)
	});

	// setResult(li)

	return (
		<div className={style.container}>
			{li}
		</div>
	)
}

export default SearchResult