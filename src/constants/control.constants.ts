import { ControlType } from '../models/control-type.model';
import { IconName } from '../models/icon-name.model';

export const CONTROL_TYPE_TO_ICON_NAME_MAP: Record<ControlType, IconName> = {
    [ControlType.Clear]: IconName.Clear,
    [ControlType.History]: IconName.History,
    [ControlType.Pause]: IconName.Pause,
    [ControlType.Start]: IconName.Start,
    [ControlType.Stop]: IconName.Stop,
    [ControlType.Timer]: IconName.Timer,
};
