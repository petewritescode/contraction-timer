import { Status } from '../../models/status.model';
import styled from 'styled-components';

interface Props {
    status: Status;
}

export const StyledPrimaryButton = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    transition: color 250ms;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.neutral.min};
    color: ${({ status, theme }) => {
        switch (status) {
            case Status.Contraction:
                return theme.color.status.contraction;
            case Status.Rest:
                return theme.color.status.rest;
            default:
                return theme.color.status.ready;
        }
    }};

    @media screen and (min-width: 375px) {
        width: 100px;
        height: 100px;
    }
`;
