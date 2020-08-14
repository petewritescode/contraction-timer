import { Status } from '../../models/status.model';
import { statusColor } from '../../theme/helpers/color.helpers';
import styled from 'styled-components';
import { transitionDuration } from '../../theme/helpers/transition.helpers';

interface Props {
    status: Status;
}

export const StyledBackground = styled.div<Props>`
    width: 100%;
    height: 100%;
    transition: background-color ${transitionDuration};
    background-color: ${statusColor};
`;
