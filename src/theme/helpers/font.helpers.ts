import { Theme } from '../../models/theme.model';

export const fontSize = (name: keyof Theme['font']['size']) => ({ theme }: { theme: Theme }): string => theme.font.size[name];
