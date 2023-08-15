import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom' 

function Cusine() {
	
	const getCuisine = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dd81d850e90747f5a795cb7526bf76c3&number=12&cuisine=${name}`);
	}
	
	return (
		<div>
			
		</div>
	);
}

export default Cusine;