import React, { FunctionComponent } from 'react';
import { StyledButton, StyledLabel } from './button.styles';
import { ButtonType } from '../../models/button-type.model';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { IconType } from '../../models/icon-type.model';
import { noop } from '../../utils/noop.util';

interface Props {
    label: string;
    disabled?: boolean;
    icon?: IconType;
    onClick?: () => void;
    type?: ButtonType;
}

export const Button: FunctionComponent<Props> = ({
    label,
    disabled = false,
    icon,
    onClick = noop,
    type: buttonType = ButtonType.Default,
}) => (
    <StyledButton type="button" disabled={disabled} onClick={onClick} buttonType={buttonType}>
        {icon && <Icon type={icon} size={IconSize.Small} />}
        <StyledLabel>{label}</StyledLabel>
    </StyledButton>
);
