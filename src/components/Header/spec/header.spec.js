import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
	it('Render the component', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
