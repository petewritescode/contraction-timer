import { StyledHistoryEmpty, StyledIcon } from './history-empty.styles';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { IconType } from '../../models/icon-type.model';
import React from 'react';

export const HistoryEmpty: React.FC = () => (
    <StyledHistoryEmpty>
        <StyledIcon>
            <Icon type={IconType.Pregnant} size={IconSize.ExtraLarge} />
        </StyledIcon>

        <p>Your completed contractions will appear here</p>
    </StyledHistoryEmpty>
);
