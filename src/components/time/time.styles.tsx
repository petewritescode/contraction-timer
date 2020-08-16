import { fontSize } from '../../theme/helpers/font.helpers';
import styled from 'styled-components';

export const StyledTime = styled.div`
    font-size: ${fontSize('xxxl')};

    @media screen and (min-width: 375px) {
        font-size: ${fontSize('xxxxl')};
    }
`;
