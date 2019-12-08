import React from 'react';
import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Recipe from './components/Recipe/Recipe';
import Shopping from './components/Shopping/Shopping';
import spoonacular from './api/spoonacular';

class App extends React.Component {
	state = {
		searchResults : []
	};

	onSearchClick = async (query) => {
		const res = await spoonacular.get('/recipes/search', { params: { query, apiKey: process.env.REACT_APP_API_KEY } });
		this.setState({ searchResults: res.data.results });
	};

	render () {
		return (
			<div className='container'>
				<Header onSearchClick={this.onSearchClick} />
				<RecipeList recipes={this.state.searchResults} />
				<Recipe />
				<Shopping />
			</div>
		);
	}
}

export default App;
