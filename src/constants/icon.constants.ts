import { IconSize } from '../models/icon-size.model';
import { IconType } from '../models/icon-type.model';

export const ICON_TYPE_TO_CODE_MAP: Record<IconType, string> = {
    [IconType.Clear]: 'e14c',
    [IconType.Close]: 'e14c',
    [IconType.History]: 'e889',
    [IconType.Pause]: 'e034',
    [IconType.Pregnant]: 'e91e',
    [IconType.Start]: 'e037',
    [IconType.Stop]: 'e047',
    [IconType.Timer]: 'e425',
};

export const ICON_SIZE_TO_PIXELS_MAP: Record<IconSize, number> = {
    [IconSize.Small]: 18,
    [IconSize.Medium]: 24,
    [IconSize.Large]: 48,
    [IconSize.ExtraLarge]: 72,
};
