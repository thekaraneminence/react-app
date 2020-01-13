import React from 'react';
import './App.css';
import Header from './components/header';
import TableRow from './components/jobItemRow';
import Main from './components/main';
import axios from 'axios';

class App extends React.Component {
  	constructor() {
		super();
		this.state = {
			users: [],
			data: [
				{
					"id": 1,
					"name": "Foo",
					"age": "20"
				},
				{
					"id": 2,
					"name": "Bar",
					"age": "30"
				},
				{
					"id": 3,
					"name": "Baz",
					"age": "40"
				}
			]
		}
	  }
	componentDidMount() {
		
		// Fetch Data
		// fetch('https://jsonplaceholder.typicode.com/users')
		//  .then(response => response.json())
		//  .then(users => this.setState({ users }));

		//Axios Call
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => response.data)
		.then(users => this.setState({ users }))
	}

    render() {
	    return (
			<React.Fragment>
				<Header/>
				<Main />

				{/* json Data through fetch  */}
				{/* <div>
					<ul>
					{
						this.state.users.map(usr =>
							<li key={usr.id}>{usr.name}<br/> {usr.email}</li>
						)
					}
					</ul>
				</div> */}

				{/* Manuel Json Data Call and use */}
				{/* <table>
					<tbody>
						{this.state.data.map((person, i) => <TableRow key = {i} 
							data = {person} />)}
					</tbody>
				</table> */}
			</React.Fragment>
		);
	}
}

export default App;