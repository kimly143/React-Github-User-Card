import React from 'react';
import './App.css';
import GithubUserCard from './components/GithubUserCard'

class App extends React.Component {
	state = { users: [] };
	componentDidMount() {
		fetch('https://api.github.com/users/kimly143/followers', {
			headers: { authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}` }
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({ users: json });
			});
	}

	render() {
		return <div className="App">{this.state.users.map((user) => <GithubUserCard user={user} />)}</div>;
	}
}

export default App;
