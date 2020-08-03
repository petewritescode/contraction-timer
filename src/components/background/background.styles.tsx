import { Status } from '../../models/status.model';
import styled from 'styled-components';

interface Props {
    status: Status;
}

export const StyledBackground = styled.div<Props>`
    width: 100%;
    height: 100%;
    transition: background-color 250ms;
    background-color: ${({ status, theme }) => {
        switch (status) {
            case Status.Contraction:
                return theme.color.contraction;
            case Status.Rest:
                return theme.color.rest;
            default:
                return theme.color.ready;
        }
    }};
`;
