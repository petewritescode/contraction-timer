import { breakpoint, color, statusColor, transitionDuration } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';
import { Status } from '../../models/status.model';

interface Props {
    status: Status;
}

export const StyledPrimaryButton = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    transition: color ${transitionDuration};
    border-radius: 50%;
    background-color: ${color('neutralMin')};
    color: ${statusColor};

    ${breakpoint('s', css`
        width: 6rem;
        height: 6rem;
    `)}
`;
