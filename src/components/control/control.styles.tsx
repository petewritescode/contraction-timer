import styled, { css } from 'styled-components';
import { ControlType } from '../../models/control-type.model';
import { Status } from '../../models/status.model';

interface Props {
    controlType: ControlType;
    status: Status;
    disabled?: boolean;
    primary?: boolean;
}

export const StyledControl = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    transition: color 250ms;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.control};
    color: ${({ status, theme }) => {
        switch (status) {
            case Status.Contraction:
                return theme.color.background.contraction;
            case Status.Rest:
                return theme.color.background.rest;
            default:
                return theme.color.background.stopped;
        }
    }};

    ${({ primary }) => primary && css`
        width: 70px;
        height: 70px;

        @media screen and (min-width: 375px) {
            width: 100px;
            height: 100px;
        }
    `}

    ${({ disabled }) => disabled && css`
        opacity: 0.5;
    `}
`;
