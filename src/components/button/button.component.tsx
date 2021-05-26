import { StyledButton, StyledLabel } from './button.styles';
import { ButtonType } from '../../models/button-type.model';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { IconType } from '../../models/icon-type.model';
import React from 'react';

interface Props {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: IconType;
    type?: ButtonType;
}

export const Button: React.FC<Props> = ({
    label,
    onClick,
    disabled = false,
    icon,
    type: buttonType = ButtonType.Default,
}) => (
    <StyledButton type="button" disabled={disabled} onClick={onClick} buttonType={buttonType}>
        {icon && <Icon type={icon} size={IconSize.Small} />}
        <StyledLabel>{label}</StyledLabel>
    </StyledButton>
);
