import React from 'react';

const Shopping = (props) => {
	if (!props.shoppingList) {
		return <div className='shopping' />;
	}

	const { shoppingList } = props;

	return (
		<div className='shopping'>
			<h2 className='heading-2'>My Shopping List</h2>
			<ul className='shopping__list'>
				{shoppingList.map(({ name, amount: { metric: { value, unit } }, id }) => {
					return (
						<li className='shopping__item' key={id}>
							<div className='shopping__count'>
								<input type='number' value={value} step='100' />
								<p>{unit}</p>
							</div>
							<p className='shopping__description'>{name}</p>
							<button className='shopping__delete btn-tiny' onClick={() => props.onRemoveIngredient(id)}>
								<svg>
									<use href='img/icons.svg#icon-circle-with-cross' />
								</svg>
							</button>
						</li>
					);
				})}
			</ul>

			<div className='copyright'>
				&copy; by Mayur Panchal. Powered by
				<a href='http://food2fork.com' className='link'>
					Food2Fork.com
				</a>.
			</div>
		</div>
	);
};

export default Shopping;
