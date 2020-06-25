import React, { FunctionComponent } from 'react';
import { SECONDARY_BUTTON_TYPE_TO_ICON_NAME_MAP, SECONDARY_BUTTON_TYPE_TO_LABEL_MAP } from '../../constants/button.constants';
import { StyledLabel, StyledSecondaryButton } from './secondary-button.styles';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { noop } from '../../utils/noop.util';
import { SecondaryButtonType } from '../../models/secondary-button-type.model';

interface Props {
    type: SecondaryButtonType;
    disabled?: boolean;
    onClick?: () => void;
}

export const SecondaryButton: FunctionComponent<Props> = ({ type, disabled, onClick = noop }) => {
    const iconName = SECONDARY_BUTTON_TYPE_TO_ICON_NAME_MAP[type];
    const label = SECONDARY_BUTTON_TYPE_TO_LABEL_MAP[type];

    return (
        <StyledSecondaryButton type="button" disabled={disabled} onClick={onClick}>
            <Icon name={iconName} size={IconSize.Small} />
            <StyledLabel>{label}</StyledLabel>
        </StyledSecondaryButton>
    );
};
