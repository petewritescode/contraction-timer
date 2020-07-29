import styled from 'styled-components';

// Take inspiration from Bootstrap. I quite like the simple way they handle scrolling. Vertically centre if possible.
// https://getbootstrap.com/docs/4.0/components/modal/

export const StyledBackground = styled.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledDialog = styled.main`
    width: 100%;
    max-width: 500px;
    padding: 20px;
    background-color: #ffffff;
    color: #000000;
`;
