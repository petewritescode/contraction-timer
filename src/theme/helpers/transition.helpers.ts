import { Theme } from '../../models/theme.model';

export const transitionDuration = ({ theme }: { theme: Theme }) => `${theme.transition.duration}ms`;
