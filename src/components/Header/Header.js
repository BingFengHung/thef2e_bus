import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<div className={style.container}>
			<div className={style.logo}>
				<FontAwesomeIcon className={style.icon} icon={faBus} />
				<p>Taiwan Bus</p>
			</div>
		</div>
	)
}

export default Header;