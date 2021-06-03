import 'styled-components';
import { Theme } from '../models/theme.model';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
