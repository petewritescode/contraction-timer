import { color } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledBackground = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 40px 20px;
    overflow: auto;
    background-color: ${color('neutralMax50')};
`;

export const StyledDialog = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: ${color('neutralMin')};
    color: ${color('neutralMid2')};
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
    background-color: ${color('rest')};
    color: ${color('neutralMin')};
`;

export const StyledSecondaryButton = styled.button`
    margin-right: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${color('neutralMid1')};
    color: ${color('neutralMin')};
`;
