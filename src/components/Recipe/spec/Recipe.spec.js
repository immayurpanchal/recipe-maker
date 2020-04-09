import React from 'react';
import { render } from '@testing-library/react';
import Recipe from '../Recipe';

describe('Header component', () => {
	it('Render the component', () => {
		const { container } = render(<Recipe />);
		expect(container).toMatchSnapshot();
	});

	it('Pass the props', () => {
		const recipe = {
			title: '',
			readyInMinutes: '',
			servings: '',
			ingredients: [
				{
					name: 'test',
					amount: {
						us: { value: 20, unit: 41 },
					},
					id: 2,
				},
			],
		};

		const { container } = render(
			<Recipe recipe={recipe} onAddToShoppingList={() => jest.fn()} onLiked={() => jest.fn()} />
		);

		expect(container).toMatchSnapshot();
	});
});
