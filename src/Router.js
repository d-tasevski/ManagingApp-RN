import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const RouterComponent = () => {
	return (
		<Router sceneStyle={styles.container}>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Authentication" initial />
				</Scene>
				<Scene key="main">
					<Scene
						key="employeeList"
						component={EmployeeList}
						title="Employee List"
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						initial
					/>
					<Scene key="employeeCreate" component={EmployeeForm} title="Add Employee" />
				</Scene>
			</Scene>
		</Router>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
});

export default RouterComponent;
