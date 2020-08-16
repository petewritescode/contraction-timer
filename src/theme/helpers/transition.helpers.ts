import { Theme } from '../../models/theme.model';

export const transitionDuration = ({ theme }: { theme: Theme }): string => theme.transition.duration;
