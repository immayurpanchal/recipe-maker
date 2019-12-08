import React from 'react';

const RecipeList = (props) => {
	return (
		<div className='results'>
			<ul className='results__list'>
				{props.recipes.map(({ title, image, id, readyInMinutes, servings }) => {
					return (
						<li key={id} onClick={() => props.onRecipeSelected({ id, readyInMinutes, servings, title })}>
							<a className='results__link results__link--active' href='#1'>
								<figure className='results__fig'>
									<img src={image} alt='Test' />
								</figure>
								<div className='results__data'>
									<h4 className='results__name'>{title}</h4>
								</div>
							</a>
						</li>
					);
				})}
			</ul>

			{/* <div className='results__pages'>
				<button className='btn-inline results__btn--prev'>
					<svg className='search__icon'>
						<use href='img/icons.svg#icon-triangle-left' />
					</svg>
					<span>Page 1</span>
				</button>
				<button className='btn-inline results__btn--next'>
					<span>Page 3</span>
					<svg className='search__icon'>
						<use href='img/icons.svg#icon-triangle-right' />
					</svg>
				</button>
			</div> */}
		</div>
	);
};

export default RecipeList;
