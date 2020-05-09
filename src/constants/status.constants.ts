import { Status } from '../models/status.model';

export const STATUS_TO_LABEL_MAP: Record<Status, string> = {
    [Status.Contraction]: 'Contraction',
    [Status.Finished]: 'Stopped',
    [Status.Ready]: 'Stopped',
    [Status.Rest]: 'Rest',
};
