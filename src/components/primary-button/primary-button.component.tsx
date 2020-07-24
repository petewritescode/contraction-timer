import React, { FunctionComponent } from 'react';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { noop } from '../../utils/noop.util';
import { PRIMARY_BUTTON_TYPE_TO_ICON_NAME_MAP } from '../../constants/button.constants';
import { PrimaryButtonType } from '../../models/primary-button-type.model';
import { StyledPrimaryButton } from './primary-button.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

interface Props {
    type: PrimaryButtonType;
    onClick?: () => void;
}

export const PrimaryButton: FunctionComponent<Props> = ({ type, onClick = noop }) => {
    const status = useSelector(timerSelectors.getStatus);
    const iconName = PRIMARY_BUTTON_TYPE_TO_ICON_NAME_MAP[type];

    return (
        <StyledPrimaryButton type="button" status={status} onClick={onClick}>
            <Icon name={iconName} size={IconSize.Large} />
        </StyledPrimaryButton>
    );
};
