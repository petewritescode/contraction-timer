import { Theme } from '../../models/theme.model';

export const borderWidth = ({ theme }: { theme: Theme }): string => theme.border.width;

export const borderRadius = (name: keyof Theme['border']['radius']) => ({ theme }: { theme: Theme }): string => theme.border.radius[name];
