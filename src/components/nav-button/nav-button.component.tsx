import { NAV_BUTTON_TYPE_TO_ICON_NAME_MAP, NAV_BUTTON_TYPE_TO_LABEL_MAP } from '../../constants/button.constants';
import React, { FunctionComponent } from 'react';
import { StyledIcon, StyledNavButton } from './nav-button.styles';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { NavButtonType } from '../../models/nav-button-type.model';
import { noop } from '../../utils/noop.util';

interface Props {
    type: NavButtonType,
    selected?: boolean;
    onClick?: () => void;
}

export const NavButton: FunctionComponent<Props> = ({ type, selected, onClick = noop }) => {
    const iconName = NAV_BUTTON_TYPE_TO_ICON_NAME_MAP[type];
    const label = NAV_BUTTON_TYPE_TO_LABEL_MAP[type];

    return (
        <StyledNavButton selected={selected} type="button" onClick={onClick}>
            <StyledIcon>
                <Icon name={iconName} size={IconSize.Medium} />
            </StyledIcon>

            {label}
        </StyledNavButton>
    );
};
