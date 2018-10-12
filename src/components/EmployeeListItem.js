import React from 'react';
import { Actions } from 'react-native-router-flux';
import { ListItem } from 'react-native-elements';

const EmployeeListItem = ({ employee }) => {
	const onPress = () => Actions.employeeCreate({ employee, title: 'Edit Employee' });

	return (
		<ListItem
			roundAvatar
			title={`${employee.name}`}
			subtitle={employee.shift}
			avatar={require('../assets/id-badge.png')}
			containerStyle={{ borderBottomWidth: 0 }}
			onPressRightIcon={onPress}
		/>
	);
};

export default EmployeeListItem;
