import { IconName } from '../models/icon-name.model';
import { NavButtonType } from '../models/nav-button-type.model';
import { PrimaryButtonType } from '../models/primary-button-type.model';

export const NAV_BUTTON_TYPE_TO_ICON_NAME_MAP: Record<NavButtonType, IconName> = {
    [NavButtonType.History]: IconName.History,
    [NavButtonType.Timer]: IconName.Timer,
};

export const NAV_BUTTON_TYPE_TO_LABEL_MAP: Record<NavButtonType, string> = {
    [NavButtonType.History]: 'History',
    [NavButtonType.Timer]: 'Timer',
};

export const PRIMARY_BUTTON_TYPE_TO_ICON_NAME_MAP: Record<PrimaryButtonType, IconName> = {
    [PrimaryButtonType.Start]: IconName.Start,
    [PrimaryButtonType.Stop]: IconName.Stop,
};
