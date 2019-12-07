import React from 'react';
import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Recipe from './components/Recipe/Recipe';
import Shopping from './components/Shopping/Shopping';

class App extends React.Component {
	render () {
		return (
			<div className='container'>
				<Header />
				<RecipeList />
				<Recipe />
				<Shopping />
			</div>
		);
	}
}

export default App;
