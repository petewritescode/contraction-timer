import styled, { css, keyframes } from 'styled-components';
import { Status } from '../../models/status.model';

const SCALE_PERCENT = 5;
const SCALE_GROW = (100 + SCALE_PERCENT) / 100;
const SCALE_SHRINK = (100 - SCALE_PERCENT) / 100;

interface Props {
    status: Status;
}

const contraction = keyframes`
    0% { transform: scale(1); }
    20% { transform: scale(${SCALE_SHRINK}); }
    100% { transform: scale(1); }
`;

const rest = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(${SCALE_GROW}); }
    100% { transform: scale(1); }
`;

export const StyledStatusIndicator = styled.div<Props>`
    width: 100%;
    height: 100%;
    border: 4px solid #ffffff;
    border-radius: 50%;

    ${({ status }) => status === Status.Contraction && css`
        animation: ${contraction} 1000ms ease-out infinite;
    `}

    ${({ status }) => status === Status.Rest && css`
        animation: ${rest} 3000ms ease-out infinite;
    `}
`;
