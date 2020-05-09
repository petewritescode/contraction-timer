import React, { FunctionComponent } from 'react';
import { ControlType } from '../../models/control-type.model';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { noop } from '../../utils/noop.utils';
import { StyledControl } from './control.styles';
import { TYPE_TO_ICON_NAME_MAP } from '../../constants/control.constants';

interface Props {
    type: ControlType;
    primary?: boolean;
    onClick?: () => void;
}

export const Control: FunctionComponent<Props> = ({ type, primary = false, onClick = noop }) => {
    const iconName = TYPE_TO_ICON_NAME_MAP[type];
    const iconSize = primary ? IconSize.ExtraLarge : IconSize.Medium;

    return (
        <StyledControl controlType={type} primary={primary} onClick={onClick}>
            <Icon name={iconName} size={iconSize} />
        </StyledControl>
    );
};
