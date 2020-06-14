import { IconName } from '../models/icon-name.model';
import { IconSize } from '../models/icon-size.model';

export const ICON_NAME_TO_CODE_MAP: Record<IconName, string> = {
    [IconName.Clear]: 'e14c',
    [IconName.History]: 'e889',
    [IconName.Pause]: 'e034',
    [IconName.Start]: 'e037',
    [IconName.Stop]: 'e047',
    [IconName.Timer]: 'e425',
};

export const ICON_SIZE_TO_PIXELS_MAP: Record<IconSize, number> = {
    [IconSize.Small]: 18,
    [IconSize.Medium]: 24,
    [IconSize.Large]: 36,
    [IconSize.ExtraLarge]: 48,
};
