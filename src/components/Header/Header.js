import React from 'react';

const Header = (props) => {
	let inputText = '';
	const onSearchClick = (e) => {
		e.preventDefault();
		props.onSearchClick(inputText);
	};

	return (
		<header className='header'>
			<img src='img/logo.png' alt='Logo' className='header__logo' />
			<form className='search' onSubmit={onSearchClick}>
				<input
					type='text'
					className='search__field'
					placeholder='Search over 1,000,000 recipes...'
					onChange={(e) => (inputText = e.target.value)}
				/>
				<button className='btn search__btn' type='submit'>
					<svg className='search__icon'>
						<use href='img/icons.svg#icon-magnifying-glass' />
					</svg>
					<span>Search</span>
				</button>
			</form>
			<div className='likes'>
				<div className='likes__field'>
					<svg className='likes__icon'>
						<use href='img/icons.svg#icon-heart' />
					</svg>
				</div>
				<div className='likes__panel'>
					<ul className='likes__list'>
						{props &&
							props.likedRecipes &&
							props.likedRecipes.map(({ id, title }) => {
								return (
									<li key={id}>
										<a className='likes__link' href='#1'>
											<figure className='likes__fig'>
												<img src={`https://spoonacular.com/recipeImages/${id}-90x90.jpg`} alt='Test' />
											</figure>
											<div className='likes__data'>
												<h4 className='likes__name'>{title}</h4>
											</div>
										</a>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
