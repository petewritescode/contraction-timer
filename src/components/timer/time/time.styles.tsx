import { breakpoint, fontSize } from '../../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

export const StyledTime = styled.div`
    font-size: ${fontSize('xxxl')};

    ${breakpoint('s', css`
        font-size: ${fontSize('xxxxl')};
    `)}

    ${breakpoint('m', css`
        font-size: ${fontSize('xxxxxl')};
    `)}
`;
