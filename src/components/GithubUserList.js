// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import GithubUserCard from './GithubUserCard';

// const Grid = styled.section`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-evenly;
// `;

// export default function CharacterList() {
// 	const [ characters, setCharacters ] = useState([]);
// 	const [ query, setQuery ] = useState('');
// 	const queryRX = new RegExp(query, 'i');
// 	const [ error, setError ] = useState(null);

// 	useEffect(() => {
// 		axios
// 			.get(ricknmorty_URL)
// 			.then((response) => {
// 				setCharacters(response.data.results);
// 				//console.log(response.data);
// 			})
// 			.catch((err) => {
// 				console.error('Server Error', err);
// 				//STRETCH
// 				setError(err.message);
// 			});
// 	}, []);

// 	if (error != null) {
// 		return (
// 			<section className="character-list">
// 				<div>{error}</div>
// 			</section>
// 		);
// 	}
// 	return (
// 		<section className="character-list">
// 			<SearchForm query={query} setQuery={setQuery} />
// 			<Grid>
// 				{characters
// 					.filter((character) => {
// 						if (query == '') return true;
// 						return queryRX.test(character.name);
// 					})
// 					.map((character) => <GithubUserCard character={character} key={character.id} />)}
// 			</Grid>
// 		</section>
// 	);
// }
