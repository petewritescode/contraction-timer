import { statusColor, transitionDuration } from '../../theme/helpers/theme.helpers';
import { Status } from '../../models/status.model';
import styled from 'styled-components';

interface LayoutProps {
    status: Status;
}

export const StyledLayout = styled.div<LayoutProps>`
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: background-color ${transitionDuration('m')};
    background-color: ${statusColor};
`;

export const StyledContent = styled.section`
    flex-grow: 1;
    overflow: auto;
`;
