import React from 'react';
import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Recipe from './components/Recipe/Recipe';
import Shopping from './components/Shopping/Shopping';
import spoonacular from './api/spoonacular';

class App extends React.Component {
	state = {
		searchResults  : [],
		selectedRecipe : null,
		shoppingList   : []
	};

	onSearchClick = async (query) => {
		const res = await spoonacular.get('/recipes/search', { params: { query, apiKey: process.env.REACT_APP_API_KEY } });
		const SIZE = '240x150';
		const TYPE = 'jpg';
		const recipes = res.data.results.map((recipe) => {
			return { ...recipe, image: `https://spoonacular.com/recipeImages/${recipe.id}-${SIZE}.${TYPE}` };
		});
		this.setState({ searchResults: recipes });
	};

	onRecipeSelected = async ({ id, readyInMinutes, servings, title }) => {
		const res = await spoonacular.get(`/recipes/${id}/ingredientWidget.json?`, {
			params : { apiKey: process.env.REACT_APP_API_KEY }
		});
		this.setState({ selectedRecipe: { ingredients: res.data.ingredients, readyInMinutes, servings, title, id } });
	};

	onAddToShoppingList = (ingredients) => {
		this.setState({
			shoppingList : [
				...this.state.shoppingList,
				...ingredients
			]
		});
	};

	onRemoveIngredient = (id) => {
		const filteredShoppingList = this.state.shoppingList.filter((ingredient) => ingredient.id !== id);
		this.setState({ shoppingList: filteredShoppingList });
	};

	render () {
		return (
			<div className='container'>
				<Header onSearchClick={this.onSearchClick} />
				<RecipeList recipes={this.state.searchResults} onRecipeSelected={this.onRecipeSelected} />
				<Recipe recipe={this.state.selectedRecipe} onAddToShoppingList={this.onAddToShoppingList} />
				<Shopping shoppingList={this.state.shoppingList} onRemoveIngredient={this.onRemoveIngredient} />
			</div>
		);
	}
}

export default App;
