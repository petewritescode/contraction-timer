import React, { FunctionComponent } from 'react';
import { CONTROL_TYPE_TO_ICON_NAME_MAP } from '../../constants/control.constants';
import { ControlType } from '../../models/control-type.model';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { noop } from '../../utils/noop.util';
import { StyledControl } from './control.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

interface Props {
    type: ControlType;
    disabled?: boolean;
    primary?: boolean;
    onClick?: () => void;
}

export const Control: FunctionComponent<Props> = ({ type, disabled = false, primary = false, onClick = noop }) => {
    const status = useSelector(timerSelectors.getStatus);

    const iconName = CONTROL_TYPE_TO_ICON_NAME_MAP[type];
    const iconSize = primary ? IconSize.ExtraLarge : IconSize.Medium;

    return (
        <StyledControl controlType={type} status={status} disabled={disabled} primary={primary} onClick={onClick}>
            <Icon name={iconName} size={iconSize} />
        </StyledControl>
    );
};
