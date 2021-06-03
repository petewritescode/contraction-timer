import { StyledIcon, StyledNavLink } from './nav-link.styles';
import { Icon } from '../../icon/icon.component';
import { IconSize } from '../../../models/icon-size.model';
import { IconType } from '../../../models/icon-type.model';
import React from 'react';

interface Props {
  to: string;
  icon: IconType;
  label: string;
}

export const NavLink: React.FC<Props> = ({ to, icon, label }) => (
  <StyledNavLink to={to} exact>
    <StyledIcon>
      <Icon type={icon} size={IconSize.Medium} />
    </StyledIcon>

    {label}
  </StyledNavLink>
);
