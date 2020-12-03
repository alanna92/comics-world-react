import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import { screen, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRouter } from '../../utils/test-utils';
import Navbar from '.';

test('must render navbar itens', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const comicsLink = screen.getByTestId('comics-link');
    const charactersLink = screen.getByTestId('characters-link');

    expect(comicsLink).toHaveTextContent('Comics');
    expect(comicsLink.pathname).toBe('/');

    expect(charactersLink).toHaveTextContent('Characters');
    expect(charactersLink.pathname).toBe('/characters');
});

test('must navigate to characters page', () => {
    const history = createMemoryHistory();

    renderWithRouter(<Navbar />, history);

    const charactersLink = screen.getByTestId('characters-link');

    expect(charactersLink.pathname).toBe('/characters');

    fireEvent.click(charactersLink);

    expect(history.location.pathname).toBe('/characters');
});

test('must navigate to comics page', () => {
    const history = createMemoryHistory();

    renderWithRouter(<Navbar />, history);

    const comicsLink = screen.getByTestId('comics-link');

    expect(comicsLink.pathname).toBe('/');

    fireEvent.click(comicsLink);

    expect(history.location.pathname).toBe('/');
});
