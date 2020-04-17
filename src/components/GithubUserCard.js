import React from 'react';
import { withStyles } from '@material-ui/styles';
import { fontSize } from '@material-ui/system';

const styles = {
	root: {
		margin: '1.25rem',
		border: 'thin solid gray',
		padding: '2vh 2vw',
		width: '25vw',
		textAlign: 'center',
		backgroundImage: 'url(${(props) => props.image})',
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	},
	text: {
		backgroundColor: '#00000080',
		padding: '5px',
		color: 'white',
		textShadow: '1px 1px 0px black'
	},
	name: {
		color: '#A9D3E9',
		fontSize: '2em'
	}
};

class GithubUserCard extends React.Component {
	state = {
		followers: []
	};
	componentDidMount() {
		fetch(this.props.user.followers_url, {
			headers: { authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}` }
		})
			.then((res) => {
				//console.log(res);
				return res.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({ followers: json });
			});
	}
	render() {
		return (
			<div>
				<p className={this.props.classes.name}>{this.props.user.login}</p>
				<p> Number of followers {this.state.followers.length}</p>
			</div>
		);
	}
}

export default withStyles(styles)(GithubUserCard);

// 0:
// login: "mojombo"
// id: 1
// node_id: "MDQ6VXNlcjE="
// avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
// gravatar_id: ""
// url: "https://api.github.com/users/mojombo"
// html_url: "https://github.com/mojombo"
// followers_url: "https://api.github.com/users/mojombo/followers"
// following_url: "https://api.github.com/users/mojombo/following{/other_user}"
// gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}"
// starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/mojombo/subscriptions"
// organizations_url: "https://api.github.com/users/mojombo/orgs"
// repos_url: "https://api.github.com/users/mojombo/repos"
// events_url: "https://api.github.com/users/mojombo/events{/privacy}"
// received_events_url: "https://api.github.com/users/mojombo/received_events"
// type: "User"
// site_admin: false
