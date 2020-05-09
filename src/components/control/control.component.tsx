import React, { FunctionComponent } from 'react';
import { ControlType } from '../../models/control-type.model';
import { Icon } from '../icon/icon.component';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { noop } from '../../helpers/noop.helper';
import { StyledControl } from './control.styles';
import { TYPE_TO_ICON_NAME_MAP } from '../../constants/control.constants';

interface Props {
    type: ControlType;
    primary?: boolean;
    onClick?: () => void;
}

const getIconName = (type: ControlType): IconName => TYPE_TO_ICON_NAME_MAP[type];
const getIconSize = (primary: boolean): IconSize => (primary ? IconSize.ExtraLarge : IconSize.Medium);

export const Control: FunctionComponent<Props> = ({ type, primary = false, onClick = noop }) => (
    <StyledControl controlType={type} primary={primary} onClick={onClick}>
        <Icon name={getIconName(type)} size={getIconSize(primary)} />
    </StyledControl>
);
