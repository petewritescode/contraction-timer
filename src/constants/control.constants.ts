import { IconName } from '../models/icon-name.model';
import { PrimaryControlType } from '../models/primary-control-type.model';

export const PRIMARY_CONTROL_TYPE_TO_ICON_NAME_MAP: Record<PrimaryControlType, IconName> = {
    [PrimaryControlType.Start]: IconName.Start,
    [PrimaryControlType.Stop]: IconName.Stop,
};
