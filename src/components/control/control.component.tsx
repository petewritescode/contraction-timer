import React, { FunctionComponent } from 'react';
import { TYPE_TO_COLOR_MAP, TYPE_TO_ICON_NAME_MAP } from '../../constants/control.constants';
import { ControlType } from '../../models/control-type.model';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { Icon } from '../icon/icon.component';
import { StyledControl } from './control.styles';

interface Props {
    type: ControlType;
    primary?: boolean;
}

const getColor = (type: ControlType): string => TYPE_TO_COLOR_MAP[type];
const getIconName = (type: ControlType): IconName => TYPE_TO_ICON_NAME_MAP[type];
const getIconSize = (primary: boolean): IconSize => (primary ? IconSize.ExtraLarge : IconSize.Medium);

export const Control: FunctionComponent<Props> = ({ type, primary = false }) => (
    <StyledControl primary={primary} color={getColor(type)}>
        <Icon name={getIconName(type)} size={getIconSize(primary)} />
    </StyledControl>
);
