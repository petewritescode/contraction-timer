import styled, { css } from 'styled-components';
import { ControlType } from '../../models/control-type.model';

interface Props {
    controlType: ControlType;
    primary?: boolean;
}

export const StyledControl = styled.button<Props>`
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.color.control.border};
    border-radius: 50%;
    color: ${({ theme }) => theme.color.control.icon};

    ${({ primary }) => primary && css`
        width: 100px;
        height: 100px;
    `}

    ${({ controlType, theme }) => controlType && theme.color.control.type[controlType] && css`
        border: 0;
        background-color: ${theme.color.control.type[controlType]};
    `}
`;
