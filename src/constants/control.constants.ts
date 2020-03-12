import { ControlType } from '../models/control-type.model';
import { IconName } from '../models/icon-name.model';

export const TYPE_TO_COLOR_MAP: Partial<Record<ControlType, string>> = {
    [ControlType.Start]: '#3cecb5',
};

export const TYPE_TO_ICON_NAME_MAP: Record<ControlType, IconName> = {
    [ControlType.Finish]: IconName.Finish,
    [ControlType.Pause]: IconName.Pause,
    [ControlType.Start]: IconName.Start,
};
