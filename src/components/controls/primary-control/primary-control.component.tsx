import React, { FunctionComponent } from 'react';
import { Icon } from '../../icon/icon.component';
import { IconSize } from '../../../models/icon-size.model';
import { noop } from '../../../utils/noop.util';
import { PRIMARY_CONTROL_TYPE_TO_ICON_NAME_MAP } from '../../../constants/control.constants';
import { PrimaryControlType } from '../../../models/primary-control-type.model';
import { StyledPrimaryControl } from './primary-control.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../../store/timer/timer.selectors';

interface Props {
    type: PrimaryControlType;
    onClick?: () => void;
}

export const PrimaryControl: FunctionComponent<Props> = ({ type, onClick = noop }) => {
    const status = useSelector(timerSelectors.getStatus);
    const iconName = PRIMARY_CONTROL_TYPE_TO_ICON_NAME_MAP[type];

    return (
        <StyledPrimaryControl type="button" status={status} onClick={onClick}>
            <Icon name={iconName} size={IconSize.Large} />
        </StyledPrimaryControl>
    );
};
