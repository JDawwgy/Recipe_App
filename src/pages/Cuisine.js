import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Cusine() {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	const getCuisine = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dd81d850e90747f5a795cb7526bf76c3&number=12&cuisine=${name}`);
		const recipes = await data.json();
		setCuisine(recipes.results);
	}

	useEffect(() => {
		getCuisine(params.type);
		// console.log(params);
	}, [params.type]);

	return (
		<Grid>
			{cuisine.map((item) => {
				return (
					<Card key={item.id}>
						<img src={item.image} alt="food" />
						<h4>{item.title}</h4>
					</Card>
				);
			})}
		</Grid>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const Card = styled.div`
	img {
		border-radius: 2em;
		width: 100%;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

export default Cusine;