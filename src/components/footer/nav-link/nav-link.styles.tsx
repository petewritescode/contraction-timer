import { borderWidth, color, pxToRem, spacing } from '../../../theme/helpers/theme.helpers';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${pxToRem(50)};
    border-top: ${borderWidth('m')} solid transparent;
    font-weight: bold;

    &.active {
        border-color: ${color('neutralMin')};
    }

    &:not(.active) {
        &:hover {
            border-color: ${color('neutralMin50')};
        }
    }
`;

export const StyledIcon = styled.div`
    margin-right: ${spacing('s')};
`;
