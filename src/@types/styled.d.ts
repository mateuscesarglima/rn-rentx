import theme from '@Styles/theme';
import 'styled-components';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
