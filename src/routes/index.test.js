import React from 'react';
import { Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import { render, screen } from '@testing-library/react';
import Routes from '.';

test('Must render/navigate to comics page', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <Routes />
        </Router>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Comics'
    );
});

test('Must render/navigate to characters page', () => {
    const history = createMemoryHistory();
    history.push('/characters');
    render(
        <Router history={history}>
            <Routes />
        </Router>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Characters'
    );
});
