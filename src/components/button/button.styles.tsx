import { borderRadius, color, pxToRem, spacing, transitionDuration } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';
import { ButtonType } from '../../models/button-type.model';

interface Props {
  buttonType: ButtonType;
  disabled?: boolean;
}

const buttonBackgroundColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case ButtonType.Cancel:
      return color('neutralMid1');
    case ButtonType.Confirm:
      return color('rest');
    default:
      return color('neutralMin');
  }
};

const buttonColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case ButtonType.Cancel:
    case ButtonType.Confirm:
      return color('neutralMin');
    default:
      return color('neutralMid2');
  }
};

export const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  height: ${pxToRem(30)};
  padding-right: ${spacing('m')};
  padding-left: ${spacing('s')};
  transition: opacity ${transitionDuration('m')};
  border-radius: ${borderRadius('xl')};
  background-color: ${({ buttonType }) => buttonBackgroundColor(buttonType)};
  color: ${({ buttonType }) => buttonColor(buttonType)};
  font-weight: bold;

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
  `}
`;

export const StyledLabel = styled.span`
  margin-left: ${spacing('s')};
`;
