import React from 'react';
import { ListItem } from 'react-native-elements';

const EmployeeListItem = ({ employee }) => {
	return (
		<ListItem
			roundAvatar
			title={`${employee.name}`}
			subtitle={employee.shift}
			avatar={require('../assets/id-badge.png')}
			containerStyle={{ borderBottomWidth: 0 }}
		/>
	);
};

export default EmployeeListItem;
