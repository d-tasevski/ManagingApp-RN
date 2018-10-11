import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchEmployees } from '../actions';

class EmployeeList extends Component {
	componentDidMount() {
		this.props.fetchEmployees();
	}

	render() {
		return (
			<View>
				<Text>Alexanne Bechtelar</Text>
				<Text>Adrien Huel</Text>
				<Text>Dulce Lindgren II</Text>
				<Text>Dr. Jalon Koch</Text>
				<Text>Ashleigh Rohan</Text>
				<Text>Titus Berge</Text>
				<Text>Luigi Jacobi</Text>
				<Text>Isabella Kshlerin IV</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	employees: state.employees,
});

const mapDispatchToProps = dispatch => ({
	fetchEmployees: () => dispatch(fetchEmployees()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EmployeeList);
