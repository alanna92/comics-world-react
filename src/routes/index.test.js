import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Routes from '.';
import { render, screen } from '@testing-library/react';

test('Must render/navigate to comics page', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <Routes />
        </Router>
    );

    expect(screen.getByText('Comics')).toBeInTheDocument();
});

test('Must render/navigate to characters page', () => {
    const history = createMemoryHistory();
    history.push('/characters');
    render(
        <Router history={history}>
            <Routes />
        </Router>
    );

    expect(screen.getByText('Characters')).toBeInTheDocument();
});