import { PRIMARY_CONTROL_TYPE_TO_ICON_TYPE_MAP, PRIMARY_CONTROL_TYPE_TO_LABEL_MAP } from '../../../constants/control.constants';
import React, { FunctionComponent } from 'react';
import { Icon } from '../../icon/icon.component';
import { IconSize } from '../../../models/icon-size.model';
import { PrimaryControlType } from '../../../models/primary-control-type.model';
import { StyledPrimaryControl } from './primary-control.styles';
import { timerSelectors } from '../../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

interface Props {
    type: PrimaryControlType;
    onClick: () => void;
}

export const PrimaryControl: FunctionComponent<Props> = ({ type, onClick }) => {
    const status = useSelector(timerSelectors.getStatus);
    const iconType = PRIMARY_CONTROL_TYPE_TO_ICON_TYPE_MAP[type];
    const label = PRIMARY_CONTROL_TYPE_TO_LABEL_MAP[type];

    return (
        <StyledPrimaryControl type="button" aria-label={label} status={status} onClick={onClick}>
            <Icon type={iconType} size={IconSize.Large} />
        </StyledPrimaryControl>
    );
};
