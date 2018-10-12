import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import { fetchEmployees } from '../actions';
import Spinner from './common/Spinner';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
	componentDidMount() {
		this.props.fetchEmployees();
	}

	renderSeparator = () => (
		<View
			style={{
				height: 1,
				width: '86%',
				backgroundColor: '#CED0CE',
				marginLeft: '14%',
			}}
		/>
	);

	renderHeader = () => <SearchBar placeholder="Type Here..." lightTheme round />;

	render() {
		const { employees } = this.props;

		return (
			<List
				containerStyle={{
					flex: 1,
					borderTopWidth: 0,
					borderBottomWidth: 0,
					marginTop: 0,
				}}
			>
				{this.props.employees.isLoading ? (
					<Spinner />
				) : (
					<FlatList
						data={employees.data}
						renderItem={({ item }) => <EmployeeListItem employee={item} />}
						keyExtractor={item => item.id}
						ItemSeparatorComponent={this.renderSeparator}
						ListHeaderComponent={
							employees.data.length >= 10 ? this.renderHeader : false
						}
					/>
				)}
			</List>
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
