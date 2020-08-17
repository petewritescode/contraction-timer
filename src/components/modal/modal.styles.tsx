import { color } from '../../theme/helpers/color.helpers';
import { fontSize } from '../../theme/helpers/font.helpers';
import { spacing } from '../../theme/helpers/spacing.helpers';
import styled from 'styled-components';

export const StyledBackground = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: ${spacing('xl')} ${spacing('l')};
    overflow: auto;
    background-color: ${color('neutralMax50')};
`;

export const StyledDialog = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    padding: ${spacing('l')};
    border-radius: 10px;
    background-color: ${color('neutralMin')};
    color: ${color('neutralMid2')};
`;

export const StyledHeader = styled.header`
    display: flex;
    margin-bottom: ${spacing('l')};
`;

export const StyledHeading = styled.h1`
    flex-grow: 1;
    font-size: ${fontSize('l')};
    font-weight: bold;
`;

export const StyledClose = styled.div`
    margin-top: ${spacing('s')};
    margin-left: ${spacing('l')};
`;

export const StyledCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -${spacing('l')};
    padding: ${spacing('l')};
`;

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row-reverse;
    margin-top: ${spacing('l')};
`;

export const StyledPrimaryButton = styled.button`
    padding: ${spacing('s')} ${spacing('m')};
    border-radius: 5px;
    background-color: ${color('rest')};
    color: ${color('neutralMin')};
`;

export const StyledSecondaryButton = styled.button`
    margin-right: ${spacing('s')};
    padding: ${spacing('s')} ${spacing('m')};
    border-radius: 5px;
    background-color: ${color('neutralMid1')};
    color: ${color('neutralMin')};
`;
