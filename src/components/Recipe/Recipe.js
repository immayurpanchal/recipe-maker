import React from 'react';

const Recipe = (props) => {
	const SIZE = '556x370';
	const TYPE = 'jpg';
	return (
		<div className='recipe'>
			<figure className='recipe__fig'>
				<img
					src={props && props.recipe && `https://spoonacular.com/recipeImages/${props.recipe.id}-${SIZE}.${TYPE}`}
					alt={props && props.recipe && props.recipe.title}
					className='recipe__img'
				/>
				<h1 className='recipe__title'>
					<span>{props && props.recipe && props.recipe.title}</span>
				</h1>
			</figure>
			<div className='recipe__details'>
				<div className='recipe__info'>
					<svg className='recipe__info-icon'>
						<use href='img/icons.svg#icon-stopwatch' />
					</svg>
					<span className='recipe__info-data recipe__info-data--minutes'>
						{props && props.recipe && props.recipe.readyInMinutes}
					</span>
					<span className='recipe__info-text'> minutes</span>
				</div>
				<div className='recipe__info'>
					<svg className='recipe__info-icon'>
						<use href='img/icons.svg#icon-man' />
					</svg>
					<span className='recipe__info-data recipe__info-data--people'>
						{props && props.recipe && props.recipe.servings}
					</span>
					<span className='recipe__info-text'> servings</span>

					<div className='recipe__info-buttons'>
						<button className='btn-tiny'>
							<svg>
								<use href='img/icons.svg#icon-circle-with-minus' />
							</svg>
						</button>
						<button className='btn-tiny'>
							<svg>
								<use href='img/icons.svg#icon-circle-with-plus' />
							</svg>
						</button>
					</div>
				</div>
				<button className='recipe__love'>
					<svg className='header__likes'>
						<use href='img/icons.svg#icon-heart-outlined' />
					</svg>
				</button>
			</div>

			<div className='recipe__ingredients'>
				<ul className='recipe__ingredient-list'>
					{props &&
						props.recipe &&
						props.recipe.ingredients &&
						props.recipe.ingredients.map(({ name, amount: { us: { value, unit } } }) => {
							return (
								<li className='recipe__item'>
									<svg className='recipe__icon'>
										<use href='img/icons.svg#icon-check' />
									</svg>
									<div className='recipe__count'>{value}</div>
									<div className='recipe__ingredient'>
										<span className='recipe__unit'>{unit} </span>
										{name}
									</div>
								</li>
							);
						})}
				</ul>

				<button className='btn-small recipe__btn'>
					<svg className='search__icon'>
						<use href='img/icons.svg#icon-shopping-cart' />
					</svg>
					<span>Add to shopping list</span>
				</button>
			</div>

			<div className='recipe__directions'>
				<h2 className='heading-2'>How to cook it</h2>
				<p className='recipe__directions-text'>
					This recipe was carefully designed and tested by
					<span className='recipe__by'>The Pioneer Woman</span>. Please check out directions at their website.
				</p>
				<a className='btn-small recipe__btn' href='http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/'>
					<span>Directions</span>
					<svg className='search__icon'>
						<use href='img/icons.svg#icon-triangle-right' />
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Recipe;
