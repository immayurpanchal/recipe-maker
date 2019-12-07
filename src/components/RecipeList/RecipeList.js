import React from 'react';

const RecipeList = () => {
	return (
		<div className='results'>
			<ul className='results__list'>
				<li>
					<a className='results__link results__link--active' href='#23456'>
						<figure className='results__fig'>
							<img src='img/test-1.jpg' alt='Test' />
						</figure>
						<div className='results__data'>
							<h4 className='results__name'>Pasta with Tomato ...</h4>
							<p className='results__author'>The Pioneer Woman</p>
						</div>
					</a>
				</li>
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
