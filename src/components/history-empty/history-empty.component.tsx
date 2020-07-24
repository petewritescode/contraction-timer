import React, { FunctionComponent } from 'react';
import { StyledHistoryEmpty, StyledIcon } from './history-empty.styles';
import { Icon } from '../icon/icon.component';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';

export const HistoryEmpty: FunctionComponent = () => (
    <StyledHistoryEmpty>
        <StyledIcon>
            <Icon name={IconName.Pregnant} size={IconSize.ExtraLarge} />
        </StyledIcon>

        <p>Your completed contractions will appear here</p>
    </StyledHistoryEmpty>
);
