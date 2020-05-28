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
    max-width: 600px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
`;

export const StyledContent = styled.main`
    flex-grow: 1;
`;

export const StyledControls = styled.div`
    padding-bottom: 50px;
`;
