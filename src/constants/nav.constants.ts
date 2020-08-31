import { IconName } from '../models/icon-name.model';
import { NavLinkType } from '../models/nav-link-type.model';

export const NAV_LINK_TYPE_TO_ICON_NAME_MAP: Record<NavLinkType, IconName> = {
    [NavLinkType.History]: IconName.History,
    [NavLinkType.Timer]: IconName.Timer,
};

export const NAV_LINK_TYPE_TO_LABEL_MAP: Record<NavLinkType, string> = {
    [NavLinkType.History]: 'History',
    [NavLinkType.Timer]: 'Timer',
};
