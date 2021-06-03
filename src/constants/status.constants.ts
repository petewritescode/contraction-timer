import { Status } from '../models/status.model';

export const STATUS_TO_LABEL_MAP: Record<Status, string> = {
  [Status.Contraction]: 'Contraction',
  [Status.Ready]: 'Ready',
  [Status.Rest]: 'Rest',
};
