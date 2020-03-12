import React, { FunctionComponent } from 'react';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { Icon } from '../icon/icon.component';

export const ViewToggle: FunctionComponent = () => (
    <button type="button">
        <Icon name={IconName.List} size={IconSize.Medium} />
    </button>
);
