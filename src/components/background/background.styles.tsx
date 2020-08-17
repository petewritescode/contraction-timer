import { statusColor, transition } from '../../theme/helpers/theme.helpers';
import { Status } from '../../models/status.model';
import styled from 'styled-components';

interface Props {
    status: Status;
}

export const StyledBackground = styled.div<Props>`
    width: 100%;
    height: 100%;
    transition: background-color ${transition('m')};
    background-color: ${statusColor};
`;
