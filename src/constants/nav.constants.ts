import { IconType } from '../models/icon-type.model';
import { NavLinkType } from '../models/nav-link-type.model';

export const NAV_LINK_TYPE_TO_ICON_TYPE_MAP: Record<NavLinkType, IconType> = {
    [NavLinkType.History]: IconType.History,
    [NavLinkType.Timer]: IconType.Timer,
};

export const NAV_LINK_TYPE_TO_LABEL_MAP: Record<NavLinkType, string> = {
    [NavLinkType.History]: 'History',
    [NavLinkType.Timer]: 'Timer',
};
