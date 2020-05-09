import { ControlType } from '../models/control-type.model';
import { IconName } from '../models/icon-name.model';

export const TYPE_TO_ICON_NAME_MAP: Record<ControlType, IconName> = {
    [ControlType.Clear]: IconName.Clear,
    [ControlType.Finish]: IconName.Finish,
    [ControlType.Start]: IconName.Start,
    [ControlType.Stop]: IconName.Stop,
};
