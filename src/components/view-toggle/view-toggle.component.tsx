import React, { FunctionComponent } from 'react';
import { Icon } from '../icon/icon.component';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { StyledViewToggle } from './view-toggle.styles';

export const ViewToggle: FunctionComponent = () => (
    <StyledViewToggle>
        <Icon name={IconName.List} size={IconSize.Medium} />
    </StyledViewToggle>
);
