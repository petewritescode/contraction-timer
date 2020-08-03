import styled from 'styled-components';

export const StyledBackground = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const StyledLayout = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const StyledContent = styled.main`
    flex-grow: 1;
    overflow: auto;
`;
