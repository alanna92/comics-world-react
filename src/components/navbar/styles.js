import styled from 'styled-components';
import { darken } from 'polished';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
`;

export const NavItem = styled(NavLink)`
    padding: 0 1rem;
    text-decoration: none;

    color: ${darken(0.4, 'white')};

    &.${(props) => props.activeClassName} {
        color: white;
        text-decoration: underline;
    }
`;

NavItem.defaultProps = {
    activeClassName: 'active',
};
