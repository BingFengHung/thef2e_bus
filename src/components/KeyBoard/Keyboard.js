import style from './Keyboard.module.css'

const Keyboard = ({onChange}) => {
	const keyCode = [
		'紅','藍','綠','棕', '橘',
		'小', '市民', '1', '2', '3',
		'南軟', '夜間', '4', '5', '6',
		'通勤', '內科', '7', '8', '9',
		'更多', '幹線', '重設', '0', '搜尋'];

	function onClick(e) {
		onChange(e.target.innerText)
	}

	const key = keyCode.map((i, idx) => <div className={style.button} key={idx} onClick={onClick}>{i}</div>)

	return (
		<div className={style.container}>
				{key}
		</div>
	)
}

export default Keyboard;