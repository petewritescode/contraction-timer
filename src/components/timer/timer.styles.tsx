import styled from 'styled-components';

export const StyledTimer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    margin-right: auto;
    margin-left: auto;
`;

export const StyledStatusIndicator = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const StyledLabel = styled.div`
    text-transform: uppercase;
`;
