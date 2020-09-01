import React, { FunctionComponent } from 'react';
import { Icon } from '../../icon/icon.component';
import { IconSize } from '../../../models/icon-size.model';
import { noop } from '../../../utils/noop.util';
import { PRIMARY_CONTROL_TYPE_TO_ICON_TYPE_MAP } from '../../../constants/control.constants';
import { PrimaryControlType } from '../../../models/primary-control-type.model';
import { StyledPrimaryControl } from './primary-control.styles';
import { timerSelectors } from '../../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

interface Props {
    type: PrimaryControlType;
    onClick?: () => void;
}

export const PrimaryControl: FunctionComponent<Props> = ({ type, onClick = noop }) => {
    const status = useSelector(timerSelectors.getStatus);
    const iconType = PRIMARY_CONTROL_TYPE_TO_ICON_TYPE_MAP[type];

    return (
        <StyledPrimaryControl type="button" status={status} onClick={onClick}>
            <Icon type={iconType} size={IconSize.Large} />
        </StyledPrimaryControl>
    );
};
