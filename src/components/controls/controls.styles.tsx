import { breakpoint, spacing } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

export const StyledControls = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledPrimary = styled.li`
    margin-bottom: ${spacing('m')};

    ${breakpoint('s', css`
        margin-bottom: ${spacing('l')};
    `)}
`;
