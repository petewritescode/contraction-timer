import styled from 'styled-components';

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.color.neutralMax25};
`;

export const StyledContainer = styled.ul`
    display: flex;
`;

export const StyledItem = styled.li`
    flex: 1;
`;
