import Tab from '../Tab/Tab';
import style from './Tabs.module.css'
import { useState } from 'react';

const Tabs = ({children}) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label)

	const onClickTabItem = tab => {
		setActiveTab(tab)
	}

	return (
		<div className={style.tabs}>
			<ol className={style.tab_list}>
				{children.map((child) => {
					const { label } = child.props

					return (
						<Tab activeTab={activeTab}
						     key={label}
								 label={label}
								 onClick={onClickTabItem} />
					);
				})}
			</ol>

			<div className={style.tab_content}>
				{children.map(child => {
					if (child.props.label !== activeTab) return undefined;
					return child.props.children;
				})}
			</div>
		</div>
	)

}

export default Tabs;