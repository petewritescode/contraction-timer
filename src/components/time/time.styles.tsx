import styled, { css } from 'styled-components';
import { breakpoint } from '../../theme/helpers/breakpoint.helpers';
import { fontSize } from '../../theme/helpers/font.helpers';

export const StyledTime = styled.div`
    font-size: ${fontSize('xxxl')};

    ${breakpoint('s', css`
        font-size: ${fontSize('xxxxl')};
    `)}
`;
