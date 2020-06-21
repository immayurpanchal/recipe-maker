import React from 'react';
import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Recipe from './components/Recipe/Recipe';
import Shopping from './components/Shopping/Shopping';
import spoonacular from './api/spoonacular';
import Login from './components/Login/Login';

class App extends React.Component {
	state = {
		searchResults: [],
		selectedRecipe: null,
		shoppingList: [],
		isLoading: false,
		likedRecipes: [],
		isLoggedIn: false,
		isAuthFailed: false,
	};

	onGoogleLoginSuccess = () => {
		this.setState({ isLoggedIn: true, isAuthFailed: false });
	};

	onGoogleLoginFail = () => {
		this.setState({ isLoggedIn: false, isAuthFailed: true });
	};

	onSearchClick = async (query) => {
		this.setState({ isLoading: true });
		const res = await spoonacular.get('/recipes/search', { params: { query, apiKey: process.env.REACT_APP_API_KEY } });
		const SIZE = '240x150';
		const TYPE = 'jpg';
		const recipes = res.data.results.map((recipe) => {
			return { ...recipe, image: `https://spoonacular.com/recipeImages/${recipe.id}-${SIZE}.${TYPE}` };
		});
		this.setState({ searchResults: recipes, isLoading: false });
	};

	onRecipeSelected = async ({ id, readyInMinutes, servings, title }) => {
		const res = await spoonacular.get(`/recipes/${id}/ingredientWidget.json?`, {
			params: { apiKey: process.env.REACT_APP_API_KEY },
		});
		this.setState({ selectedRecipe: { ingredients: res.data.ingredients, readyInMinutes, servings, title, id } });
	};

	onAddToShoppingList = (ingredients) => {
		this.setState({
			shoppingList: [...this.state.shoppingList, ...ingredients],
		});
	};

	onRemoveIngredient = (id) => {
		const filteredShoppingList = this.state.shoppingList.filter((ingredient) => ingredient.id !== id);
		this.setState({ shoppingList: filteredShoppingList });
	};

	onLiked = (selectedRecipe) => {
		const index = this.state.likedRecipes.findIndex((recipe) => recipe.id === selectedRecipe.id);
		if (index === -1) {
			this.setState({
				likedRecipes: [...this.state.likedRecipes, selectedRecipe],
			});
		}
	};

	render() {
		if (!this.state.isLoggedIn) {
			return (
				<Login
					onGoogleLoginSuccess={this.onGoogleLoginSuccess}
					onGoogleLoginFail={this.onGoogleLoginFail}
					isAuthFailed={this.state.isAuthFailed}
				/>
			);
		}

		return (
			<div className='container'>
				<Header onSearchClick={this.onSearchClick} likedRecipes={this.state.likedRecipes} />
				{this.state.isLoading && (
					<div className='results'>
						<div className='loader'>
							<svg className='likes__icon'>
								<use href='img/icons.svg#icon-heart' />
							</svg>
						</div>
					</div>
				)}
				{!this.state.isLoading && (
					<RecipeList recipes={this.state.searchResults} onRecipeSelected={this.onRecipeSelected} />
				)}
				<Recipe
					recipe={this.state.selectedRecipe}
					onAddToShoppingList={this.onAddToShoppingList}
					onLiked={this.onLiked}
				/>
				<Shopping shoppingList={this.state.shoppingList} onRemoveIngredient={this.onRemoveIngredient} />
			</div>
		);
	}
}

export default App;
