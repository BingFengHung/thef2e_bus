import style from './Tab.module.css'

const Tab = ({activeTab, label, onClick}) => {
	const clickHandle = () => {
		onClick(label)
	} 

	let className = style.tab_list_item;

	if (activeTab === label) {
		className += " " +  style.tab_list_active;
	}

	return (
			<li className={className}
			onClick={clickHandle}>
				{label}
			</li>
	)
}

export default Tab;