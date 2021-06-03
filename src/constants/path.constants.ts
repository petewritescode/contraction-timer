import { Path } from '../models/path.model';
import { View } from '../models/view.model';

export const PATH_TO_VIEW_MAP: Record<Path, View> = {
  [Path.Timer]: View.Timer,
  [Path.History]: View.History,
};
