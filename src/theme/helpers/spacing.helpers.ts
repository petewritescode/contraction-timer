import { Theme } from '../../models/theme.model';

export const spacing = (name: keyof Theme['spacing']) => ({ theme }: { theme: Theme }): string => theme.spacing[name];
