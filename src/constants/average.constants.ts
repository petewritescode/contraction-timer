import { AverageType } from '../models/average-type.model';

export const AVERAGE_TYPE_TO_LABEL_MAP: Record<AverageType, string> = {
    [AverageType.Duration]: 'Duration',
    [AverageType.Interval]: 'Interval',
};
