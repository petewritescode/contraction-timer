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
    padding: 50px 20px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledDialog = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    color: #333333;
`;

export const StyledHeader = styled.header`
    display: flex;
    margin-bottom: 1rem;
`;

export const StyledHeading = styled.h1`
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const StyledClose = styled.div`
    margin-top: 0.25rem;
    margin-left: 1rem;
`;

export const StyledCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -1rem;
    padding: 1rem;
`;

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 1.5rem;
`;

export const StyledPrimaryButton = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #28a5e3;
    color: #ffffff;
`;

export const StyledSecondaryButton = styled.button`
    margin-right: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #999999;
    color: #ffffff;
`;
